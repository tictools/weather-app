export function formatToWeekDay({ timestamp, lang, intlFormatter }) {
  const options = { weekday: "long" };
  const weekday = intlFormatter({ timestamp, lang, options });

  return weekday;
}
