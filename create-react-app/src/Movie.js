export default function Movie({
  id,
  title,
  medium_cover_image,
  genres,
  summary,
}) {
  return (
    <>
      <div key={id}>
        <h2>{title}</h2>
        <img src={medium_cover_image}></img>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </>
  );
}
