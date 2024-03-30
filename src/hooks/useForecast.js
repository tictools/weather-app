import { useEffect, useState } from "react";
import { locationMapper, weatherMapper } from "../mappers";
import weatherService from "../services/weather";

export function useForecast() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLoadingStatus(status) {
    setIsLoading(status);
  }

  function handleLocationUpdate(location) {
    setLocation(location);
  }

  function handleWeatherUpdate(weather) {
    setWeather(weather);
  }

  useEffect(() => {
    weatherService.forecast().then(({ location, current: weather }) => {
      handleLocationUpdate(locationMapper.toDomain(location));
      handleWeatherUpdate(weatherMapper.toDomain(weather));
      handleLoadingStatus(false);
    });
  }, []);

  return {
    isLoading,
    location,
    weather,
  };
}
