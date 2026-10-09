module.exports = {
  darkMode: 'class',
  content: ['./index.html', './app.js'],
  safelist: [
    'bg-emerald-500/15', 'text-emerald-400', 'bg-emerald-600/20',
    'hover:bg-emerald-600/30', 'border-emerald-500/30',
    'bg-rose-500/15', 'text-rose-400', 'bg-rose-600/20',
    'hover:bg-rose-600/30', 'border-rose-500/30'
  ],
  theme: {
    extend: {
      colors: {
        ios: {
          bg: '#0F172A', card: '#1E293B', cardHover: '#334155',
          border: '#334155', accent: '#3B82F6', success: '#10B981',
          warning: '#F59E0B', danger: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Inter', 'sans-serif']
      }
    }
  }
};
