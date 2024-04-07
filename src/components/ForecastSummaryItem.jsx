import styles from "./ForecastSection.module.css";

export function ForecastSummaryItem({ summaryValue, summaryItem }) {
  const summaryItemClassName = `forecast__summary-${summaryItem}`;

  return (
    <div>
      <span
        className={`${styles["forecast__summary-item"]} ${styles[summaryItemClassName]}`}
      >
        {summaryValue}
      </span>
    </div>
  );
}
