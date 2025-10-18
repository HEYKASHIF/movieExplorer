// Components/Nav.jsx
import { NavLink } from "react-router-dom";
import Theme from "./Theme";

export default function Nav() {
  const btnBase =
    "inline-flex h-10 items-center justify-center rounded-xl px-5 " +
    "text-sm font-semibold text-white bg-[#152232] border-2 border-transparent " +
    "transition hover:opacity-90 align-middle leading-none";

  const btnActive = "border-white"; // sirf color badlega, size same rahega

  return (
    <header className="bg-[#930910] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 p-4">
        <h1 className="text-2xl font-extrabold m-0 tracking-wide">
          MOVIE EXPLORER
        </h1>

        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${btnBase} ${btnActive}` : btnBase
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? `${btnBase} ${btnActive}` : btnBase
            }
          >
            Search 👀
          </NavLink>

          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? `${btnBase} ${btnActive}` : btnBase
            }
          >
            WatchList
          </NavLink>

          {/* Theme ko bhi same button style do */}
          <Theme className={btnBase} activeClass={btnActive} />
        </nav>
      </div>
    </header>
  );
}
