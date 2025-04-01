import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

export default function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [m, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(res.data.movie);
      setLoading(false);
    })();
  }, []);

  console.log(m);
  return (
    <div>
      {loading ? null : (
        <Movie
          key={m.id}
          id={m.id}
          title={m.title}
          coverImage={m.medium_cover_image}
          genres={m.genres}
          description={m.description_full}
        />
      )}
    </div>
  );
}
