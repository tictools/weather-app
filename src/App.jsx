/* eslint-disable react-hooks/exhaustive-deps */
import {
  ButtonSetContainer,
  LocationSection,
  MainHeader,
  WeatherSection,
} from "./components";
import {
  // useForecast,
  useTemperatureScale,
  useUnitSystem,
} from "./hooks";
import { TEMPERATURE_SCALE, UNIT_SYSTEM } from "./mappers/constants";

import styles from "./App.module.css";

const location = {
  name: "Luesia",
  region: "Aragon",
  country: "Spain",
  latitude: 42.37,
  longitude: -1.02,
  timeZone: "Europe/Madrid",
  localTime: "2024-04-02 10:38",
};

const weather = {
  lastUpdated: "2024-04-02 10:30",
  temperature: {
    celsius: {
      rawValue: 8,
      formattedValue: "8°C",
    },
    fahrenheit: {
      rawValue: 8,
      formattedValue: "46.4°F",
    },
  },
  feelsLike: {
    celsius: {
      rawValue: 4.1,
      formattedValue: "4.1°C",
    },
    fahrenheit: {
      rawValue: 39.4,
      formattedValue: "39.4°F",
    },
  },
  isDay: true,
  condition: {
    text: "Sunny",
    icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    code: 1000,
  },
  wind: {
    metric: {
      speed: {
        rawValue: 3.6,
        formattedValue: "3.6/kph",
      },
      gust: {
        rawValue: 32.3,
        formattedValue: "32.3/kph",
      },
    },
    imperial: {
      speed: {
        rawValue: 2.2,
        formattedValue: "32.3/mph",
      },
      gust: {
        rawValue: 20.1,
        formattedValue: "20.1/mph",
      },
    },
    degree: {
      rawValue: 136,
      formattedValue: "136°",
    },
    direction: "SE",
  },
  pressure: {
    metric: {
      rawValue: 1019,
      formattedValue: "1019mb",
    },
    imperial: {
      rawValue: 30.09,
      formattedValue: "30.09in",
    },
  },
  precipitation: {
    metric: {
      rawValue: 0,
      formattedValue: "0mm",
    },
    imperial: {
      rawValue: 0,
      formattedValue: "0in",
    },
  },
  visibility: {
    metric: {
      rawValue: 10,
      formattedValue: "10km",
    },
    imperial: {
      rawValue: 6,
      formattedValue: "6miles",
    },
  },
  humidity: {
    rawValue: 71,
    formattedValue: "71%",
  },
  cloud: {
    rawValue: 0,
  },
  uv: {
    rawValue: 4,
  },
};

const isLoading = false;

function App() {
  const { CELSIUS } = TEMPERATURE_SCALE;
  const { METRIC } = UNIT_SYSTEM;

  // const { isLoading, location, weather } = useForecast();
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
        <MainHeader title="Weather Outlook" />
      </header>
      <main className={styles["wrapper"]}>
        <ButtonSetContainer
          temperatureScale={temperatureScale}
          toggleTemperatureScale={toggleTemperatureScale}
          unitSystem={unitSystem}
          toggleUnitSystem={toggleUnitSystem}
        />
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
