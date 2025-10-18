import { useState, useEffect } from "react";

export default function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);

  // ye effect tab chalega jab theme change hoga
  useEffect(() => {
    const body = document.body;
    if (darkTheme) {
      body.style.backgroundColor = "#121212";
      body.style.color = "white";
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <button
      onClick={handleTheme}
      className="text-white bg-gray-800 px-4 py-2 m-5 rounded-xl hover:text-black hover:bg-white transition-all duration-300"
    >
      {darkTheme ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
