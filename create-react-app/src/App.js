import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        )
      ).json();

      setMovies(res.data.movies);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <h1>Movies {movies.length}</h1>
      {loading ? <h1>Loading ...</h1> : null}

      {movies.map((m) => (
        <div key={m.id}>
          <img src={m.medium_cover_image}></img>
          <h2>Title: {m.title}</h2>
          <p>Summary: {m.summary}</p>
          <p>Genre:</p>
          <ul>
            {m.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
