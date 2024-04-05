function formatDateTime({ timestamp, lang, options = {} } = {}) {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat(lang, options).format(date);
}

export const IntlService = {
  formatDateTime,
};
