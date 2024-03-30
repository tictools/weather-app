/* eslint-disable react-hooks/exhaustive-deps */
import { useForecast, useTemperatureScale, useUnitSystem } from "./hooks";
import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "./mappers/constants";

function App() {
  const { CELSIUS, FAHRENHEIT } = TEMPERATURE_SCALE;
  const { METRIC, IMPERIAL } = UNIT_SYSTEM;

  const { unitSystem, handleUnitSystemUpdate } = useUnitSystem(METRIC);
  const { isLoading, location, weather } = useForecast();
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
        <div className="button-set">
          Temperature Scale
          <button data-id={CELSIUS} onClick={toggleTemperatureScale}>
            °C
          </button>
          <button data-id={FAHRENHEIT} onClick={toggleTemperatureScale}>
            °F
          </button>
        </div>
        <div className="button-set">
          Unit System
          <button data-id={METRIC} onClick={toggleUnitSystem}>
            Metric
          </button>
          <button data-id={IMPERIAL} onClick={toggleUnitSystem}>
            Imperial
          </button>
        </div>
        <section>
          <h2>
            {location.name} ({location.region})
          </h2>
          <div>
            <span>lat: {location.latitude}</span>
            <span>lon: {location.longitude}</span>
            <a
              href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`}
              target="_blank"
            >
              Go to map
            </a>
          </div>
        </section>
        <section>
          <h2>Weather</h2>
          <p>
            {`Current temperature: ${weather.temperature[temperatureScale].formattedValue} (feels like ${weather.feelsLike[temperatureScale].formattedValue})`}
          </p>
          <div>
            <img
              alt={weather.condition.text}
              src={weather.condition.icon}
              loading="lazy"
            />
          </div>
          <div>
            Wind
            <ul>
              <li>Direction: {weather.wind.direction}</li>
              <li>Speed: {weather.wind[unitSystem].speed.formattedValue}</li>
              <li>Degree: {weather.wind.degree.formattedValue}</li>
            </ul>
          </div>
          <small>Last update: {weather.lastUpdated}</small>
        </section>
      </main>
    </>
  );
}

export default App;
