import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "./constants";
import {
  formatToDegree,
  formatToDistance,
  formatToPercentage,
  formatToPrecipitation,
  formatToPressure,
  formatToSpeed,
  formatToTemperature,
  toBoolean,
} from "./formatters";

function toDomain({ apiWeatherResponse }) {
  return {
    lastUpdated: apiWeatherResponse?.last_updated,
    temperature: {
      [TEMPERATURE_SCALE.CELSIUS]: {
        rawValue: apiWeatherResponse?.temp_c,
        formattedValue: formatToTemperature({
          value: apiWeatherResponse?.temp_c,
        }),
      },
      [TEMPERATURE_SCALE.FAHRENHEIT]: {
        rawValue: apiWeatherResponse?.temp_c,
        formattedValue: formatToTemperature({
          scale: TEMPERATURE_SCALE.FAHRENHEIT,
          value: apiWeatherResponse?.temp_f,
        }),
      },
    },
    feelsLike: {
      [TEMPERATURE_SCALE.CELSIUS]: {
        rawValue: apiWeatherResponse?.feelslike_c,
        formattedValue: formatToTemperature({
          isRounded: true,
          value: apiWeatherResponse?.feelslike_c,
        }),
      },
      [TEMPERATURE_SCALE.FAHRENHEIT]: {
        rawValue: apiWeatherResponse?.feelslike_f,
        formattedValue: formatToTemperature({
          isRounded: true,
          scale: TEMPERATURE_SCALE.FAHRENHEIT,
          value: apiWeatherResponse?.feelslike_f,
        }),
      },
    },
    isDay: toBoolean(apiWeatherResponse?.is_day),
    condition: {
      text: apiWeatherResponse?.condition.text,
      icon: apiWeatherResponse?.condition.icon,
      code: apiWeatherResponse?.condition.code,
    },
    wind: {
      [UNIT_SYSTEM.METRIC]: {
        speed: {
          rawValue: apiWeatherResponse?.wind_kph,
          formattedValue: formatToSpeed({
            value: apiWeatherResponse?.wind_kph,
          }),
        },
        gust: {
          rawValue: apiWeatherResponse?.gust_kph,
          formattedValue: formatToSpeed({
            value: apiWeatherResponse?.gust_kph,
          }),
        },
      },
      [UNIT_SYSTEM.IMPERIAL]: {
        speed: {
          rawValue: apiWeatherResponse?.wind_mph,
          formattedValue: formatToSpeed({
            unitSystem: UNIT_SYSTEM.IMPERIAL,
            value: apiWeatherResponse?.gust_kph,
          }),
        },
        gust: {
          rawValue: apiWeatherResponse?.gust_mph,
          formattedValue: formatToSpeed({
            unitSystem: UNIT_SYSTEM.IMPERIAL,
            value: apiWeatherResponse?.gust_mph,
          }),
        },
      },
      degree: {
        rawValue: apiWeatherResponse?.wind_degree,
        formattedValue: formatToDegree({
          value: apiWeatherResponse?.wind_degree,
        }),
      },
      direction: apiWeatherResponse?.wind_dir,
    },
    pressure: {
      [UNIT_SYSTEM.METRIC]: {
        rawValue: apiWeatherResponse?.pressure_mb,
        formattedValue: formatToPressure({
          value: apiWeatherResponse?.pressure_mb,
        }),
      },
      [UNIT_SYSTEM.IMPERIAL]: {
        rawValue: apiWeatherResponse?.pressure_in,
        formattedValue: formatToPressure({
          unitSystem: UNIT_SYSTEM.IMPERIAL,
          value: apiWeatherResponse?.pressure_in,
        }),
      },
    },
    precipitation: {
      [UNIT_SYSTEM.METRIC]: {
        rawValue: apiWeatherResponse?.precip_mm,
        formattedValue: formatToPrecipitation({
          value: apiWeatherResponse?.precip_mm,
        }),
      },
      [UNIT_SYSTEM.IMPERIAL]: {
        rawValue: apiWeatherResponse?.precip_in,
        formattedValue: formatToPrecipitation({
          unitSystem: UNIT_SYSTEM.IMPERIAL,
          value: apiWeatherResponse?.precip_in,
        }),
      },
    },
    visibility: {
      [UNIT_SYSTEM.METRIC]: {
        rawValue: apiWeatherResponse?.vis_km,
        formattedValue: formatToDistance({ value: apiWeatherResponse?.vis_km }),
      },
      [UNIT_SYSTEM.IMPERIAL]: {
        rawValue: apiWeatherResponse?.vis_miles,
        formattedValue: formatToDistance({
          unitSystem: UNIT_SYSTEM.IMPERIAL,
          value: apiWeatherResponse?.vis_miles,
        }),
      },
    },
    humidity: {
      rawValue: apiWeatherResponse?.humidity,
      formattedValue: formatToPercentage({
        value: apiWeatherResponse?.humidity,
      }),
    },
    cloud: {
      rawValue: apiWeatherResponse?.cloud,
    },
  };
}

export const weatherMapper = {
  toDomain,
};
