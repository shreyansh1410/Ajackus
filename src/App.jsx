import { useState, useEffect } from "react";
import { UserList } from "./components/UserList";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}
    >
      <motion.div
        className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-indigo-900"
        animate={{
          background:
            theme === "dark"
              ? "linear-gradient(to bottom right, #1a202c, #312e81)"
              : "linear-gradient(to bottom right, #dbeafe, #e0e7ff)",
        }}
        transition={{ duration: 0.5 }}
      />
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            User Management
          </h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <UserList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
