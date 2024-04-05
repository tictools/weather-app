export function ForecastSection({ forecast, settings }) {
  const { temperatureScale } = settings;

  return (
    <section>
      {forecast.map((dailyForecast) => {
        return (
          <div key={dailyForecast.id}>
            <div>
              <img
                loading="lazy"
                src={dailyForecast.condition.icon}
                alt={dailyForecast.condition.text}
              />
              <span>{dailyForecast.condition.text}</span>
            </div>
            <span>
              {dailyForecast.rangeTemperature[temperatureScale].formattedValue}
            </span>
          </div>
        );
      })}
    </section>
  );
}
