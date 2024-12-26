module.exports = {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
};