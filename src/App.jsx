/* eslint-disable react-hooks/exhaustive-deps */
import { version } from "../package.json";

import {
  ButtonSetContainer,
  LocationSection,
  MainHeader,
  Modal,
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
  const { isLoading, location, weather, error, errorCurrentLocation } =
    useForecastFor({
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

  if (errorCurrentLocation) {
    return <Modal message={errorCurrentLocation} status="warning" />;
  }

  if (isLoading && !errorCurrentLocation) {
    return <Modal message="Loading..." status="loading" />;
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
        <LocationSection location={location} shouldRender={!error} />
        <WeatherSection
          weather={weather}
          settings={{ temperatureScale, unitSystem }}
          error={error}
        />
      </main>
      <small>Last update: {weather.lastUpdated}</small>
    </>
  );
}

export default App;
