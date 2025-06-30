// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="fixed bottom-5 right-5 p-3 rounded-full bg-white dark:bg-black text-black dark:text-white shadow-md hover:scale-105 transition"
//       aria-label="Toggle theme"
//     >
//       {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
//     </button>
//   );
// };

// export default ThemeToggle;
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
//  <button
//   onClick={() => setIsDark(!isDark)}
//   className="fixed bottom-6 right-6 z-[100] p-3 rounded-full bg-yellow-400 border-4 border-red-500 shadow-lg hover:scale-110 transition-all duration-300"
//   // className="fixed bottom-6 right-6 z-[100] p-3 rounded-full bg-yellow-400 shadow-lg hover:scale-110 transition-all duration-300"
//   aria-label="Toggle theme"
// >
//   {isDark ? (
//     <FaMoon size={20} className="text-black" />
//   ) : (
//     <FaSun size={20} className="text-white" />
//   )}
// </button>
<button
  onClick={() => setIsDark(!isDark)}
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

