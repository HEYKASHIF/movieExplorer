// WatchList.jsx
import { useWatchlist } from "./Temp";

import MovieCard from "./MovieCard";

export default function WatchList() {
  const { list } = useWatchlist();
  if (!list.length) return <p className="p-4">No favourites yet.</p>;

  return (
    <div className="flex flex-col gap-4">
      {list.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  );
}
