(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FinFlowCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const DEFAULT_BUDGETS = Object.freeze({
    food: 28000,
    restaurants: 12000,
    transport: 8000,
    housing: 22000,
    entertainment: 10000,
    health: 6000,
    shopping: 15000,
    telecom: 2000,
    subscriptions: 5000,
    education: 5000
  });

  const BUILT_IN_CATEGORY_IDS = new Set([
    'food', 'restaurants', 'transport', 'housing', 'entertainment', 'health',
    'shopping', 'telecom', 'subscriptions', 'education', 'salary', 'freelance', 'transfer',
    'investments', 'gifts'
  ]);
  const ICON_KEYS = new Set([
    'wallet', 'cart', 'coffee', 'car', 'home', 'phone', 'heart', 'game',
    'music', 'plane', 'gift', 'book', 'gym', 'pet', 'work', 'savings', 'other'
  ]);
  const COLOR_PALETTE = [
    ['#3B82F6', 'rgba(59,130,246,.15)'],
    ['#8B5CF6', 'rgba(139,92,246,.15)'],
    ['#EC4899', 'rgba(236,72,153,.15)'],
    ['#10B981', 'rgba(16,185,129,.15)'],
    ['#F59E0B', 'rgba(245,158,11,.15)'],
    ['#EF4444', 'rgba(239,68,68,.15)'],
    ['#06B6D4', 'rgba(6,182,212,.15)'],
    ['#84CC16', 'rgba(132,204,22,.15)']
  ];
  const DEFAULT_ACCOUNTS = Object.freeze([
    { id: 'account-main', name: 'Основной счёт', type: 'checking', openingBalance: 0, color: '#3B82F6' }
  ]);
  const ACCOUNT_COLORS = Object.freeze(COLOR_PALETTE.map(pair => pair[0]));
  const VALID_TABS = new Set(['dashboard', 'transactions', 'subscriptions', 'analytics', 'forecast', 'debts', 'goals', 'profile']);
  const SAFE_ID = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,79}$/;
  const FORBIDDEN_IDS = new Set(['constructor', 'prototype', 'toString', 'valueOf', '__proto__']);
  const MAX_RECORDS = 10000;
  const MAX_BACKUP_BYTES = 5 * 1024 * 1024;
  const MAX_AMOUNT = 1e12;

  function isRecord(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function isSafeId(value) {
    return typeof value === 'string' && SAFE_ID.test(value) && !FORBIDDEN_IDS.has(value);
  }

  function requireId(value, label) {
    if (!isSafeId(value)) throw new Error(`${label}: некорректный идентификатор`);
    return value;
  }

  function requireText(value, label, maxLength, allowEmpty = false) {
    if (typeof value !== 'string') throw new Error(`${label}: ожидается текст`);
    const text = value.trim();
    if ((!allowEmpty && !text) || text.length > maxLength) {
      throw new Error(`${label}: проверьте длину текста`);
    }
    return text;
  }

  function requireAmount(value, label, allowZero = false) {
    if (typeof value !== 'number' || !Number.isFinite(value) || value > MAX_AMOUNT || value < 0 || (!allowZero && value === 0)) {
      throw new Error(`${label}: некорректная сумма`);
    }
    return value;
  }

  function isValidDateOnly(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }

  function requireDateOnly(value, label) {
    if (!isValidDateOnly(value)) throw new Error(`${label}: некорректная дата`);
    return value;
  }

  function parseDateOnly(value) {
    if (!isValidDateOnly(value)) return new Date(NaN);
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDateOnly(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function advanceRecurringDate(dateString, cycle, anchorDay, anchorMonth) {
    const date = parseDateOnly(dateString);
    if (Number.isNaN(date.getTime())) throw new Error('Некорректная дата повтора');
    if (cycle === 'weekly') {
      date.setDate(date.getDate() + 7);
      return formatDateOnly(date);
    }
    if (cycle === 'monthly') {
      const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      const day = Math.min(anchorDay || date.getDate(), new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0).getDate());
      return formatDateOnly(new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day));
    }
    if (cycle === 'yearly') {
      const month = Number.isInteger(anchorMonth) ? anchorMonth : date.getMonth();
      const year = date.getFullYear() + 1;
      const day = Math.min(anchorDay || date.getDate(), new Date(year, month + 1, 0).getDate());
      return formatDateOnly(new Date(year, month, day));
    }
    throw new Error('Некорректный период повтора');
  }

  function calculateAccountBalances(accounts, transactions) {
    const balances = Object.fromEntries((Array.isArray(accounts) ? accounts : []).map(account => [account.id, Number(account.openingBalance) || 0]));
    (Array.isArray(transactions) ? transactions : []).forEach(transaction => {
      const amount = Number(transaction.amount) || 0;
      if (transaction.type === 'income' && Object.prototype.hasOwnProperty.call(balances, transaction.accountId)) balances[transaction.accountId] += amount;
      if (transaction.type === 'expense' && Object.prototype.hasOwnProperty.call(balances, transaction.accountId)) balances[transaction.accountId] -= amount;
      if (transaction.type === 'transfer') {
        if (Object.prototype.hasOwnProperty.call(balances, transaction.fromAccountId)) balances[transaction.fromAccountId] -= amount;
        if (Object.prototype.hasOwnProperty.call(balances, transaction.toAccountId)) balances[transaction.toAccountId] += amount;
      }
    });
    return balances;
  }

  function formatCurrency(amount, currency = 'RUB', locale = 'ru-RU') {
    const safeCurrency = ['RUB', 'USD', 'EUR', 'PLN'].includes(currency) ? currency : 'RUB';
    return new Intl.NumberFormat(locale, {
      style: 'currency', currency: safeCurrency, minimumFractionDigits: 0, maximumFractionDigits: 2
    }).format(Number(amount) || 0);
  }

  function currencySymbol(currency = 'RUB', locale = 'ru-RU') {
    const safeCurrency = ['RUB', 'USD', 'EUR', 'PLN'].includes(currency) ? currency : 'RUB';
    return new Intl.NumberFormat(locale, { style: 'currency', currency: safeCurrency, currencyDisplay: 'narrowSymbol' })
      .formatToParts(0).find(part => part.type === 'currency')?.value || safeCurrency;
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[character]);
  }

  function inlineHandler(functionName, ...args) {
    if (typeof functionName !== 'string' || !/^[A-Za-z_$][\w$]*$/.test(functionName)) {
      throw new Error('Некорректный обработчик события');
    }
    return escapeHtml(`${functionName}(${args.map(argument => JSON.stringify(String(argument))).join(',')})`);
  }

  function normalizeRecords(value, label, normalizeRecord) {
    if (value === undefined || value === null) return [];
    if (!Array.isArray(value) || value.length > MAX_RECORDS) throw new Error(`${label}: некорректный список`);
    const seen = new Set();
    return value.map((record, index) => {
      if (!isRecord(record)) throw new Error(`${label}[${index}]: некорректная запись`);
      const normalized = normalizeRecord(record, index);
      if (seen.has(normalized.id)) throw new Error(`${label}: повторяется идентификатор`);
      seen.add(normalized.id);
      return normalized;
    });
  }

  function normalizeAppState(rawState) {
    if (!isRecord(rawState)) throw new Error('Файл не содержит данных FinFlow');
    const state = rawState.format === 'finflow-backup' ? rawState.state : rawState;
    if (!isRecord(state)) throw new Error('Файл не содержит данных FinFlow');

    let accounts = normalizeRecords(state.accounts, 'Счета', record => {
      const type = ['checking', 'card', 'cash', 'savings'].includes(record.type) ? record.type : 'checking';
      const openingBalance = record.openingBalance === undefined ? 0 : record.openingBalance;
      if (typeof openingBalance !== 'number' || !Number.isFinite(openingBalance) || Math.abs(openingBalance) > MAX_AMOUNT) {
        throw new Error('Счёт: некорректный начальный баланс');
      }
      return {
        id: requireId(record.id, 'Счёт'),
        name: requireText(record.name, 'Счёт', 48),
        type,
        openingBalance,
        color: COLOR_PALETTE.some(pair => pair[0] === record.color) ? record.color : COLOR_PALETTE[0][0]
      };
    });
    if (!accounts.length) accounts = DEFAULT_ACCOUNTS.map(account => ({ ...account }));
    const accountIds = new Set(accounts.map(account => account.id));

    const transactions = normalizeRecords(state.transactions, 'Операции', record => {
      const type = ['income', 'expense', 'transfer'].includes(record.type) ? record.type : (() => { throw new Error('Операция: некорректный тип'); })();
      const common = {
        id: requireId(record.id, 'Операция'),
        type,
        amount: requireAmount(record.amount, 'Операция'),
        date: requireDateOnly(record.date, 'Операция'),
        note: requireText(record.note ?? '', 'Комментарий операции', 500, true)
      };
      if (type === 'transfer') {
        const fromAccountId = requireId(record.fromAccountId, 'Счёт отправления');
        const toAccountId = requireId(record.toAccountId, 'Счёт получения');
        if (fromAccountId === toAccountId || !accountIds.has(fromAccountId) || !accountIds.has(toAccountId)) {
          throw new Error('Перевод: выберите два разных существующих счёта');
        }
        return { ...common, category: 'transfer', fromAccountId, toAccountId };
      }
      const accountId = record.accountId === undefined ? accounts[0].id : requireId(record.accountId, 'Счёт операции');
      if (!accountIds.has(accountId)) throw new Error('Операция: указанный счёт не найден');
      const recurringId = record.recurringId ? requireId(record.recurringId, 'Повтор операции') : null;
      return {
        ...common,
        accountId,
        category: requireId(record.category, 'Категория операции'),
        recurringId
      };
    });

    const recurring = normalizeRecords(state.recurring, 'Повторяющиеся операции', record => {
      if (!['income', 'expense'].includes(record.type)) throw new Error('Повторяющаяся операция: некорректный тип');
      if (!['weekly', 'monthly', 'yearly'].includes(record.cycle)) throw new Error('Повторяющаяся операция: некорректный период');
      const accountId = requireId(record.accountId || accounts[0].id, 'Счёт повторяющейся операции');
      if (!accountIds.has(accountId)) throw new Error('Повторяющаяся операция: счёт не найден');
      if (record.enabled !== undefined && typeof record.enabled !== 'boolean') throw new Error('Повторяющаяся операция: некорректный статус');
      return {
        id: requireId(record.id, 'Повторяющаяся операция'),
        type: record.type,
        amount: requireAmount(record.amount, 'Повторяющаяся операция'),
        category: requireId(record.category, 'Категория повторяющейся операции'),
        accountId,
        note: requireText(record.note ?? '', 'Комментарий повторяющейся операции', 500, true),
        cycle: record.cycle,
        nextDate: requireDateOnly(record.nextDate, 'Дата повторяющейся операции'),
        anchorDay: Number.isInteger(record.anchorDay) && record.anchorDay >= 1 && record.anchorDay <= 31
          ? record.anchorDay : parseDateOnly(record.nextDate).getDate(),
        anchorMonth: Number.isInteger(record.anchorMonth) && record.anchorMonth >= 0 && record.anchorMonth <= 11
          ? record.anchorMonth : parseDateOnly(record.nextDate).getMonth(),
        enabled: record.enabled !== false
      };
    });

    const goals = normalizeRecords(state.goals, 'Цели', record => {
      const deadline = record.deadline || null;
      const savedAmount = record.savedAmount === undefined ? 0 : record.savedAmount;
      return {
        id: requireId(record.id, 'Цель'),
        name: requireText(record.name, 'Цель', 64),
        targetAmount: requireAmount(record.targetAmount, 'Цель'),
        savedAmount: requireAmount(savedAmount, 'Накоплено по цели', true),
        deadline: deadline === null ? null : requireDateOnly(deadline, 'Срок цели'),
        kind: record.kind === 'emergency' ? 'emergency' : 'goal'
      };
    });

    const subscriptions = normalizeRecords(state.subscriptions, 'Подписки', record => {
      const payday = Number(record.payday);
      if (!Number.isInteger(payday) || payday < 1 || payday > 31) throw new Error('Подписка: некорректный день списания');
      if (record.cycle !== 'monthly' && record.cycle !== 'yearly') throw new Error('Подписка: некорректный период');
      if (record.active !== undefined && typeof record.active !== 'boolean') throw new Error('Подписка: некорректный статус');
      return {
        id: requireId(record.id, 'Подписка'),
        name: requireText(record.name, 'Подписка', 120),
        amount: requireAmount(record.amount, 'Подписка'),
        payday,
        cycle: record.cycle,
        category: requireId(record.category, 'Категория подписки'),
        active: record.active !== false
      };
    });

    const debts = normalizeRecords(state.debts, 'Долги', record => {
      if (record.type !== 'i_owe' && record.type !== 'owed_to_me') throw new Error('Долг: некорректное направление');
      if (record.settled !== undefined && typeof record.settled !== 'boolean') throw new Error('Долг: некорректный статус');
      const dueDate = record.dueDate || null;
      const createdAt = record.createdAt || formatDateOnly();
      return {
        id: requireId(record.id, 'Долг'),
        person: requireText(record.person, 'Долг', 120),
        amount: requireAmount(record.amount, 'Долг'),
        dueDate: dueDate === null ? null : requireDateOnly(dueDate, 'Срок долга'),
        note: requireText(record.note ?? '', 'Комментарий долга', 500, true),
        type: record.type,
        settled: record.settled === true,
        createdAt: requireDateOnly(createdAt, 'Дата долга')
      };
    });

    const categories = normalizeRecords(state.categories, 'Категории', record => {
      const id = requireId(record.id, 'Категория');
      if (BUILT_IN_CATEGORY_IDS.has(id)) throw new Error('Нельзя переопределить встроенную категорию');
      const colorPair = COLOR_PALETTE.find(pair => pair[0] === record.color && pair[1] === record.bgColor) || COLOR_PALETTE[0];
      return {
        id,
        name: requireText(record.name, 'Категория', 32),
        type: record.type === 'income' ? 'income' : record.type === 'expense' ? 'expense' : (() => { throw new Error('Категория: некорректный тип'); })(),
        iconKey: ICON_KEYS.has(record.iconKey) ? record.iconKey : 'other',
        color: colorPair[0],
        bgColor: colorPair[1]
      };
    });

    const budgetSource = state.budgets === undefined ? {} : state.budgets;
    if (!isRecord(budgetSource)) throw new Error('Бюджеты: некорректная структура');
    const budgets = { ...DEFAULT_BUDGETS };
    Object.entries(budgetSource).forEach(([categoryId, amount]) => {
      if (!isSafeId(categoryId)) throw new Error('Бюджет: некорректная категория');
      budgets[categoryId] = requireAmount(amount, 'Бюджет', true);
    });

    const notificationsMode = ['off', 'native', 'demo'].includes(state.notificationsMode) ? state.notificationsMode : 'off';
    const lastNotifiedTimestamp = Number.isFinite(state.lastNotifiedTimestamp) && state.lastNotifiedTimestamp >= 0 ? state.lastNotifiedTimestamp : 0;
    const settingsSource = isRecord(state.settings) ? state.settings : {};
    const settings = {
      currency: ['RUB', 'USD', 'EUR', 'PLN'].includes(settingsSource.currency) ? settingsSource.currency : 'RUB',
      accent: ['blue', 'violet', 'emerald', 'rose'].includes(settingsSource.accent) ? settingsSource.accent : 'blue',
      payday: Number.isInteger(settingsSource.payday) && settingsSource.payday >= 1 && settingsSource.payday <= 31 ? settingsSource.payday : 10
    };
    const privacySource = isRecord(state.privacy) ? state.privacy : {};
    const privacy = {
      hideBalances: privacySource.hideBalances === true,
      pinSalt: typeof privacySource.pinSalt === 'string' && /^[a-f0-9]{32}$/i.test(privacySource.pinSalt) ? privacySource.pinSalt : null,
      pinHash: typeof privacySource.pinHash === 'string' && /^[a-f0-9]{64}$/i.test(privacySource.pinHash) ? privacySource.pinHash : null
    };
    if (!privacy.pinSalt || !privacy.pinHash) {
      privacy.pinSalt = null;
      privacy.pinHash = null;
    }

    return {
      transactions,
      accounts,
      goals,
      recurring,
      subscriptions,
      debts,
      categories,
      budgets,
      currentTab: VALID_TABS.has(state.currentTab) ? state.currentTab : 'dashboard',
      txFilterType: ['all', 'expense', 'income', 'transfer'].includes(state.txFilterType) ? state.txFilterType : 'all',
      activeTxModalType: state.activeTxModalType === 'income' ? 'income' : 'expense',
      lastNotifiedTimestamp,
      notificationsMode,
      settings,
      privacy,
      debtFilter: ['all', 'owed_to_me', 'i_owe'].includes(state.debtFilter) ? state.debtFilter : 'all'
    };
  }

  function parseBackup(input) {
    let parsed = input;
    if (typeof input === 'string') {
      if (new TextEncoder().encode(input).byteLength > MAX_BACKUP_BYTES) throw new Error('Резервная копия слишком большая');
      try {
        parsed = JSON.parse(input);
      } catch {
        throw new Error('Файл содержит некорректный JSON');
      }
    }
    if (!isRecord(parsed)) throw new Error('Файл не содержит данных FinFlow');
    if (parsed.format === 'finflow-backup' && parsed.version !== 1) throw new Error('Версия резервной копии не поддерживается');
    const state = parsed.format === 'finflow-backup' ? parsed.state : parsed;
    if (!isRecord(state) || !Array.isArray(state.transactions)) throw new Error('Файл не содержит список операций FinFlow');
    return normalizeAppState(parsed);
  }

  function serializeBackup(state, exportedAt = new Date().toISOString()) {
    const safeState = normalizeAppState(state);
    safeState.privacy.pinHash = null;
    safeState.privacy.pinSalt = null;
    return JSON.stringify({
      format: 'finflow-backup',
      version: 1,
      exportedAt,
      state: safeState
    }, null, 2);
  }

  function csvCell(value) {
    let text = String(value ?? '');
    if (/^[\s\ufeff]*[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }

  function transactionsToCsv(transactions, categories, currency = 'RUB') {
    const categoryMap = categories || {};
    const currencyCode = ['RUB', 'USD', 'EUR', 'PLN'].includes(currency) ? currency : 'RUB';
    const header = ['Дата', 'Тип', 'Категория', 'Описание', `Сумма (${currencyCode})`];
    const rows = (Array.isArray(transactions) ? transactions : []).map(transaction => [
      transaction.date,
      transaction.type === 'income' ? 'Доход' : transaction.type === 'transfer' ? 'Перевод' : 'Расход',
      categoryMap[transaction.category]?.name || transaction.category,
      transaction.note || '',
      transaction.amount
    ]);
    return [header, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n');
  }

  function createId(prefix) {
    if (!isSafeId(prefix)) throw new Error('Некорректный префикс идентификатора');
    const randomUUID = globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function'
      ? globalThis.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    return `${prefix}-${randomUUID}`;
  }

  return {
    ACCOUNT_COLORS,
    DEFAULT_BUDGETS,
    DEFAULT_ACCOUNTS,
    MAX_BACKUP_BYTES,
    advanceRecurringDate,
    calculateAccountBalances,
    createId,
    currencySymbol,
    escapeHtml,
    formatCurrency,
    formatDateOnly,
    inlineHandler,
    isSafeId,
    normalizeAppState,
    parseBackup,
    parseDateOnly,
    serializeBackup,
    transactionsToCsv
  };
});
