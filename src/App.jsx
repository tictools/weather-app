/* eslint-disable react-hooks/exhaustive-deps */
import { version } from "../package.json";

import {
  ButtonSetContainer,
  LocationSection,
  MainHeader,
  WeatherSection,
} from "./components";
import {
  useForecastFor,
  useSearchLocation,
  useTemperatureScale,
  useUnitSystem,
} from "./hooks";
import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "./mappers/constants";

import styles from "./App.module.css";
import { SearchLocationForm } from "./components/SearchLocationForm";

function App() {
  const { CELSIUS } = TEMPERATURE_SCALE;
  const { METRIC } = UNIT_SYSTEM;

  const { unitSystem, handleUnitSystemUpdate } = useUnitSystem(METRIC);
  const { temperatureScale, handleTemperatureScaleUpdate } =
    useTemperatureScale(CELSIUS);

  const { searchLocation, updateSearchLocation } = useSearchLocation();
  const { isLoading, location, weather, error } = useForecastFor({
    searchLocation,
  });

  const toggleTemperatureScale = ({ target }) => {
    const scaleId = target.dataset.id;
    handleTemperatureScaleUpdate(scaleId);
  };

  const toggleUnitSystem = ({ target }) => {
    const systemId = target.dataset.id;
    handleUnitSystemUpdate(systemId);
  };

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <MainHeader title="Weather Outlook" version={version} />
      <main className={styles["wrapper"]}>
        <ButtonSetContainer
          temperatureScale={temperatureScale}
          toggleTemperatureScale={toggleTemperatureScale}
          unitSystem={unitSystem}
          toggleUnitSystem={toggleUnitSystem}
        />
        <SearchLocationForm handleUpdateLocation={updateSearchLocation} />
        <LocationSection location={location} />
        <WeatherSection
          weather={weather}
          settings={{ temperatureScale, unitSystem }}
        />
      </main>
      <small>Last update: {weather.lastUpdated}</small>
    </>
  );
}

export default App;
