import { useEffect, useState } from "react";
import { forecastMapper, locationMapper, weatherMapper } from "../mappers";
import { WeatherService } from "../services";
import { useCurrentLocation } from "./useCurrentLocation";

export function useForecastFor({ searchLocation } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const { currentLocation, error: errorCurrentLocation } = useCurrentLocation();

  function handleLoadingStatusAs(status) {
    setIsLoading(status);
  }

  function updateLocationWith(location) {
    setLocation(location);
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
        .then(({ location, current: weather, forecast }) => {
          const { forecastday } = forecast;
          updateLocationWith(locationMapper.toDomain(location));
          updateWeatherWith(weatherMapper.toDomain(weather));
          updateForecastWith(forecastday.map(forecastMapper.toDomain));
        })
        .catch(({ message }) => handleErrorUpdateAs(message))
        .finally(() => handleLoadingStatusAs(false));
    }
  }, [searchLocation, currentLocation]);

  return {
    isLoading,
    location,
    weather,
    forecast,
    error,
    errorCurrentLocation,
  };
}
