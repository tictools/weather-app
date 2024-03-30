const { VITE_API_KEY: API_KEY } = import.meta.env;

const BASE_URL = "http://api.weatherapi.com/v1";
const RESOURCE_PATH = "forecast.json";

function forecast({ location = "Luesia", days = 7 } = {}) {
  const apiKey = `?key=${API_KEY}`;
  const queryParams = `&q=${location}&days=${days}&aqi=yes&alerts=no`;

  const url = `${BASE_URL}/${RESOURCE_PATH}${apiKey}${queryParams}`;

  return fetch(url).then(function (response) {
    return response.json();
  });
}

export default { forecast };
