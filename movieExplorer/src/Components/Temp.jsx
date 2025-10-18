// src/context/WatchlistContext.jsx
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const WatchlistContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload || [];
    case "ADD":
      return state.some((m) => m.imdbID === action.payload.imdbID)
        ? state
        : [action.payload, ...state];
    case "REMOVE":
      return state.filter((m) => m.imdbID !== action.payload);
    default:
      return state;
  }
}

export function WatchlistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  // load from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("watchlist");
    if (saved) dispatch({ type: "INIT", payload: JSON.parse(saved) });
  }, []);

  // save to localStorage on change
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state));
  }, [state]);

  const api = useMemo(
    () => ({
      list: state,
      add: (movie) => dispatch({ type: "ADD", payload: movie }),
      remove: (id) => dispatch({ type: "REMOVE", payload: id }),
      has: (id) => state.some((m) => m.imdbID === id),
    }),
    [state]
  );

  return (
    <WatchlistContext.Provider value={api}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}
