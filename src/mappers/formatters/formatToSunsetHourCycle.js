import { MIDDAY_THRESHOLD, SEPARATOR } from "./constants";

function formatToTwentyFourHourCycle(timeBeyondMidday) {
  const [onlyFormattedHour, formattedMinutes] = timeBeyondMidday.split(
    SEPARATOR.FOR_ONLY_TIME
  );
  const hourToTwentyFourHourCycle = +onlyFormattedHour + MIDDAY_THRESHOLD;

  return `${hourToTwentyFourHourCycle}${SEPARATOR.FOR_ONLY_TIME}${formattedMinutes}`;
}

export function formatToSunsetHourCycle(timeContent) {
  const [formattedTime] = timeContent.split(SEPARATOR.FOR_FULL_FORMATTED_HOUR);
  const timeToTwentyFourHourCycle = formatToTwentyFourHourCycle(formattedTime);

  return timeToTwentyFourHourCycle;
}
