export function LocationSection({ location }) {
  return (
    <section>
      <h2>
        {location.name} ({location.region})
      </h2>
      <div>
        <span>lat: {location.latitude}</span>
        <span>lon: {location.longitude}</span>
        <a
          href={`http://www.google.com/maps/place/${location.latitude},${location.longitude}`}
          target="_blank"
        >
          Go to map
        </a>
      </div>
    </section>
  );
}
