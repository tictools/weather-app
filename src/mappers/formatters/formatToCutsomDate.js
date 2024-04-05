export function formatToCutsomDate({
  timestamp,
  lang,
  options,
  intlFormatter,
}) {
  const weekday = intlFormatter({ timestamp, lang, options });

  return weekday;
}
