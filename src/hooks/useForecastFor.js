import { useEffect, useState } from "react";
import {
  astroMapper,
  forecastMapper,
  locationMapper,
  weatherMapper,
} from "../mappers";
import { WeatherService } from "../services";
import { useCurrentLocation } from "./useCurrentLocation";

export function useForecastFor({ searchLocation } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [astro, setAstro] = useState(null);
  const [error, setError] = useState(null);

  const { currentLocation, error: errorCurrentLocation } = useCurrentLocation();

  function handleLoadingStatusAs(status) {
    setIsLoading(status);
  }

  function updateLocationWith(location) {
    setLocation(location);
  }

  function updateAstroWith(astro) {
    setAstro(astro);
  }

  function updateWeatherWith(weather) {
    setWeather(weather);
  }

  function updateForecastWith(forecast) {
    setForecast(forecast);
  }

  function handleErrorUpdateAs(error) {
    setError(error);
  }

  useEffect(() => {
    const locationToFetch = searchLocation || currentLocation;

    if (locationToFetch) {
      handleErrorUpdateAs(null);

      WeatherService.forecast({ locationToFetch })
        .then(
          ({
            location: apiLocationResponse,
            current: apiWeatherResponse,
            forecast,
          }) => {
            const { forecastday } = forecast;
            const [currentForecastDay, ...restOfForeCastDays] = forecastday;

            const { astro } = currentForecastDay;
            const { sunrise, sunset } = astro;
            const apiAstroResponse = { sunrise, sunset };

            updateLocationWith(
              locationMapper.toDomain({
                apiLocationResponse,
              })
            );
            updateAstroWith(
              astroMapper.toDomain({
                apiAstroResponse,
              })
            );
            updateWeatherWith(weatherMapper.toDomain({ apiWeatherResponse }));
            updateForecastWith(restOfForeCastDays.map(forecastMapper.toDomain));
          }
        )
        .catch(({ message }) => handleErrorUpdateAs(message))
        .finally(() => handleLoadingStatusAs(false));
    }
  }, [searchLocation, currentLocation]);

  return {
    error,
    errorCurrentLocation,
    isLoading,
    astro,
    forecast,
    location,
    weather,
  };
}
