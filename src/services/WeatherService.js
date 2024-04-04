const { VITE_API_KEY: API_KEY } = import.meta.env;

const BASE_URL = "https://api.weatherapi.com/v1";
const RESOURCE_PATH = "forecast.json";

function forecast({ locationToFetch, days = 5 } = {}) {
  const apiKey = `?key=${API_KEY}`;
  const queryParams = `&q=${locationToFetch}&days=${days}&aqi=yes&alerts=no`;

  const url = `${BASE_URL}/${RESOURCE_PATH}${apiKey}${queryParams}`;

  return fetch(url).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("No matching location found.");
    }
  });
}

export const WeatherService = { forecast };
