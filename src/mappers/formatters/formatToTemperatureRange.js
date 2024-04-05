import { TEMPERATURE_SCALE } from "../constants";
import { formatToTemperature } from "./formatToTemperature";

export function formatToTemperatureRange({
  scale = TEMPERATURE_SCALE.CELSIUS,
  min,
  max,
}) {
  const formattedMinValue = formatToTemperature({ scale, value: min });
  const formattedMaxValue = formatToTemperature({ scale, value: max });

  return `${formattedMinValue} - ${formattedMaxValue}`;
}
