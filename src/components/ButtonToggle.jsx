import styles from "./ButtonSetContainer.module.css";

export function ButtonToggle({ isActive, label, dataId, handleToggle }) {
  const buttonClassName = `${styles["button-toggle"]} ${
    isActive ? `${styles["button-toggle--active"]}` : ""
  }`;

  return (
    <button className={buttonClassName} data-id={dataId} onClick={handleToggle}>
      {label}
    </button>
  );
}
