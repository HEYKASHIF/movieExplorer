import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "batman";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${q}`
        );
        if (res.data.Search) setMovies(res.data.Search.slice(0, 10));
        else setMovies([]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMovies();
  }, [q]);

  return (
    <div>
      {/* URL-driven search: /search?q=superman */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const v = new FormData(e.currentTarget).get("query");
          setSearchParams(v ? { q: v } : {});
        }}
        className="flex gap-2 mb-4"
      >
        <input
          name="query"
          defaultValue={q}
          placeholder="Search movies..."
          className="border px-3 py-2 rounded w-full"
        />
        <button className="px-4 py-2 rounded bg-black text-white">
          Search
        </button>
      </form>

      <div className="flex flex-col gap-4">
        {movies.map((m) => (
          <div key={m.imdbID} className="border rounded-lg p-3 flex gap-4">
            <img
              src={
                m.Poster !== "N/A"
                  ? m.Poster
                  : "https://via.placeholder.com/120x180"
              }
              alt={m.Title}
              className="w-28 h-40 object-cover rounded"
            />
            <p className="text-lg font-semibold">
              🎬 {m.Title} ({m.Year})
            </p>
          </div>
        ))}
        {!movies.length && <p>No results.</p>}
      </div>
    </div>
  );
}
