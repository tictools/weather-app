import { IntlService, Navigator } from "../services";
import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "./constants";
import {
  formatToCutsomDate,
  formatToPercentage,
  formatToPrecipitation,
  formatToSpeed,
  formatToTemperature,
  formatToTemperatureRange,
} from "./formatters";

function toDomain(apiForecastItemResponse) {
  const { date_epoch, day } = apiForecastItemResponse;
  const lang = Navigator.getLanguage();

  return {
    id: date_epoch,
    date: formatToCutsomDate({
      timestamp: date_epoch * 1000,
      lang,
      options: {
        month: "numeric",
        day: "numeric",
      },
      intlFormatter: IntlService.formatDateTime,
    }),
    condition: {
      text: day?.condition.text,
      icon: day?.condition.icon,
    },
    maxTemperature: {
      [TEMPERATURE_SCALE.CELSIUS]: {
        rawValue: day?.maxtemp_c,
        formattedValue: formatToTemperature({
          isRounded: true,
          value: day?.maxtemp_c,
        }),
      },
      [TEMPERATURE_SCALE.FAHRENHEIT]: {
        rawValue: day?.maxtemp_f,
        formattedValue: formatToTemperature({
          isRounded: true,
          scale: TEMPERATURE_SCALE.FAHRENHEIT,
          value: day?.maxtemp_f,
        }),
      },
    },
    minTemperature: {
      [TEMPERATURE_SCALE.CELSIUS]: {
        rawValue: day?.mintemp_c,
        formattedValue: formatToTemperature({
          isRounded: true,
          value: day?.mintemp_c,
        }),
      },
      [TEMPERATURE_SCALE.FAHRENHEIT]: {
        rawValue: day?.mintemp_f,
        formattedValue: formatToTemperature({
          isRounded: true,
          scale: TEMPERATURE_SCALE.FAHRENHEIT,
          value: day?.mintemp_f,
        }),
      },
    },
    rangeTemperature: {
      [TEMPERATURE_SCALE.CELSIUS]: {
        formattedValue: formatToTemperatureRange({
          min: day?.mintemp_c,
          max: day?.maxtemp_c,
          isRounded: true,
        }),
      },
      [TEMPERATURE_SCALE.FAHRENHEIT]: {
        formattedValue: formatToTemperatureRange({
          scale: TEMPERATURE_SCALE.FAHRENHEIT,
          min: day?.mintemp_f,
          max: day?.maxtemp_f,
          isRounded: true,
        }),
      },
    },
    maxPrecipitation: {
      [UNIT_SYSTEM.METRIC]: {
        rawValue: day?.totalprecip_mm,
        formattedValue: formatToPrecipitation({
          value: day?.totalprecip_mm,
          isRounded: true,
        }),
      },
      [UNIT_SYSTEM.IMPERIAL]: {
        rawValue: day?.totalprecip_in,
        formattedValue: formatToPrecipitation({
          unitSystem: UNIT_SYSTEM.IMPERIAL,
          value: day?.totalprecip_in,
          isRounded: true,
        }),
      },
    },
    maxWind: {
      [UNIT_SYSTEM.METRIC]: {
        rawValue: day?.maxwind_kph,
        formattedValue: formatToSpeed({
          value: day?.maxwind_kph,
          isRounded: true,
        }),
      },
      [UNIT_SYSTEM.IMPERIAL]: {
        rawValue: day?.maxwind_mph,
        formattedValue: formatToSpeed({
          unitSystem: UNIT_SYSTEM.IMPERIAL,
          value: day?.maxwind_mph,
          isRounded: true,
        }),
      },
    },
    humidity: {
      rawValue: day?.avghumidity,
      formattedValue: formatToPercentage({ value: day?.avghumidity }),
    },
    uv: {
      rawValue: day?.uv,
    },
  };
}

export const forecastMapper = {
  toDomain,
};
