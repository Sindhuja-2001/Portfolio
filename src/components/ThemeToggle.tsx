import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 z-50 p-2 md:p-3 rounded-full bg-yellow-400 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaMoon size={18} className="text-black" />
      ) : (
        <FaSun size={18} className="text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
