import styles from "./ForecastSection.module.css";
import { ForecastSummaryItem } from "./ForecastSummaryItem";

export function ForecastSummary({ uv, humidity, maxWind, maxPrecipitation }) {
  return (
    <div className={styles["forecast__summary"]}>
      <ForecastSummaryItem summaryValue={uv} summaryItem="uv" />
      <ForecastSummaryItem summaryValue={humidity} summaryItem="humidity" />
      <ForecastSummaryItem summaryValue={maxWind} summaryItem="wind" />
      <ForecastSummaryItem summaryValue={maxPrecipitation} summaryItem="rain" />
    </div>
  );
}
