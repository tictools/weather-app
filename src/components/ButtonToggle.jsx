export function ButtonToggle({ label, dataId, handleToggle }) {
  return (
    <button data-id={dataId} onClick={handleToggle}>
      {label}
    </button>
  );
}
