import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home() {
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
        <Movie
          key={m.id}
          id={m.id}
          title={m.title}
          coverImage={m.medium_cover_image}
          genres={m.genres}
          summary={m.summary}
        />
      ))}
    </>
  );
}
