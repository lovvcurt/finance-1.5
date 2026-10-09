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
    'shopping', 'telecom', 'subscriptions', 'education', 'salary', 'freelance',
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
  const VALID_TABS = new Set(['dashboard', 'transactions', 'subscriptions', 'analytics', 'forecast', 'debts']);
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

    const transactions = normalizeRecords(state.transactions, 'Операции', record => ({
      id: requireId(record.id, 'Операция'),
      type: ['income', 'expense'].includes(record.type) ? record.type : (() => { throw new Error('Операция: некорректный тип'); })(),
      amount: requireAmount(record.amount, 'Операция'),
      category: requireId(record.category, 'Категория операции'),
      date: requireDateOnly(record.date, 'Операция'),
      note: requireText(record.note ?? '', 'Комментарий операции', 500, true)
    }));

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
      accent: ['blue', 'violet', 'emerald', 'rose'].includes(settingsSource.accent) ? settingsSource.accent : 'blue'
    };

    return {
      transactions,
      subscriptions,
      debts,
      categories,
      budgets,
      currentTab: VALID_TABS.has(state.currentTab) ? state.currentTab : 'dashboard',
      txFilterType: ['all', 'expense', 'income'].includes(state.txFilterType) ? state.txFilterType : 'all',
      activeTxModalType: state.activeTxModalType === 'income' ? 'income' : 'expense',
      lastNotifiedTimestamp,
      notificationsMode,
      settings,
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
    return JSON.stringify({
      format: 'finflow-backup',
      version: 1,
      exportedAt,
      state: normalizeAppState(state)
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
      transaction.type === 'income' ? 'Доход' : 'Расход',
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
    DEFAULT_BUDGETS,
    MAX_BACKUP_BYTES,
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
