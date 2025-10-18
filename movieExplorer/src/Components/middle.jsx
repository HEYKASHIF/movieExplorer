import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
      const query = "batman";

      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );

        if (res.data.Search) {
          setMovies(res.data.Search.slice(0, 10));
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </>
  );
}
