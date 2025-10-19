import { useState, useEffect } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  /* -------------------------- 🌙 DARK MODE LOGIC -------------------------- */

  // Keeps track of whether dark mode is currently active or not
  const [isDark, setIsDark] = useState(false);

  // On first load: check if the user already has a saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true); // Apply dark theme if previously saved
    }
  }, []);

  // Function that flips the theme state each time the toggle button is clicked
  const toggleTheme = () => setIsDark((prev) => !prev);

  // Whenever `isDark` changes:
  // → add/remove the `.dark` class on <html> so Tailwind can apply the right theme
  // → and save the user’s preference in localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <section>
        <Header onToggleTheme={toggleTheme} />
        <Filter />
      </section>
    </>
  );
}

export default App;
