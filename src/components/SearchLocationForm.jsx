import styles from "./SearchLocationForm.module.css";

export function SearchLocationForm({ handleUpdateLocation }) {
  const handleChangeLocation = (event) => {
    event.preventDefault();
    handleUpdateLocation(event.target.location.value);

    event.target.location.value = "";
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleChangeLocation}>
      <input
        className={styles["search-form__input"]}
        type="text"
        name="location"
        id="location"
      />
    </form>
  );
}
