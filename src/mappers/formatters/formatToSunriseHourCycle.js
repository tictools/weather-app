import { SEPARATOR } from "./constants";

export function formatToSunriseHourCycle(timeContent) {
  const [formattedTime] = timeContent.split(SEPARATOR.FOR_FULL_FORMATTED_HOUR);

  return formattedTime;
}
