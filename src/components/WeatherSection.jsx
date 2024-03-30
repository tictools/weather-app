export function WeatherSection({ weather, settings }) {
  const { temperatureScale, unitSystem } = settings;

  return (
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
  );
}
