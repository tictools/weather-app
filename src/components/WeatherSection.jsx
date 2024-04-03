import styles from "./WeatherSection.module.css";

export function WeatherSection({ weather, settings }) {
  const { temperatureScale, unitSystem } = settings;

  return (
    <section className={styles["weather__wrapper"]}>
      <div className={styles["weather__current"]}>
        <div className={styles["weather__current-condition"]}>
          <img
            alt={weather.condition.text}
            src={weather.condition.icon}
            loading="lazy"
          />
          <p>{weather.condition.text}</p>
        </div>
        <div className={styles["weather__current-data"]}>
          <div>
            <span>
              {`Wind: ${weather.wind[unitSystem].speed.formattedValue}`}
            </span>
            <span className={styles["weather__current-direction"]}>
              {weather.wind.direction}
            </span>
          </div>
          <p
            className={styles["weather__temperature"]}
          >{`${weather.temperature[temperatureScale].formattedValue}`}</p>
          <p className={styles["weather__feels-like"]}>
            {`(feels like ${weather.feelsLike[temperatureScale].formattedValue})`}
          </p>
        </div>
      </div>
    </section>
  );
}
