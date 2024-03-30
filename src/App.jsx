/* eslint-disable react-hooks/exhaustive-deps */
import {
  ButtonSetContainer,
  LocationSection,
  WeatherSection,
} from "./components";
import { useForecast, useTemperatureScale, useUnitSystem } from "./hooks";
import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "./mappers/constants";

function App() {
  const { CELSIUS } = TEMPERATURE_SCALE;
  const { METRIC } = UNIT_SYSTEM;

  const { isLoading, location, weather } = useForecast();
  const { unitSystem, handleUnitSystemUpdate } = useUnitSystem(METRIC);
  const { temperatureScale, handleTemperatureScaleUpdate } =
    useTemperatureScale(CELSIUS);

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

  return (
    <>
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <ButtonSetContainer
          toggleTemperatureScale={toggleTemperatureScale}
          toggleUnitSystem={toggleUnitSystem}
        />
        <LocationSection location={location} />
        <WeatherSection
          weather={weather}
          settings={{ temperatureScale, unitSystem }}
        />
      </main>
    </>
  );
}

export default App;
