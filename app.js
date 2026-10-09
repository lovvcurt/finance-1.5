    // =========================================================================
    // CATEGORY MASTER DEFINITIONS
    // =========================================================================
    let CATEGORIES = {
      food: { id: 'food', name: 'Еда и продукты', type: 'expense', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>` },
      restaurants: { id: 'restaurants', name: 'Рестораны и кафе', type: 'expense', color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>` },
      transport: { id: 'transport', name: 'Транспорт и авто', type: 'expense', color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 4h8m-9 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
      housing: { id: 'housing', name: 'Жилье и ЖКХ', type: 'expense', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` },
      entertainment: { id: 'entertainment', name: 'Развлечения', type: 'expense', color: '#EC4899', bgColor: 'rgba(236, 72, 153, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>` },
      health: { id: 'health', name: 'Здоровье и аптеки', type: 'expense', color: '#EF4444', bgColor: 'rgba(239, 68, 68, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
      shopping: { id: 'shopping', name: 'Покупки и одежда', type: 'expense', color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>` },
      telecom: { id: 'telecom', name: 'Связь и интернет', type: 'expense', color: '#6366F1', bgColor: 'rgba(99, 102, 241, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>` },
      subscriptions: { id: 'subscriptions', name: 'Подписки и сервисы', type: 'expense', color: '#84CC16', bgColor: 'rgba(132, 204, 22, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>` },
      education: { id: 'education', name: 'Образование', type: 'expense', color: '#14B8A6', bgColor: 'rgba(20, 184, 166, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>` },

      salary: { id: 'salary', name: 'Зарплата', type: 'income', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>` },
      freelance: { id: 'freelance', name: 'Фриланс и проекты', type: 'income', color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
      investments: { id: 'investments', name: 'Инвестиции', type: 'income', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>` },
      gifts: { id: 'gifts', name: 'Подарки и бонусы', type: 'income', color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.15)', svg: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13C10.832 19.477 9.246 19 7.5 19S4.168 19.477 3 20.253V7.253C4.168 6.477 5.754 6 7.5 6s3.332.477 4.5 1.253m0 13C13.168 19.477 14.754 19 16.5 19c1.747 0 3.332.477 4.5 1.253V7.253C19.832 6.477 18.247 6 16.5 6c-1.746 0-3.332.477-4.5 1.253"/></svg>` }
    };

    // User-selectable icon library for custom categories.
    const CATEGORY_ICONS = {
      wallet: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 2h18m-5 4h3"/></svg>`,
      cart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>`,
      coffee: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h13v5a4 4 0 01-4 4H8a4 4 0 01-4-4v-5zm13 1h2a2 2 0 010 4h-2M7 5c0 2 2 2 0 4m5-4c0 2 2 2 0 4"/></svg>`,
      car: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14l1-5-2-4H6L4 12l1 5zm0 0v2m14-2v2M7 13h.01M17 13h.01"/></svg>`,
      home: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11l9-8 9 8m-2-1v10H5V10"/></svg>`,
      phone: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2h4l2 5-3 2a16 16 0 007 7l2-3 5 2v4a2 2 0 01-2 2C10 21 3 14 3 5a2 2 0 013-3z"/></svg>`,
      heart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>`,
      game: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9h12a4 4 0 014 4v3a3 3 0 01-5 2l-2-2H9l-2 2a3 3 0 01-5-2v-3a4 4 0 014-4zm3 2v4m-2-2h4m6-1h.01M17 14h.01"/></svg>`,
      music: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18V5l10-2v13M9 18a3 3 0 11-3-3 3 3 0 003 3zm10-2a3 3 0 11-3-3 3 3 0 003 3z"/></svg>`,
      plane: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 14.5L3 12l-1-2 9.5 1.5L14 3l2 1-1 8.5L22 11l1 2-8 3.5V21l-2 1-1.5-5.5L5 18l-1-2 6.5-1.5z"/></svg>`,
      gift: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12v9H4v-9m18-4H2v4h20V8zM12 8v13M12 8H8.5a2.5 2.5 0 110-5C11 3 12 8 12 8zm0 0h3.5a2.5 2.5 0 100-5C13 3 12 8 12 8z"/></svg>`,
      book: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V5a2 2 0 012-2h14v16H6.5A2.5 2.5 0 004 21.5"/></svg>`,
      gym: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4v16m12-16v16M3 8h18M3 16h18M1 10v4m22-4v4"/></svg>`,
      pet: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c-2 0-3-2-2-4s3-2 4 0c1-2 3-2 4 0 1-2 3-2 4 0s0 4-2 4c2 1 3 3 2 5-1 2-3 2-5 1-2 1-4 1-5-1-1-2 0-4 2-5z"/></svg>`,
      work: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16a2 2 0 012 2v9H2V9a2 2 0 012-2zm4 0V5h8v2M2 13h20"/></svg>`,
      savings: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h12a4 4 0 014 4v5a3 3 0 01-3 3H6a3 3 0 01-3-3V8a1 1 0 011-1zm14 4h3v4h-3M8 12h4"/></svg>`,
      other: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01"/></svg>`
    };

    const CATEGORY_COLORS = [
      { color: '#3B82F6', bgColor: 'rgba(59,130,246,.15)' },
      { color: '#8B5CF6', bgColor: 'rgba(139,92,246,.15)' },
      { color: '#EC4899', bgColor: 'rgba(236,72,153,.15)' },
      { color: '#10B981', bgColor: 'rgba(16,185,129,.15)' },
      { color: '#F59E0B', bgColor: 'rgba(245,158,11,.15)' },
      { color: '#EF4444', bgColor: 'rgba(239,68,68,.15)' },
      { color: '#06B6D4', bgColor: 'rgba(6,182,212,.15)' },
      { color: '#84CC16', bgColor: 'rgba(132,204,22,.15)' }
    ];

    const {
      DEFAULT_BUDGETS,
      MAX_BACKUP_BYTES,
      createId,
      currencySymbol,
      escapeHtml,
      formatCurrency,
      formatDateOnly,
      inlineHandler,
      normalizeAppState: normalizeStoredState,
      parseBackup,
      parseDateOnly,
      serializeBackup,
      transactionsToCsv
    } = window.FinFlowCore;

    function getCategoryIcon(iconKey, fallbackSvg = '') {
      return CATEGORY_ICONS[iconKey] || fallbackSvg || CATEGORY_ICONS.other;
    }

    function rebuildCustomCategories() {
      const custom = Array.isArray(appState.categories) ? appState.categories : [];
      Object.keys(custom.reduce((acc, c) => { acc[c.id] = true; return acc; }, {})).forEach(id => {
        if (!['food','restaurants','transport','housing','entertainment','health','shopping','telecom','subscriptions','education','salary','freelance','investments','gifts'].includes(id)) delete CATEGORIES[id];
      });
      custom.forEach(c => {
        if (!c || !c.id || !c.name) return;
        CATEGORIES[c.id] = {
          id: c.id,
          name: c.name,
          type: c.type === 'income' ? 'income' : 'expense',
          color: c.color || CATEGORY_COLORS[0].color,
          bgColor: c.bgColor || CATEGORY_COLORS[0].bgColor,
          iconKey: c.iconKey || 'other',
          svg: getCategoryIcon(c.iconKey || 'other')
        };
      });
    }

    let appState = {
      transactions: [],
      subscriptions: [],
      budgets: { ...DEFAULT_BUDGETS },
      currentTab: 'dashboard',
      txFilterType: 'all',
      activeTxModalType: 'expense',
      lastNotifiedTimestamp: 0,
      notificationsMode: 'off', // 'off' | 'native' | 'demo'
      debts: [],
      categories: [],
      debtFilter: 'all',
      settings: { currency: 'RUB', accent: 'blue' }
    };
    let modalReturnFocus = null;

    const formatRub = (val) => formatCurrency(val, appState.settings?.currency || 'RUB');
    const getCurrencySymbol = () => currencySymbol(appState.settings?.currency || 'RUB');

    function applyUserPreferences() {
      const settings = appState.settings || { currency: 'RUB', accent: 'blue' };
      document.body.dataset.accent = settings.accent;
      const currencySelect = document.getElementById('settings-currency');
      if (currencySelect) currencySelect.value = settings.currency;
      document.querySelectorAll('[data-currency-label]').forEach(label => { label.textContent = getCurrencySymbol(); });
      document.querySelectorAll('[data-accent-option]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.accentOption === settings.accent));
      });
    }

    function updateCurrencyPreference(value) {
      if (!['RUB', 'USD', 'EUR', 'PLN'].includes(value)) return;
      appState.settings.currency = value;
      saveStateToLocalStorage();
      applyUserPreferences();
      switchTab(appState.currentTab);
      renderBudgetsTab();
    }

    function setAccentPreference(value) {
      if (!['blue', 'violet', 'emerald', 'rose'].includes(value)) return;
      appState.settings.accent = value;
      applyUserPreferences();
      saveStateToLocalStorage();
    }
    const formatDateRu = (dateStr) => {
      const date = parseDateOnly(dateStr);
      return Number.isNaN(date.getTime()) ? 'Некорректная дата' : date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    function seedDemoData() {
      const today = new Date();
      const yr = today.getFullYear();
      const mo = String(today.getMonth() + 1).padStart(2, '0');
      const savedSettings = { ...(appState.settings || { currency: 'RUB', accent: 'blue' }) };

      appState = {
        transactions: [],
        subscriptions: [],
        budgets: { ...DEFAULT_BUDGETS },
        currentTab: 'dashboard',
        txFilterType: 'all',
        activeTxModalType: 'expense',
        lastNotifiedTimestamp: 0,
        notificationsMode: 'off',
        debts: [],
        categories: [],
        debtFilter: 'all',
        settings: savedSettings
      };

      appState.transactions = [
        { id: 'tx-1', type: 'income', amount: 145000, category: 'salary', date: `${yr}-${mo}-05`, note: 'Основная зарплата' },
        { id: 'tx-2', type: 'income', amount: 25000, category: 'freelance', date: `${yr}-${mo}-12`, note: 'Дизайн лендинга' },
        { id: 'tx-3', type: 'expense', amount: 12450, category: 'food', date: `${yr}-${mo}-18`, note: 'Продукты на неделю' },
        { id: 'tx-4', type: 'expense', amount: 8900, category: 'restaurants', date: `${yr}-${mo}-20`, note: 'Ужин с друзьями' },
        { id: 'tx-5', type: 'expense', amount: 18500, category: 'housing', date: `${yr}-${mo}-10`, note: 'Коммунальные услуги' }
      ];

      appState.subscriptions = [
        { id: 'sub-1', name: 'Яндекс Плюс', amount: 299, payday: 25, cycle: 'monthly', category: 'subscriptions', active: true },
        { id: 'sub-2', name: 'Telegram Premium', amount: 299, payday: 10, cycle: 'monthly', category: 'subscriptions', active: true },
        { id: 'sub-3', name: 'Домашний Интернет', amount: 850, payday: 1, cycle: 'monthly', category: 'telecom', active: true },
        { id: 'sub-4', name: 'Фитнес-Клуб', amount: 2500, payday: 18, cycle: 'monthly', category: 'health', active: true }
      ];

      appState.budgets = { ...DEFAULT_BUDGETS };
      rebuildCustomCategories();
      saveStateToLocalStorage();
    }

    function saveStateToLocalStorage() {
      try {
        const normalized = normalizeAppState(appState);
        localStorage.setItem('finflow_app_state', JSON.stringify(normalized));
        appState = normalized;
        rebuildCustomCategories();
        return true;
      } catch (e) {
        console.error('LocalStorage save failed:', e);
        showInAppToast('Не удалось сохранить данные', 'Проверьте свободное место в браузере и сразу скачайте резервную копию.');
        return false;
      }
    }

    function normalizeAppState(state) {
      return normalizeStoredState(state);
    }

    function loadStateFromLocalStorage() {
      let data = null;
      try {
        data = localStorage.getItem('finflow_app_state');
      } catch (e) {
        appState = normalizeAppState({});
        rebuildCustomCategories();
        showInAppToast('Хранилище недоступно', 'Проверьте настройки приватности браузера. Данные останутся только в текущем сеансе.');
        return;
      }

      if (!data) {
        seedDemoData();
        return;
      }

      try {
        appState = normalizeAppState(JSON.parse(data));
        rebuildCustomCategories();
      } catch (e) {
        try { localStorage.setItem('finflow_recovery_backup', data); } catch { /* Keep the original value untouched. */ }
        appState = normalizeAppState({});
        rebuildCustomCategories();
        showInAppToast('Не удалось прочитать данные', 'Исходная запись сохранена для восстановления. Импортируйте рабочую резервную копию.');
      }
    }

    // =========================================================================
    // SERVICE WORKER & IOS PUSH NOTIFICATIONS ENGINE
    // =========================================================================
    function initServiceWorker() {
      if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
      navigator.serviceWorker.register('./sw.js', { scope: './' })
        .then(registration => registration.update())
        .catch(error => console.warn('Service worker registration failed:', error));
    }

    function isNotificationApiSupported() {
      return ('Notification' in window);
    }

    // Shows an in-app toast — this always works regardless of OS/browser
    // notification support, so the user always gets visible confirmation.
    function showInAppToast(title, body) {
      const toast = document.getElementById('app-toast');
      const toastTitle = document.getElementById('app-toast-title');
      const toastBody = document.getElementById('app-toast-body');
      if (!toast || !toastTitle || !toastBody) return;

      toastTitle.textContent = title;
      toastBody.textContent = body;
      toast.classList.add('toast-visible');

      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {
        toast.classList.remove('toast-visible');
      }, 4500);
    }

    // Single delivery point for every notification (test or real reminder):
    // always shows the in-app toast, and additionally fires a real OS
    // notification when that's actually available and permitted.
    function deliverNotification(title, body) {
      showInAppToast(title, body);

      if (appState.notificationsMode === 'native' && isNotificationApiSupported() && Notification.permission === 'granted') {
        const options = {
          body,
          icon: new URL('./finflow-icon-180.png', document.baseURI).href,
          vibrate: [200, 100, 200]
        };
        const showFallback = () => {
          try { new Notification(title, options); }
          catch (error) { console.warn('Native notification failed; in-app toast remains available:', error); }
        };
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready
            .then(registration => registration.showNotification(title, options))
            .catch(showFallback);
        } else {
          showFallback();
        }
      }
    }

    function sendTestNotification() {
      deliverNotification(
        'FinFlow: Тестовое уведомление 🔔',
        'Уведомления работают! Вы будете получать напоминания за сутки до списаний.'
      );
    }

    function requestNotificationPermission() {
      // No Notification API at all (e.g. iPhone Safari not added to
      // Home Screen). Fall back to in-app "demo" notifications so the
      // feature still works instead of silently doing nothing.
      if (!isNotificationApiSupported()) {
        appState.notificationsMode = 'demo';
        saveStateToLocalStorage();
        updateNotificationStatusUI();
        checkAndTriggerSubscriptionAlerts(true);
        return;
      }

      if (Notification.permission === 'granted') {
        appState.notificationsMode = 'native';
        saveStateToLocalStorage();
        updateNotificationStatusUI();
        checkAndTriggerSubscriptionAlerts(true);
        return;
      }

      if (Notification.permission === 'denied') {
        updateNotificationStatusUI();
        alert('Уведомления заблокированы в настройках браузера/iOS. Разрешите их там, затем нажмите кнопку ещё раз.');
        return;
      }

      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          appState.notificationsMode = 'native';
          saveStateToLocalStorage();
          updateNotificationStatusUI();
          checkAndTriggerSubscriptionAlerts(true);
        } else {
          appState.notificationsMode = 'off';
          saveStateToLocalStorage();
          updateNotificationStatusUI();
          alert('Доступ к уведомлениям заблокирован. Разрешите их в настройках браузера/iOS.');
        }
      }).catch(() => {
        // Some embedded browsers/previews throw instead of resolving —
        // still give the user working in-app notifications.
        appState.notificationsMode = 'demo';
        saveStateToLocalStorage();
        updateNotificationStatusUI();
        checkAndTriggerSubscriptionAlerts(true);
      });
    }

    function updateNotificationStatusUI() {
      const text = document.getElementById('sub-notif-status-text');
      const btn = document.getElementById('btn-enable-notifications');
      const testBtn = document.getElementById('btn-test-notification');
      if (!text || !btn || !testBtn) return;

      const mode = appState.notificationsMode || 'off';
      const nativeSupported = isNotificationApiSupported();
      const nativeDenied = nativeSupported && Notification.permission === 'denied';

      btn.disabled = false;

      if (mode === 'native' && nativeSupported && Notification.permission === 'granted') {
        text.innerHTML = '<span class="text-emerald-400 font-bold">✓ Уведомления включены!</span> Вы будете получать предупреждение за 24 часа до списания.';
        btn.classList.add('hidden');
        testBtn.classList.remove('hidden');
      } else if (mode === 'demo') {
        text.innerHTML = '<span class="text-emerald-400 font-bold">✓ Уведомления включены (в приложении).</span> Системные push здесь недоступны, но напоминания будут показываться внутри FinFlow.';
        btn.classList.add('hidden');
        testBtn.classList.remove('hidden');
      } else if (nativeDenied) {
        text.innerHTML = '<span class="text-rose-400 font-bold">✕ Уведомления заблокированы.</span> Включите их в настройках iOS / браузера, затем нажмите кнопку ещё раз.';
        btn.textContent = '🔔 Проверить доступ ещё раз';
        btn.classList.remove('hidden');
        testBtn.classList.add('hidden');
      } else {
        text.textContent = 'Нажмите кнопку ниже, чтобы включить уведомления за 1 день до списания.';
        btn.textContent = '🔔 Включить уведомления';
        btn.classList.remove('hidden');
        testBtn.classList.add('hidden');
      }
    }

    // Days until next payment math
    function getSubscriptionNextPaymentInfo(sub) {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      const todayDay = now.getDate();

      let targetYear = currentYear;
      let targetMonth = currentMonth;

      if (sub.payday < todayDay) {
        targetMonth += 1;
        if (targetMonth > 11) {
          targetMonth = 0;
          targetYear += 1;
        }
      }

      const nextPaymentDate = new Date(targetYear, targetMonth, sub.payday);
      const diffTime = nextPaymentDate - new Date(currentYear, currentMonth, todayDay);
      const daysLeft = Math.round(diffTime / (1000 * 60 * 60 * 24));

      return { nextPaymentDate, daysLeft };
    }

    function checkAndTriggerSubscriptionAlerts(forceTest = false) {
      const mode = appState.notificationsMode || 'off';
      if (mode === 'off') return;

      const activeSubs = appState.subscriptions.filter(s => s.active);

      activeSubs.forEach(sub => {
        const { daysLeft } = getSubscriptionNextPaymentInfo(sub);

        // Notify if payment is TOMORROW (1 day left)
        if (daysLeft === 1) {
          const title = `FinFlow: Списание завтра! 💳`;
          const body = `Завтра (${sub.payday} числа) будет списано ${formatRub(sub.amount)} за «${sub.name}».`;
          deliverNotification(title, body);
        }
      });

      // A manual "enable"/"resend" click always gets its own clearly
      // labeled test notification, regardless of any real reminders above.
      if (forceTest) {
        sendTestNotification();
      }
    }

    // =========================================================================
    // CORE TAB SWITCHING
    // =========================================================================
    function switchTab(tabId) {
      if (!['dashboard', 'transactions', 'subscriptions', 'analytics', 'forecast', 'debts'].includes(tabId)) return;
      appState.currentTab = tabId;

      document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.add('hidden');
        el.setAttribute('aria-hidden', 'true');
      });
      const activeContent = document.getElementById(`tab-${tabId}`);
      if (activeContent) {
        activeContent.classList.remove('hidden');
        activeContent.setAttribute('aria-hidden', 'false');
      }

      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('text-blue-500');
        btn.classList.add('text-slate-400');
        btn.removeAttribute('aria-current');
      });
      const activeBtn = document.getElementById(`nav-btn-${tabId}`);
      if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('text-blue-500');
        activeBtn.setAttribute('aria-current', 'page');
      }

      if (tabId === 'dashboard') renderDashboardTab();
      if (tabId === 'transactions') renderTransactionsTab();
      if (tabId === 'subscriptions') renderSubscriptionsTab();
      if (tabId === 'analytics') renderAnalyticsTab();
      if (tabId === 'forecast') renderForecastTab();
      if (tabId === 'debts') renderDebtsTab();

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    }

    // =========================================================================
    // 1. DASHBOARD RENDERER
    // =========================================================================
    function renderDashboardTab() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      document.getElementById('header-period').textContent = now.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });

      let totalIncome = 0;
      let totalExpense = 0;

      appState.transactions.forEach(tx => {
        const d = parseDateOnly(tx.date);
        if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
          if (tx.type === 'income') totalIncome += Number(tx.amount);
          if (tx.type === 'expense') totalExpense += Number(tx.amount);
        }
      });

      const totalBalance = totalIncome - totalExpense;
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const currentDay = Math.min(now.getDate(), daysInMonth);
      const daysRemaining = Math.max(1, daysInMonth - currentDay + 1);

      const totalBudget = Object.values(appState.budgets).reduce((a, b) => a + Number(b), 0);
      const budgetRemaining = Math.max(0, totalBudget - totalExpense);
      const safeDailyLimit = budgetRemaining / daysRemaining;

      document.getElementById('dash-total-balance').textContent = formatRub(totalBalance);
      document.getElementById('dash-month-income').textContent = '+' + formatRub(totalIncome);
      document.getElementById('dash-month-expense').textContent = '-' + formatRub(totalExpense);
      document.getElementById('dash-safe-daily').textContent = formatRub(safeDailyLimit) + ' / день';
      document.getElementById('dash-days-left').textContent = `${daysRemaining} дн. остал.`;
      document.getElementById('dash-budget-remain').textContent = formatRub(budgetRemaining);

      // Render Subscriptions Widget on Dashboard
      renderDashboardSubWidget();

      // Recent Transactions
      const recentList = document.getElementById('dash-recent-list');
      recentList.innerHTML = '';
      const sortedTxs = [...appState.transactions].sort((a, b) => parseDateOnly(b.date) - parseDateOnly(a.date)).slice(0, 4);

      if (sortedTxs.length === 0) {
        recentList.innerHTML = `<p class="text-xs text-slate-500 text-center py-4">Нет записей</p>`;
        return;
      }

      sortedTxs.forEach(tx => {
        const cat = CATEGORIES[tx.category] || { name: 'Прочее', color: '#64748B', bgColor: 'rgba(100,116,139,0.15)', svg: '' };
        const isExp = tx.type === 'expense';

        const item = document.createElement('div');
        item.className = 'glass-card p-3 rounded-2xl flex items-center justify-between';
        item.innerHTML = `
          <button type="button" onclick="${inlineHandler('openTransactionEdit', tx.id)}" class="flex items-center space-x-3 min-w-0 flex-1 text-left">
            <div class="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style="background-color: ${cat.bgColor}; color: ${cat.color}">
              ${cat.svg}
            </div>
            <div class="min-w-0">
              <p class="text-xs font-bold text-white truncate">${escapeHtml(tx.note || cat.name)}</p>
              <p class="text-[10px] text-slate-400 font-medium truncate">${escapeHtml(cat.name)} • ${formatDateRu(tx.date)}</p>
            </div>
          </button>
          <button type="button" onclick="${inlineHandler('openTransactionEdit', tx.id)}" aria-label="Редактировать операцию: ${escapeHtml(tx.note || cat.name)}" class="p-2 rounded-xl text-slate-500 hover:text-blue-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 20h9"/><path fill="none" stroke="currentColor" stroke-width="2" d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4 11.5-11.5z"/></svg>
          </button>
          <span class="text-sm font-extrabold ${isExp ? 'text-rose-400' : 'text-emerald-400'} whitespace-nowrap">
            ${isExp ? '-' : '+'}${formatRub(tx.amount)}
          </span>
        `;
        recentList.appendChild(item);
      });
    }

    function renderDashboardSubWidget() {
      const title = document.getElementById('dash-sub-alert-title');
      const desc = document.getElementById('dash-sub-alert-desc');

      const activeSubs = appState.subscriptions.filter(s => s.active);
      if (activeSubs.length === 0) {
        title.textContent = 'Нет активных подписок';
        desc.textContent = 'Нажмите, чтобы добавить регулярные платежи';
        return;
      }

      // Find nearest upcoming sub
      const sorted = activeSubs.map(s => {
        const { daysLeft } = getSubscriptionNextPaymentInfo(s);
        return { ...s, daysLeft };
      }).sort((a, b) => a.daysLeft - b.daysLeft);

      const nearest = sorted[0];
      if (nearest.daysLeft === 0) {
        title.textContent = `Списание Сегодня! (${formatRub(nearest.amount)})`;
        desc.textContent = `Сервис «${nearest.name}» списывает оплату сегодня.`;
      } else if (nearest.daysLeft === 1) {
        title.textContent = `Списание Завтра! 🔔 (${formatRub(nearest.amount)})`;
        desc.textContent = `Завтра списание за «${nearest.name}». Подготовьте баланс.`;
      } else {
        title.textContent = `Ближайшее списание: через ${nearest.daysLeft} дн.`;
        desc.textContent = `${nearest.payday}-го числа: «${nearest.name}» (${formatRub(nearest.amount)})`;
      }
    }

    // =========================================================================
    // 2. TRANSACTIONS RENDERER
    // =========================================================================
    function setTxFilter(type) {
      appState.txFilterType = type;
      document.querySelectorAll('.filter-pill').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-slate-800', 'text-slate-300');
      });
      const activeBtn = document.getElementById(`btn-filter-${type}`);
      if (activeBtn) {
        activeBtn.classList.remove('bg-slate-800', 'text-slate-300');
        activeBtn.classList.add('bg-blue-600', 'text-white');
      }
      renderTransactionsTab();
    }

    function renderTransactionsTab() {
      const searchVal = (document.getElementById('tx-search').value || '').toLowerCase();
      const catVal = document.getElementById('tx-category-select').value;

      const catSelect = document.getElementById('tx-category-select');
      const currentCat = catSelect.value || 'ALL';
      catSelect.innerHTML = '<option value="ALL">Все категории</option>';
      Object.values(CATEGORIES).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        catSelect.appendChild(opt);
      });
      catSelect.value = CATEGORIES[currentCat] ? currentCat : 'ALL';

      const filtered = appState.transactions.filter(tx => {
        const matchesType = appState.txFilterType === 'all' || tx.type === appState.txFilterType;
        const matchesCat = catVal === 'ALL' || tx.category === catVal;
        const catObj = CATEGORIES[tx.category];
        const matchesSearch = !searchVal ||
          (tx.note && tx.note.toLowerCase().includes(searchVal)) ||
          (catObj && catObj.name.toLowerCase().includes(searchVal));
        return matchesType && matchesCat && matchesSearch;
      });

      document.getElementById('tx-count-label').textContent = `Показано: ${filtered.length} записей`;

      const listContainer = document.getElementById('tx-grouped-list');
      listContainer.innerHTML = '';

      if (filtered.length === 0) {
        listContainer.innerHTML = `
          <div class="text-center py-12 glass-card rounded-3xl space-y-2">
            <p class="text-sm font-bold text-slate-400">Операций не найдено</p>
          </div>
        `;
        return;
      }

      const grouped = {};
      filtered.sort((a, b) => parseDateOnly(b.date) - parseDateOnly(a.date)).forEach(tx => {
        if (!grouped[tx.date]) grouped[tx.date] = [];
        grouped[tx.date].push(tx);
      });

      Object.keys(grouped).forEach(dateStr => {
        const groupHeader = document.createElement('div');
        groupHeader.className = 'text-xs font-bold text-slate-400 tracking-wider uppercase pt-2 px-1';
        groupHeader.textContent = formatDateRu(dateStr);
        listContainer.appendChild(groupHeader);

        grouped[dateStr].forEach(tx => {
          const cat = CATEGORIES[tx.category] || { name: 'Прочее', color: '#64748B', bgColor: 'rgba(100,116,139,0.15)', svg: '' };
          const isExp = tx.type === 'expense';

          const card = document.createElement('div');
          card.className = 'glass-card p-3.5 rounded-2xl flex items-center justify-between border border-slate-800/80 hover:bg-slate-800/50 transition';
          card.innerHTML = `
            <button type="button" onclick="${inlineHandler('openTransactionEdit', tx.id)}" class="flex items-center space-x-3.5 min-w-0 flex-1 text-left">
              <div class="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style="background-color: ${cat.bgColor}; color: ${cat.color}">
                ${cat.svg}
              </div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-white truncate">${escapeHtml(tx.note || cat.name)}</p>
                <p class="text-[10px] text-slate-400 truncate">${escapeHtml(cat.name)}</p>
              </div>
            </button>
            <div class="flex items-center space-x-1.5 ml-2">
              <span class="text-sm font-extrabold ${isExp ? 'text-rose-400' : 'text-emerald-400'} whitespace-nowrap">
                ${isExp ? '-' : '+'}${formatRub(tx.amount)}
              </span>
              <button onclick="${inlineHandler('openTransactionEdit', tx.id)}" aria-label="Редактировать операцию: ${escapeHtml(tx.note || cat.name)}" class="p-1.5 rounded-xl text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 20h9"/><path fill="none" stroke="currentColor" stroke-width="2" d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4 11.5-11.5z"/></svg>
              </button>
            </div>
          `;
          listContainer.appendChild(card);
        });
      });
    }

    // =========================================================================
    // 3. SUBSCRIPTIONS RENDERER (NEW MODULE)
    // =========================================================================
    function renderSubscriptionsTab() {
      updateNotificationStatusUI();

      const container = document.getElementById('sub-cards-container');
      container.innerHTML = '';

      let totalMonthly = 0;
      let activeCount = 0;

      appState.subscriptions.forEach(sub => {
        if (sub.active) {
          totalMonthly += sub.cycle === 'yearly' ? (sub.amount / 12) : sub.amount;
          activeCount++;
        }
      });

      document.getElementById('sub-total-monthly').textContent = formatRub(totalMonthly);
      document.getElementById('sub-active-count').textContent = activeCount;

      if (appState.subscriptions.length === 0) {
        container.innerHTML = `
          <div class="text-center py-10 glass-card rounded-3xl space-y-2">
            <p class="text-sm font-bold text-slate-400">У вас пока нет подписок</p>
            <p class="text-xs text-slate-500">Добавьте ваши сервисы, чтобы получат уведомления за сутки до оплаты</p>
          </div>
        `;
        return;
      }

      // Sort by days left until renewal
      const sortedSubs = [...appState.subscriptions].map(s => {
        const { daysLeft } = getSubscriptionNextPaymentInfo(s);
        return { ...s, daysLeft };
      }).sort((a, b) => a.daysLeft - b.daysLeft);

      sortedSubs.forEach(sub => {
        const cat = CATEGORIES[sub.category] || CATEGORIES.subscriptions;

        let statusBadge = '';
        if (!sub.active) {
          statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-500">Приостановлена</span>`;
        } else if (sub.daysLeft === 0) {
          statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse">🔴 Сегодня!</span>`;
        } else if (sub.daysLeft === 1) {
          statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse">🔔 Завтра списание</span>`;
        } else {
          statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">Через ${sub.daysLeft} дн. (${sub.payday}-го)</span>`;
        }

        const card = document.createElement('div');
        card.className = `glass-card p-4 rounded-2xl space-y-3 border transition ${sub.active ? 'border-slate-800' : 'border-slate-800/40 opacity-60'}`;
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style="background-color: ${cat.bgColor}; color: ${cat.color}">
                ${cat.svg}
              </div>
              <div>
              <h4 class="text-xs font-bold text-white">${escapeHtml(sub.name)}</h4>
                <p class="text-[10px] text-slate-400">${sub.cycle === 'yearly' ? 'Ежегодно' : 'Ежемесячно'}</p>
              </div>
            </div>
            <div class="text-right">
              <span class="text-sm font-extrabold text-white block">${formatRub(sub.amount)}</span>
              ${statusBadge}
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
            <button onclick="${inlineHandler('quickPaySubscription', sub.id)}" class="px-2.5 py-1 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 font-bold transition">
              + Внести в расходы
            </button>
            <div class="flex items-center space-x-2">
              <button onclick="${inlineHandler('toggleSubscriptionActive', sub.id)}" class="text-slate-400 hover:text-slate-200 transition">
                ${sub.active ? 'Пауза' : 'Включить'}
              </button>
              <span class="text-slate-700">•</span>
              <button onclick="${inlineHandler('deleteSubscription', sub.id)}" aria-label="Удалить подписку: ${escapeHtml(sub.name)}" class="text-rose-400/80 hover:text-rose-400 transition">
                Удалить
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function saveSubscription(e) {
      e.preventDefault();
      const name = document.getElementById('sub-name').value.trim();
      const amount = parseFloat(document.getElementById('sub-amount').value);
      const payday = parseInt(document.getElementById('sub-payday').value);
      const cycle = document.getElementById('sub-cycle').value;
      const category = document.getElementById('sub-category').value;

      if (!name || !Number.isFinite(amount) || amount <= 0 || !Number.isInteger(payday) || payday < 1 || payday > 31) {
        showInAppToast('Проверьте подписку', 'Укажите название, положительную сумму и день списания от 1 до 31.');
        return;
      }

      const newSub = {
        id: createId('sub'),
        name,
        amount,
        payday,
        cycle,
        category,
        active: true
      };

      appState.subscriptions.push(newSub);
      saveStateToLocalStorage();
      closeModal('modal-add-sub');
      renderSubscriptionsTab();

      // Check if alert needed immediately
      checkAndTriggerSubscriptionAlerts(false);
    }

    function toggleSubscriptionActive(id) {
      const sub = appState.subscriptions.find(s => s.id === id);
      if (sub) {
        sub.active = !sub.active;
        saveStateToLocalStorage();
        renderSubscriptionsTab();
      }
    }

    function deleteSubscription(id) {
      appState.subscriptions = appState.subscriptions.filter(s => s.id !== id);
      saveStateToLocalStorage();
      renderSubscriptionsTab();
    }

    function quickPaySubscription(id) {
      const sub = appState.subscriptions.find(s => s.id === id);
      if (!sub) return;

      const today = formatDateOnly();
      const newTx = {
        id: createId('tx'),
        type: 'expense',
        amount: sub.amount,
        category: sub.category,
        date: today,
        note: `Оплата подписки: ${sub.name}`
      };

      appState.transactions.unshift(newTx);
      saveStateToLocalStorage();
      showInAppToast('Расход добавлен', `Оплата «${sub.name}» на ${formatRub(sub.amount)} записана.`);
      if (appState.currentTab === 'dashboard') renderDashboardTab();
    }

    // =========================================================================
    // 3B. DEBTS
    // =========================================================================
    function openDebtModal(debtId = null) {
      const form = document.getElementById('form-debt');
      form.reset();
      document.getElementById('debt-edit-id').value = '';

      if (debtId) {
        const debt = appState.debts.find(d => d.id === debtId);
        if (!debt) return;
        document.getElementById('modal-debt-title').textContent = 'Редактировать долг';
        document.getElementById('debt-edit-id').value = debt.id;
        document.getElementById('debt-person').value = debt.person;
        document.getElementById('debt-amount').value = debt.amount;
        document.getElementById('debt-due-date').value = debt.dueDate || '';
        document.getElementById('debt-note').value = debt.note || '';
        setDebtType(debt.type);
      } else {
        document.getElementById('modal-debt-title').textContent = 'Новый долг';
        setDebtType('i_owe');
      }

      openModal('modal-add-debt');
    }

    function setDebtType(type) {
      appState.activeDebtModalType = type;
      const btnOwe = document.getElementById('debt-type-btn-i_owe');
      const btnOwed = document.getElementById('debt-type-btn-owed_to_me');

      if (type === 'i_owe') {
        btnOwe.className = 'py-2 rounded-xl text-xs font-bold bg-rose-600 text-white transition';
        btnOwed.className = 'py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition';
        btnOwe.setAttribute('aria-pressed', 'true');
        btnOwed.setAttribute('aria-pressed', 'false');
      } else {
        btnOwed.className = 'py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white transition';
        btnOwe.className = 'py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition';
        btnOwe.setAttribute('aria-pressed', 'false');
        btnOwed.setAttribute('aria-pressed', 'true');
      }
    }

    function saveDebt(e) {
      e.preventDefault();
      const editId = document.getElementById('debt-edit-id').value;
      const person = document.getElementById('debt-person').value.trim();
      const amount = parseFloat(document.getElementById('debt-amount').value);
      const dueDate = document.getElementById('debt-due-date').value || null;
      const note = document.getElementById('debt-note').value.trim();
      const type = appState.activeDebtModalType || 'i_owe';

      if (!person || !Number.isFinite(amount) || amount <= 0) {
        showInAppToast('Проверьте долг', 'Укажите имя и положительную сумму.');
        return;
      }

      if (editId) {
        const debt = appState.debts.find(d => d.id === editId);
        if (debt) {
          debt.person = person;
          debt.amount = amount;
          debt.dueDate = dueDate;
          debt.note = note;
          debt.type = type;
        }
      } else {
        appState.debts.push({
          id: createId('debt'),
          person,
          amount,
          dueDate,
          note,
          type,
          settled: false,
          createdAt: formatDateOnly()
        });
      }

      saveStateToLocalStorage();
      closeModal('modal-add-debt');
      renderDebtsTab();
    }

    function toggleDebtSettled(id) {
      const debt = appState.debts.find(d => d.id === id);
      if (debt) {
        debt.settled = !debt.settled;
        saveStateToLocalStorage();
        renderDebtsTab();
      }
    }

    function deleteDebt(id) {
      appState.debts = appState.debts.filter(d => d.id !== id);
      saveStateToLocalStorage();
      renderDebtsTab();
    }

    function setDebtFilter(filter) {
      appState.debtFilter = filter;
      saveStateToLocalStorage();
      renderDebtsTab();
    }

    function renderDebtsTab() {
      const container = document.getElementById('debt-cards-container');
      container.innerHTML = '';

      // Filter tab styling
      ['all', 'owed_to_me', 'i_owe'].forEach(f => {
        const btn = document.getElementById(`debt-filter-btn-${f}`);
        if (!btn) return;
        if (f === (appState.debtFilter || 'all')) {
          btn.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white transition';
        } else {
          btn.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-slate-900 text-slate-400 hover:text-slate-200 transition';
        }
      });

      // Totals (unsettled debts only)
      let totalOwedToMe = 0;
      let totalIOwe = 0;
      appState.debts.forEach(d => {
        if (d.settled) return;
        if (d.type === 'owed_to_me') totalOwedToMe += d.amount;
        else totalIOwe += d.amount;
      });
      document.getElementById('debt-total-owed-to-me').textContent = formatRub(totalOwedToMe);
      document.getElementById('debt-total-i-owe').textContent = formatRub(totalIOwe);

      if (appState.debts.length === 0) {
        container.innerHTML = `
          <div class="text-center py-10 glass-card rounded-3xl space-y-2">
            <p class="text-sm font-bold text-slate-400">Долгов пока нет</p>
            <p class="text-xs text-slate-500">Записывайте, кто должен вам, а кому должны вы</p>
          </div>
        `;
        return;
      }

      const filter = appState.debtFilter || 'all';
      const filtered = appState.debts.filter(d => filter === 'all' || d.type === filter);

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="text-center py-10 glass-card rounded-3xl space-y-2">
            <p class="text-sm font-bold text-slate-400">Нет долгов в этой категории</p>
          </div>
        `;
        return;
      }

      // Unsettled first, then by due date (soonest first, no date last), then newest first
      const sorted = [...filtered].sort((a, b) => {
        if (a.settled !== b.settled) return a.settled ? 1 : -1;
        if (a.dueDate && b.dueDate) return a.dueDate.localeCompare(b.dueDate);
        if (a.dueDate) return -1;
        if (b.dueDate) return 1;
        return b.createdAt.localeCompare(a.createdAt);
      });

      const today = formatDateOnly();

      sorted.forEach(debt => {
        const isOwedToMe = debt.type === 'owed_to_me';
      const color = isOwedToMe ? {
        badge: 'bg-emerald-500/15 text-emerald-400',
        amount: 'text-emerald-400',
        action: 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border-emerald-500/30'
      } : {
        badge: 'bg-rose-500/15 text-rose-400',
        amount: 'text-rose-400',
        action: 'bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border-rose-500/30'
      };
        const directionLabel = isOwedToMe ? 'должен(на) вам' : 'вы должны';

        let dueBadge = '';
        if (debt.settled) {
          dueBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-500">Погашен</span>`;
        } else if (debt.dueDate) {
          const overdue = debt.dueDate < today;
          dueBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold ${overdue ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-slate-800 text-slate-300'}">${overdue ? 'Просрочен: ' : 'До '}${formatDateRu(debt.dueDate)}</span>`;
        } else {
          dueBadge = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">Без срока</span>`;
        }

        const card = document.createElement('div');
        card.className = `glass-card p-4 rounded-2xl space-y-3 border transition ${debt.settled ? 'border-slate-800/40 opacity-60' : 'border-slate-800'}`;
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${color.badge} font-bold text-sm" aria-hidden="true">
                ${escapeHtml(debt.person.trim().charAt(0).toUpperCase())}
              </div>
              <div>
                <h4 class="text-xs font-bold text-white">${escapeHtml(debt.person)}</h4>
                <p class="text-[10px] text-slate-400">${directionLabel}${debt.note ? ' · ' + escapeHtml(debt.note) : ''}</p>
              </div>
            </div>
            <div class="text-right">
              <span class="text-sm font-extrabold ${color.amount} block">${formatRub(debt.amount)}</span>
              ${dueBadge}
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
            <button onclick="${inlineHandler('toggleDebtSettled', debt.id)}" class="px-2.5 py-1 rounded-xl ${color.action} border font-bold transition">
              ${debt.settled ? 'Вернуть в активные' : '✓ Погашен'}
            </button>
            <div class="flex items-center space-x-2">
              <button onclick="${inlineHandler('openDebtModal', debt.id)}" class="text-slate-400 hover:text-slate-200 transition">
                Изменить
              </button>
              <span class="text-slate-700">•</span>
              <button onclick="${inlineHandler('deleteDebt', debt.id)}" aria-label="Удалить запись о долге: ${escapeHtml(debt.person)}" class="text-rose-400/80 hover:text-rose-400 transition">
                Удалить
              </button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    // =========================================================================
    // 4. ANALYTICS RENDERER
    // =========================================================================
    function renderAnalyticsTab() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();

      const categoryTotals = {};
      let totalExpense = 0;

      appState.transactions.forEach(tx => {
        const d = parseDateOnly(tx.date);
        if (d.getFullYear() === currentYear && d.getMonth() === currentMonth && tx.type === 'expense') {
          const amt = Number(tx.amount);
          categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + amt;
          totalExpense += amt;
        }
      });

      document.getElementById('analytics-total-sum').textContent = formatRub(totalExpense);
      document.getElementById('analytics-month-name').textContent = now.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });

      const donutGroup = document.getElementById('donut-segments-group');
      donutGroup.innerHTML = '';

      const categoryListContainer = document.getElementById('analytics-category-list');
      categoryListContainer.innerHTML = '';

      if (totalExpense === 0) {
        categoryListContainer.innerHTML = `<div class="glass-card p-8 text-center rounded-3xl text-slate-500 text-xs">Нет расходов в этом месяце</div>`;
        return;
      }

      const sortedCategories = Object.keys(categoryTotals)
        .map(catId => ({
          catId,
          amount: categoryTotals[catId],
          percent: (categoryTotals[catId] / totalExpense) * 100,
          meta: CATEGORIES[catId] || { name: catId, color: '#64748B', bgColor: 'rgba(100,116,139,0.15)', svg: '' }
        }))
        .sort((a, b) => b.amount - a.amount);

      const circumference = 2 * Math.PI * 38;
      let strokeDashoffset = 0;

      sortedCategories.forEach(item => {
        const segmentLength = (item.percent / 100) * circumference;
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '50');
        circle.setAttribute('cy', '50');
        circle.setAttribute('r', '38');
        circle.setAttribute('fill', 'transparent');
        circle.setAttribute('stroke', item.meta.color);
        circle.setAttribute('stroke-width', '12');
        circle.setAttribute('stroke-dasharray', `${segmentLength} ${circumference - segmentLength}`);
        circle.setAttribute('stroke-dashoffset', -strokeDashoffset);
        circle.setAttribute('class', 'donut-segment');
        donutGroup.appendChild(circle);

        strokeDashoffset += segmentLength;

        const row = document.createElement('div');
        row.className = 'glass-card p-3.5 rounded-2xl space-y-2 border border-slate-800/80';
        row.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0" style="background-color: ${item.meta.bgColor}; color: ${item.meta.color}">
                ${item.meta.svg}
              </div>
              <div>
                <p class="text-xs font-bold text-white">${escapeHtml(item.meta.name)}</p>
                <p class="text-[10px] text-slate-400 font-mono">${formatRub(item.amount)}</p>
              </div>
            </div>
            <span class="text-xs font-black text-white px-2 py-0.5 rounded-lg bg-slate-800 border border-slate-700">
              ${item.percent.toFixed(1)}%
            </span>
          </div>
          <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-700" style="width: ${item.percent}%; background-color: ${item.meta.color}"></div>
          </div>
        `;
        categoryListContainer.appendChild(row);
      });
    }

    // =========================================================================
    // 5. FORECAST & BUDGETS RENDERER
    // =========================================================================
    function renderForecastTab() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();

      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const daysPassed = Math.min(now.getDate(), daysInMonth);
      const monthProgressPct = Math.round((daysPassed / daysInMonth) * 100);

      document.getElementById('forecast-month-progress-text').textContent = `${daysPassed} из ${daysInMonth} дней (${monthProgressPct}%)`;
      document.getElementById('forecast-month-progress-bar').style.width = `${monthProgressPct}%`;
      document.getElementById('forecast-pace-desc').textContent = `Расчет на основе темпа трат за первые ${daysPassed} дн.`;

      let totalSpentSoFar = 0;
      appState.transactions.forEach(tx => {
        const d = parseDateOnly(tx.date);
        if (d.getFullYear() === currentYear && d.getMonth() === currentMonth && tx.type === 'expense') {
          totalSpentSoFar += Number(tx.amount);
        }
      });

      const dailyPace = totalSpentSoFar / Math.max(1, daysPassed);
      const totalProjectedSpend = Math.round(totalSpentSoFar + (dailyPace * (daysInMonth - daysPassed)));
      const totalBudgetLimit = Object.values(appState.budgets).reduce((a, b) => a + Number(b), 0);

      document.getElementById('forecast-projected-total').textContent = formatRub(totalProjectedSpend);
      document.getElementById('forecast-budget-total').textContent = formatRub(totalBudgetLimit);

      const riskBadge = document.getElementById('forecast-risk-badge');
      if (totalProjectedSpend > totalBudgetLimit) {
        riskBadge.className = 'px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-rose-500/20 text-rose-400 border border-rose-500/30';
        riskBadge.textContent = 'Превышение бюджета';
      } else {
        riskBadge.className = 'px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        riskBadge.textContent = 'В норме';
      }

      renderBudgetsTab();
    }

    function renderBudgetsTab() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();

      const spentMap = {};
      appState.transactions.forEach(tx => {
        const d = parseDateOnly(tx.date);
        if (d.getFullYear() === currentYear && d.getMonth() === currentMonth && tx.type === 'expense') {
          spentMap[tx.category] = (spentMap[tx.category] || 0) + Number(tx.amount);
        }
      });

      const container = document.getElementById('budgets-category-list');
      container.innerHTML = '';

      Object.keys(CATEGORIES).forEach(catId => {
        const catObj = CATEGORIES[catId];
        if (catObj.type !== 'expense') return;

        const limit = Number(appState.budgets[catId] || 0);
        const spent = spentMap[catId] || 0;
        const pct = limit > 0 ? Math.min(100, Math.round((spent / limit) * 100)) : 0;

        let barColor = catObj.color;
        if (pct >= 100) barColor = '#EF4444';
        else if (pct >= 85) barColor = '#F59E0B';

        const card = document.createElement('div');
        card.className = 'glass-card p-3.5 rounded-2xl space-y-2 border border-slate-800';
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0" style="background-color: ${catObj.bgColor}; color: ${catObj.color}">
                ${catObj.svg}
              </div>
              <div>
                <p class="text-xs font-bold text-white">${escapeHtml(catObj.name)}</p>
                <p class="text-[10px] text-slate-400 font-mono">${formatRub(spent)} из ${formatRub(limit)}</p>
              </div>
            </div>
            <span class="text-xs font-black ${pct >= 100 ? 'text-rose-400' : 'text-slate-300'}">${pct}%</span>
          </div>
          <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
            <div class="h-full transition-all duration-500 rounded-full" style="width: ${pct}%; background-color: ${barColor}"></div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    // =========================================================================
    // MODALS & INPUT HANDLERS
    // =========================================================================
    function openModal(modalId, initialType = 'expense', reset = true) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      const currentModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
      if (!currentModal && !modalReturnFocus) modalReturnFocus = document.activeElement;

      if (modalId === 'modal-add-tx' && reset) {
        setTxType(initialType);
        document.getElementById('tx-id').value = '';
        document.getElementById('tx-modal-title').textContent = 'Новая операция';
        document.getElementById('tx-delete-btn').classList.add('hidden');
        document.getElementById('tx-date').value = formatDateOnly();
        document.getElementById('tx-amount').value = '';
        document.getElementById('tx-note').value = '';
      }

      if (modalId === 'modal-categories') {
        renderCategoryManager();
      }

      if (modalId === 'modal-edit-budgets') {
        renderModalBudgetsInputs();
      }

      if (modalId === 'modal-settings') {
        updateNotificationStatusUI();
        renderBudgetsTab();
        applyUserPreferences();
      }

      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        const focusTarget = modal.querySelector('button:not([disabled]), input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (focusTarget) focusTarget.focus({ preventScroll: true });
      }, 10);
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.setAttribute('aria-hidden', 'true');
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
        if (!document.querySelector('[role="dialog"][aria-hidden="false"]') && modalReturnFocus && modalReturnFocus.isConnected) {
          modalReturnFocus.focus({ preventScroll: true });
          modalReturnFocus = null;
        }
      }, 300);
    }

    document.addEventListener('keydown', event => {
      const modal = Array.from(document.querySelectorAll('[role="dialog"][aria-hidden="false"]')).at(-1);
      if (!modal) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal(modal.id);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(modal.querySelectorAll('a[href], button:not([disabled]), input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
        .filter(element => element.getClientRects().length > 0);
      if (!focusable.length) {
        event.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    });

    function setTxType(type) {
      appState.activeTxModalType = type;
      const btnExp = document.getElementById('tx-type-btn-expense');
      const btnInc = document.getElementById('tx-type-btn-income');

      if (type === 'expense') {
        btnExp.className = 'py-2 rounded-xl text-xs font-bold bg-rose-600 text-white transition';
        btnInc.className = 'py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition';
        btnExp.setAttribute('aria-pressed', 'true');
        btnInc.setAttribute('aria-pressed', 'false');
      } else {
        btnExp.className = 'py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition';
        btnInc.className = 'py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white transition';
        btnExp.setAttribute('aria-pressed', 'false');
        btnInc.setAttribute('aria-pressed', 'true');
      }

      renderCategoryGrid(type);
    }

    function renderCategoryGrid(type) {
      const grid = document.getElementById('tx-category-grid');
      grid.innerHTML = '';
      const filtered = Object.values(CATEGORIES).filter(c => c.type === type);

      filtered.forEach((c, index) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.onclick = () => selectCategoryTile(c.id);
        tile.setAttribute('aria-pressed', 'false');
        tile.setAttribute('aria-label', c.name);
        tile.id = `cat-tile-${c.id}`;
        tile.className = `category-tile p-2.5 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center transition hover:bg-slate-800 ${index === 0 ? 'bg-slate-800 border-blue-500' : 'bg-slate-950'}`;

        tile.innerHTML = `
          <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-1" style="background-color: ${c.bgColor}; color: ${c.color}">
            ${c.svg}
          </div>
          <span class="text-[10px] font-semibold text-slate-200 line-clamp-1">${escapeHtml(c.name)}</span>
        `;
        grid.appendChild(tile);
      });

      if (filtered.length > 0) selectCategoryTile(filtered[0].id);
    }

    function selectCategoryTile(catId) {
      document.querySelectorAll('.category-tile').forEach(t => {
        t.classList.remove('bg-slate-800', 'border-blue-500');
        t.classList.add('bg-slate-950', 'border-slate-800');
      });
      const selected = document.getElementById(`cat-tile-${catId}`);
      if (selected) {
        selected.classList.remove('bg-slate-950', 'border-slate-800');
        selected.classList.add('bg-slate-800', 'border-blue-500');
        selected.setAttribute('aria-pressed', 'true');
      }
      document.querySelectorAll('.category-tile').forEach(tile => {
        if (tile.id !== `cat-tile-${catId}`) tile.setAttribute('aria-pressed', 'false');
      });
      document.getElementById('tx-category').value = catId;
    }

    function saveTransaction(e) {
      e.preventDefault();
      const amount = parseFloat(document.getElementById('tx-amount').value);
      const category = document.getElementById('tx-category').value;
      const date = document.getElementById('tx-date').value;
      const note = document.getElementById('tx-note').value.trim();
      const editId = document.getElementById('tx-id').value;

      if (!Number.isFinite(amount) || amount <= 0 || !category || !date || Number.isNaN(parseDateOnly(date).getTime())) {
        showInAppToast('Проверьте операцию', 'Укажите положительную сумму, категорию и корректную дату.');
        return;
      }

      if (editId) {
        const tx = appState.transactions.find(t => t.id === editId);
        if (tx) {
          tx.type = appState.activeTxModalType;
          tx.amount = amount;
          tx.category = category;
          tx.date = date;
          tx.note = note;
        }
      } else {
        appState.transactions.unshift({
          id: createId('tx'),
          type: appState.activeTxModalType,
          amount,
          category,
          date,
          note
        });
      }

      saveStateToLocalStorage();
      closeModal('modal-add-tx');
      switchTab(appState.currentTab);
    }

    function openTransactionEdit(id) {
      const tx = appState.transactions.find(t => t.id === id);
      if (!tx) return;

      openModal('modal-add-tx', tx.type, false);
      document.getElementById('tx-id').value = tx.id;
      document.getElementById('tx-modal-title').textContent = 'Редактировать операцию';
      document.getElementById('tx-delete-btn').classList.remove('hidden');
      document.getElementById('tx-amount').value = tx.amount;
      document.getElementById('tx-date').value = tx.date;
      document.getElementById('tx-note').value = tx.note || '';
      renderCategoryGrid(tx.type);
      selectCategoryTile(tx.category);
    }

    function deleteEditingTransaction() {
      const id = document.getElementById('tx-id').value;
      if (!id) return;
      if (!confirm('Удалить эту операцию?')) return;
      deleteTransaction(id);
      closeModal('modal-add-tx');
    }

    function deleteTransaction(id) {
      appState.transactions = appState.transactions.filter(t => t.id !== id);
      saveStateToLocalStorage();
      renderTransactionsTab();
      if (appState.currentTab === 'dashboard') renderDashboardTab();
    }

    function openCategoryManager(editId = '') {
      closeModal('modal-add-tx');
      closeModal('modal-settings');
      resetCategoryForm();
      if (editId) editCategory(editId);
      openModal('modal-categories');
    }

    function setCategoryType(type) {
      const exp = document.getElementById('category-type-expense');
      const inc = document.getElementById('category-type-income');
      if (type === 'income') {
        exp.className = 'py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition';
        inc.className = 'py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white transition';
        exp.setAttribute('aria-pressed', 'false');
        inc.setAttribute('aria-pressed', 'true');
      } else {
        exp.className = 'py-2 rounded-xl text-xs font-bold bg-rose-600 text-white transition';
        inc.className = 'py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition';
        exp.setAttribute('aria-pressed', 'true');
        inc.setAttribute('aria-pressed', 'false');
      }
      document.getElementById('category-form-type').value = type;
    }

    function renderCategoryIconPicker() {
      const grid = document.getElementById('category-icon-grid');
      grid.innerHTML = '';
      Object.entries(CATEGORY_ICONS).forEach(([key, svg]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'h-11 rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition';
        btn.dataset.icon = key;
        btn.setAttribute('aria-label', `Иконка: ${key}`);
        btn.setAttribute('aria-pressed', 'false');
        btn.innerHTML = svg;
        btn.onclick = () => selectCategoryIcon(key);
        grid.appendChild(btn);
      });
    }

    function selectCategoryIcon(key) {
      document.getElementById('category-icon').value = key;
      document.querySelectorAll('#category-icon-grid button').forEach(btn => {
        btn.classList.toggle('bg-slate-800', btn.dataset.icon === key);
        btn.classList.toggle('border-blue-500', btn.dataset.icon === key);
        btn.setAttribute('aria-pressed', String(btn.dataset.icon === key));
      });
    }

    function renderCategoryColorPicker() {
      const grid = document.getElementById('category-color-grid');
      grid.innerHTML = '';
      CATEGORY_COLORS.forEach((c, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'w-8 h-8 rounded-full border-2 border-transparent transition active:scale-95';
        btn.style.backgroundColor = c.color;
        btn.dataset.colorIndex = i;
        btn.setAttribute('aria-label', `Цвет ${i + 1}`);
        btn.setAttribute('aria-pressed', 'false');
        btn.onclick = () => {
          document.getElementById('category-color-index').value = i;
          document.querySelectorAll('#category-color-grid button').forEach(b => {
            const selected = Number(b.dataset.colorIndex) === i;
            b.classList.toggle('border-white', selected);
            b.setAttribute('aria-pressed', String(selected));
          });
        };
        grid.appendChild(btn);
      });
    }

    function resetCategoryForm() {
      const name = document.getElementById('category-name');
      if (!name) return;
      document.getElementById('category-edit-id').value = '';
      document.getElementById('category-form-type').value = 'expense';
      name.value = '';
      document.getElementById('category-icon').value = 'wallet';
      document.getElementById('category-color-index').value = '0';
      setCategoryType('expense');
      renderCategoryIconPicker();
      renderCategoryColorPicker();
      selectCategoryIcon('wallet');
      document.querySelectorAll('#category-color-grid button').forEach(b => {
        const selected = b.dataset.colorIndex === '0';
        b.classList.toggle('border-white', selected);
        b.setAttribute('aria-pressed', String(selected));
      });
    }

    function renderCategoryManager() {
      renderCategoryIconPicker();
      renderCategoryColorPicker();
      if (!document.getElementById('category-form-type')) {
        const hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.id = 'category-form-type';
        hidden.value = 'expense';
        document.getElementById('form-category').appendChild(hidden);
      }
      if (!document.getElementById('category-edit-id').value) resetCategoryForm();

      const list = document.getElementById('custom-category-list');
      const custom = Array.isArray(appState.categories) ? appState.categories : [];
      list.innerHTML = custom.length ? '' : '<p class="text-xs text-slate-500 text-center py-3">Пока нет пользовательских категорий</p>';

      custom.forEach(c => {
        const cat = CATEGORIES[c.id];
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2.5 rounded-2xl bg-slate-950 border border-slate-800';
        row.innerHTML = `
          <div class="flex items-center space-x-2.5 min-w-0">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${cat.bgColor};color:${cat.color}">${cat.svg}</div>
            <div class="min-w-0">
              <p class="text-xs font-bold text-white truncate">${escapeHtml(c.name)}</p>
              <p class="text-[10px] text-slate-500">${c.type === 'income' ? 'Доход' : 'Расход'}</p>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <button type="button" onclick="${inlineHandler('editCategory', c.id)}" aria-label="Изменить категорию: ${escapeHtml(c.name)}" class="p-2 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-500/10">✎</button>
            <button type="button" onclick="${inlineHandler('deleteCategory', c.id)}" aria-label="Удалить категорию: ${escapeHtml(c.name)}" class="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10">×</button>
          </div>
        `;
        list.appendChild(row);
      });

      const preview = document.getElementById('settings-custom-category-preview');
      if (preview) {
        preview.innerHTML = custom.length ? custom.map(c => `<span class="px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-[10px] text-slate-300">${escapeHtml(c.name)}</span>`).join('') : '<span class="text-[11px] text-slate-500">Нет пользовательских категорий</span>';
      }
    }

    function saveCategory(e) {
      e.preventDefault();
      const name = document.getElementById('category-name').value.trim();
      const type = document.getElementById('category-form-type').value;
      const iconKey = document.getElementById('category-icon').value;
      const selectedColorIndex = Number(document.getElementById('category-color-index').value) || 0;
      const colorIndex = Math.min(CATEGORY_COLORS.length - 1, Math.max(0, selectedColorIndex));
      if (!name) return;

      const editId = document.getElementById('category-edit-id').value;
      if (editId) {
        const existing = appState.categories.find(c => c.id === editId);
        if (existing) {
          existing.name = name;
          existing.type = type;
          existing.iconKey = iconKey;
          existing.color = CATEGORY_COLORS[colorIndex].color;
          existing.bgColor = CATEGORY_COLORS[colorIndex].bgColor;
        }
      } else {
        const id = createId('custom');
        appState.categories.push({
          id, name, type, iconKey,
          color: CATEGORY_COLORS[colorIndex].color,
          bgColor: CATEGORY_COLORS[colorIndex].bgColor
        });
      }

      rebuildCustomCategories();
      saveStateToLocalStorage();
      renderCategoryManager();
      renderCategoryGrid(appState.activeTxModalType);
      renderTransactionsTab();
      renderDashboardTab();
    }

    function editCategory(id) {
      const c = appState.categories.find(x => x.id === id);
      if (!c) return;
      document.getElementById('category-edit-id').value = c.id;
      document.getElementById('category-name').value = c.name;
      document.getElementById('category-form-type').value = c.type;
      document.getElementById('category-icon').value = c.iconKey || 'other';
      const colorIndex = Math.max(0, CATEGORY_COLORS.findIndex(x => x.color === c.color));
      document.getElementById('category-color-index').value = colorIndex;
      setCategoryType(c.type);
      selectCategoryIcon(c.iconKey || 'other');
      document.querySelectorAll('#category-color-grid button').forEach(b => {
        const selected = Number(b.dataset.colorIndex) === colorIndex;
        b.classList.toggle('border-white', selected);
        b.setAttribute('aria-pressed', String(selected));
      });
      document.getElementById('category-name').focus();
    }

    function deleteCategory(id) {
      const used = appState.transactions.some(t => t.category === id) || appState.subscriptions.some(s => s.category === id);
      if (used) {
        alert('Эта категория уже используется в операциях или подписках. Сначала измените их категорию.');
        return;
      }
      if (!confirm('Удалить пользовательскую категорию?')) return;
      appState.categories = appState.categories.filter(c => c.id !== id);
      delete CATEGORIES[id];
      delete appState.budgets[id];
      saveStateToLocalStorage();
      renderCategoryManager();
      renderCategoryGrid(appState.activeTxModalType);
      renderTransactionsTab();
      renderDashboardTab();
    }

    function renderModalBudgetsInputs() {
      const container = document.getElementById('modal-budgets-inputs-list');
      container.innerHTML = '';

      Object.keys(CATEGORIES).forEach(catId => {
        const catObj = CATEGORIES[catId];
        if (catObj.type !== 'expense') return;

        const val = appState.budgets[catId] || 0;
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2 rounded-2xl bg-slate-950 border border-slate-800';
        row.innerHTML = `
          <div class="flex items-center space-x-2.5">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style="background-color: ${catObj.bgColor}; color: ${catObj.color}">
              ${catObj.svg}
            </div>
            <label class="text-xs font-bold text-white" for="budget-input-${escapeHtml(catId)}">${escapeHtml(catObj.name)}</label>
          </div>
          <input type="number" id="budget-input-${escapeHtml(catId)}" aria-label="Месячный бюджет: ${escapeHtml(catObj.name)}" min="0" step="any" value="${val}" class="w-28 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-right text-white font-bold focus:outline-none focus:border-blue-500">
        `;
        container.appendChild(row);
      });
    }

    function saveCategoryBudgets() {
      Object.keys(CATEGORIES).forEach(catId => {
        const catObj = CATEGORIES[catId];
        if (catObj.type !== 'expense') return;
        const input = document.getElementById(`budget-input-${catId}`);
        if (input) {
          const amount = Number(input.value);
          appState.budgets[catId] = Number.isFinite(amount) ? Math.max(0, amount) : 0;
        }
      });

      saveStateToLocalStorage();
      closeModal('modal-edit-budgets');
      renderForecastTab();
      openModal('modal-settings');
    }

    function exportJSONData() {
      try {
        const jsonString = serializeBackup(appState);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = url;
        downloadAnchor.download = `FinFlow_Backup_${formatDateOnly()}.json`;
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();

        setTimeout(() => URL.revokeObjectURL(url), 2000);
      } catch (e) {
        console.error('Export failed', e);
        showInAppToast('Не удалось экспортировать данные', 'Попробуйте ещё раз.');
      }
    }

    function exportTransactionsCsv() {
      try {
        const csv = `\uFEFF${transactionsToCsv(appState.transactions, CATEGORIES, appState.settings.currency)}`;
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = url;
        downloadAnchor.download = `FinFlow_Transactions_${formatDateOnly()}.csv`;
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      } catch (e) {
        console.error('CSV export failed:', e);
        showInAppToast('Не удалось экспортировать операции', 'Попробуйте ещё раз.');
      }
    }

    function exportRecoveryBackup() {
      try {
        const raw = localStorage.getItem('finflow_recovery_backup');
        if (!raw) {
          updateRecoveryBackupUI();
          showInAppToast('Файл восстановления не найден', 'В настройках браузера больше нет повреждённой записи.');
          return;
        }
        const blob = new Blob([raw], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = url;
        downloadAnchor.download = `FinFlow_Recovery_${formatDateOnly()}.json`;
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      } catch (e) {
        console.error('Recovery export failed:', e);
        showInAppToast('Не удалось скачать файл восстановления', 'Проверьте настройки хранения браузера.');
      }
    }

    function updateRecoveryBackupUI() {
      const button = document.getElementById('btn-export-recovery');
      if (!button) return;
      try {
        button.classList.toggle('hidden', !localStorage.getItem('finflow_recovery_backup'));
      } catch {
        button.classList.add('hidden');
      }
    }

    function importJSONData(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (file.size > MAX_BACKUP_BYTES) {
        showInAppToast('Файл слишком большой', 'Размер резервной копии не должен превышать 5 МБ.');
        event.target.value = '';
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = function(e) {
        try {
          const importedState = parseBackup(e.target.result);

          if (!confirm('Импорт заменит все текущие данные приложения данными из файла. Продолжить?')) {
            return;
          }

          appState = importedState;
          rebuildCustomCategories();
          const saved = saveStateToLocalStorage();
          applyUserPreferences();
          closeModal('modal-settings');
          switchTab('dashboard');
          showInAppToast(saved ? 'Данные импортированы' : 'Данные загружены в текущий сеанс', saved ? 'Резервная копия восстановлена.' : 'Браузер не смог сохранить изменения. Скачайте резервную копию.');
        } catch (err) {
          console.error('Invalid JSON file', err);
          showInAppToast('Не удалось импортировать файл', err.message || 'Выберите корректную резервную копию FinFlow (.json).');
        } finally {
          event.target.value = '';
        }
      };

      fileReader.onerror = function() {
        showInAppToast('Не удалось прочитать файл', 'Попробуйте выбрать резервную копию ещё раз.');
        event.target.value = '';
      };

      fileReader.readAsText(file);
    }

    function resetDemoData() {
      if (!confirm('Будут удалены операции, подписки, бюджеты, долги и пользовательские категории. Заменить их демо-данными?')) return;
      seedDemoData();
      applyUserPreferences();
      closeModal('modal-settings');
      switchTab('dashboard');
    }

    // =========================================================================
    // WINDOW ONLOAD INITIALIZATION
    // =========================================================================
    window.onload = function() {
      loadStateFromLocalStorage();
      applyUserPreferences();
      updateRecoveryBackupUI();
      initServiceWorker();
      switchTab('dashboard');

      // Automatically check for subscription reminders on load
      setTimeout(() => {
        checkAndTriggerSubscriptionAlerts(false);
      }, 1500);
    };
