import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ id, title, coverImage, genres, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
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
