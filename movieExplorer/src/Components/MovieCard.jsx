// src/components/MovieCard.jsx
import { useWatchlist } from "./Temp";

export default function MovieCard({
  movie,
  hideAction = false, // kabhi-kabhi action chhupana ho
  forceAction = null, // "add" | "remove" | null (auto)
}) {
  const { add, remove, has } = useWatchlist();
  const inList = has(movie.imdbID);

  // agar forceAction diya hai to wahi, warna auto (inList? remove : add)
  const action = forceAction ?? (inList ? "remove" : "add");

  return (
    <div className="border rounded-lg p-3 flex gap-4 items-start">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/120x180"
        }
        alt={movie.Title}
        className="w-28 h-40 object-cover rounded"
      />
      <div className="flex-1">
        <p className="text-lg font-semibold">
          🎬 {movie.Title} ({movie.Year})
        </p>

        {!hideAction &&
          (action === "add" ? (
            <button
              onClick={() => add(movie)}
              className="mt-2 px-3 py-1 rounded bg-emerald-600 text-white hover:opacity-90"
              disabled={inList}
            >
              {inList ? "Added ✓" : "+ Add to Watchlist"}
            </button>
          ) : (
            <button
              onClick={() => remove(movie.imdbID)}
              className="mt-2 px-3 py-1 rounded bg-red-600 text-white hover:opacity-90"
            >
              Remove
            </button>
          ))}
      </div>
    </div>
  );
}
