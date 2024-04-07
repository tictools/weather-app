import { TEMPERATURE_SCALE } from "../constants";
import { formatToTemperature } from "./formatToTemperature";

export function formatToTemperatureRange({
  scale = TEMPERATURE_SCALE.CELSIUS,
  min,
  max,
  isRounded,
}) {
  const formattedMinValue = formatToTemperature({
    isRounded,
    scale,
    value: min,
  });
  const formattedMaxValue = formatToTemperature({
    isRounded,
    scale,
    value: max,
  });

  return `${formattedMinValue} - ${formattedMaxValue}`;
}
