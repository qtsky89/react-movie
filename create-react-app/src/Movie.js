import PropTypes from "prop-types";

export default function Movie({ title, coverImage, genres, summary }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImage} alt={title}></img>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  converImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
