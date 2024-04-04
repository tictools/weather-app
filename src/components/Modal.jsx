import styles from "./Modal.module.css";

const STATUS = {
  LOADING: "loading",
  WARNING: "warning",
};

export function Modal({ message, status }) {
  const statusClassName =
    status === STATUS.LOADING
      ? "modal__wrapper--loading"
      : "modal__wrapper--warning";

  return (
    <div className={styles["modal__wrapper"]}>
      <p className={styles[statusClassName]}>{message}</p>
    </div>
  );
}
