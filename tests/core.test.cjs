const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const core = require('../core.js');

const validState = {
  transactions: [
    { id: 'tx-1', type: 'expense', amount: 125.5, category: 'food', date: '2026-10-04', note: 'Обед' }
  ],
  subscriptions: [
    { id: 'sub-1', name: 'Музыка', amount: 299, payday: 15, cycle: 'monthly', category: 'subscriptions', active: true }
  ],
  debts: [
    { id: 'debt-1', person: 'Алексей', amount: 1000, dueDate: null, note: '', type: 'i_owe', settled: false, createdAt: '2026-10-01' }
  ],
  categories: [
    { id: 'custom-1', name: 'Кофе', type: 'expense', iconKey: 'coffee', color: '#3B82F6', bgColor: 'rgba(59,130,246,.15)' }
  ],
  budgets: { food: 30000, 'custom-1': 1000 },
  currentTab: 'dashboard',
  txFilterType: 'all',
  activeTxModalType: 'expense',
  notificationsMode: 'off',
  lastNotifiedTimestamp: 0,
  debtFilter: 'all',
  settings: { currency: 'PLN', accent: 'violet' }
};

test('normalizes older states with omitted optional collections', () => {
  const state = core.normalizeAppState({ transactions: [] });
  assert.deepEqual(state.transactions, []);
  assert.deepEqual(state.subscriptions, []);
  assert.deepEqual(state.debts, []);
  assert.deepEqual(state.categories, []);
  assert.equal(state.currentTab, 'dashboard');
  assert.deepEqual(state.settings, { currency: 'RUB', accent: 'blue' });
  assert.equal(state.budgets.food, core.DEFAULT_BUDGETS.food);
});

test('keeps valid display preferences and safely defaults unsupported values', () => {
  assert.deepEqual(core.normalizeAppState(validState).settings, { currency: 'PLN', accent: 'violet' });
  assert.deepEqual(core.normalizeAppState({ settings: { currency: 'BTC', accent: 'not-a-theme' } }).settings, { currency: 'RUB', accent: 'blue' });
});

test('formats selected currencies without dropping fractional amounts', () => {
  assert.match(core.formatCurrency(125.5, 'RUB'), /125,5/);
  assert.match(core.formatCurrency(125.5, 'PLN'), /125,5/);
  assert.equal(core.formatCurrency(100, 'unsupported'), core.formatCurrency(100, 'RUB'));
  assert.ok(core.currencySymbol('EUR'));
});

test('round-trips current backups and imports legacy JSON backups', () => {
  const backup = core.serializeBackup(validState, '2026-10-04T09:00:00.000Z');
  const restored = core.parseBackup(backup);
  assert.deepEqual(restored.transactions, validState.transactions);
  assert.deepEqual(restored.subscriptions, validState.subscriptions);
  assert.deepEqual(restored.categories, validState.categories);
  assert.deepEqual(core.parseBackup(JSON.stringify(validState)).transactions, validState.transactions);
});

test('rejects malformed, unsupported, oversized, and injection-shaped backups', () => {
  assert.throws(() => core.parseBackup('{}'), /список операций/);
  assert.throws(() => core.parseBackup(JSON.stringify({ format: 'finflow-backup', version: 99, state: validState })), /не поддерживается/);
  assert.throws(() => core.parseBackup(' '.repeat(core.MAX_BACKUP_BYTES + 1)), /слишком большая/);

  const hostileState = structuredClone(validState);
  hostileState.transactions[0].id = `tx-1');alert(1);//`;
  assert.throws(() => core.parseBackup(JSON.stringify(hostileState)), /идентификатор/);
});

test('rejects invalid dates, amounts, and duplicate IDs before saving', () => {
  const invalidDate = structuredClone(validState);
  invalidDate.transactions[0].date = '2026-02-30';
  assert.throws(() => core.normalizeAppState(invalidDate), /некорректная дата/);

  const invalidAmount = structuredClone(validState);
  invalidAmount.transactions[0].amount = Infinity;
  assert.throws(() => core.normalizeAppState(invalidAmount), /некорректная сумма/);

  const duplicate = structuredClone(validState);
  duplicate.transactions.push({ ...duplicate.transactions[0] });
  assert.throws(() => core.normalizeAppState(duplicate), /повторяется идентификатор/);
});

test('parses date-only values in local time without UTC day shifts', () => {
  const date = core.parseDateOnly('2026-03-29');
  assert.equal(date.getFullYear(), 2026);
  assert.equal(date.getMonth(), 2);
  assert.equal(date.getDate(), 29);
  assert.equal(core.formatDateOnly(new Date(2026, 2, 29, 23, 30)), '2026-03-29');
});

test('escapes HTML and inline handler arguments in attribute context', () => {
  assert.equal(core.escapeHtml(`<img src=x onerror='x'>`), '&lt;img src=x onerror=&#039;x&#039;&gt;');
  const handler = core.inlineHandler('openTransactionEdit', `x" onclick="alert(1)&'`);
  assert.equal(handler.includes('"'), false);
  assert.equal(handler.includes('&'), true);
});

test('CSV export quotes fields and neutralizes spreadsheet formulas', () => {
  const csv = core.transactionsToCsv([
    { date: '2026-10-04', type: 'expense', category: 'food', note: '=HYPERLINK("https://example.test")', amount: 12 },
    { date: '2026-10-03', type: 'income', category: 'salary', note: 'Слово, с запятой', amount: 1200 }
  ], { food: { name: 'Еда' }, salary: { name: 'Зарплата' } });
  assert.match(csv, /^"Дата","Тип","Категория","Описание","Сумма \(RUB\)"/);
  assert.match(csv, /"'=HYPERLINK\(""https:\/\/example\.test""\)"/);
  assert.match(csv, /"Слово, с запятой"/);
  assert.match(core.transactionsToCsv([], {}, 'PLN'), /Сумма \(PLN\)/);
});

test('PWA manifest and service worker point at the app shell', () => {
  const root = path.resolve(__dirname, '..');
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
  const worker = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.equal(manifest.display, 'standalone');
  for (const icon of manifest.icons) assert.equal(fs.existsSync(path.join(root, icon.src.replace('./', ''))), true);
  assert.match(worker, /index\.html/);
  assert.match(html, /manifest\.webmanifest/);
  assert.match(html, /core\.js/);
  assert.match(html, /app\.js/);
  assert.match(html, /styles\.css/);
  assert.match(html, /tailwind\.generated\.css/);
  assert.doesNotMatch(html, /cdn\.tailwindcss\.com/);
  assert.match(html, /settings-currency/);
  assert.match(worker, /tailwind\.generated\.css/);
  const css = fs.readFileSync(path.join(root, 'tailwind.generated.css'), 'utf8');
  assert.match(css, /\.bg-emerald-500\\\/15/);
  assert.match(css, /\.hover\\:bg-emerald-600\\\/30:hover/);
});
