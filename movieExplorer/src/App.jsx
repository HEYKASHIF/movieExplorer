import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Main from "./Components/middle"; // your current movie list page
import Search from "./Components/Search"; // new search page
import WatchList from "./Components/WatchList";
import Theme from "./Components/Theme";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchList />} />

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}
