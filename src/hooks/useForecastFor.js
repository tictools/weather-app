import { useEffect, useState } from "react";
import { locationMapper, weatherMapper } from "../mappers";
import weatherService from "../services/weather";
import { useCurrentLocation } from "./useCurrentLocation";

export function useForecastFor({ searchLocation } = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const { currentLocation, error: errorCurrentLocation } = useCurrentLocation();

  function handleLoadingStatusAs(status) {
    setIsLoading(status);
  }

  function handleLocationUpdateWith(location) {
    setLocation(location);
  }

  function handleWeatherUpdateWith(weather) {
    setWeather(weather);
  }

  function handleErrorUpdateAs(error) {
    setError(error);
  }

  useEffect(() => {
    const locationToFetch = searchLocation || currentLocation;

    if (locationToFetch) {
      handleErrorUpdateAs(null);

      weatherService
        .forecast({ locationToFetch })
        .then(({ location, current: weather }) => {
          handleLocationUpdateWith(locationMapper.toDomain(location));
          handleWeatherUpdateWith(weatherMapper.toDomain(weather));
        })
        .catch(({ message }) => handleErrorUpdateAs(message))
        .finally(() => handleLoadingStatusAs(false));
    }
  }, [searchLocation, currentLocation]);

  return {
    isLoading,
    location,
    weather,
    error,
    errorCurrentLocation,
  };
}
