import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const ThemeHandler = () => {
  const [theme, setTheme] = useState("light");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("lang", navigator.language);
    const themeStorage = localStorage.getItem("theme");

    if (themeStorage) {
      setTheme(themeStorage);
    }

    if (themeStorage === "dark") {
      setEnabled(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setEnabled(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toLight = () => {
    setTheme("light");
    setEnabled(false);
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  };

  const toDark = () => {
    setTheme("dark");
    setEnabled(true);
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <Switch.Group>
      <div className="flex items-center sm:ml-1">
        <div
          className="rounded-full cursor-pointer"
          onClick={theme === "dark" ? toLight : toDark}
        >
          <Switch
            as="div"
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-red-500" : "bg-gray-400"
            } relative inline-flex items-center h-7 rounded-full w-14 transition-colors focus:outline-none`}
          >
            <span
              className={`${
                enabled ? "translate-x-8" : "translate-x-1"
              } inline-block w-5 h-5 transform bg-white rounded-full transition-transform`}
            />
            <span className="hidden">THEME</span>
          </Switch>
        </div>
        <div
          onClick={enabled ? toLight : toDark}
          title={enabled ? "Light Mode" : "Dark Mode"}
          className="w-7 h-7 bg-gray-800 dark:bg-gray-200 hover:bg-gray-900 dark:hover:bg-gray-100 border-2 border-gray-800 dark:border-gray-200 hover:border-gray-900 dark:hover:border-gray-100 rounded-full shadow-lg overflow-hidden cursor-pointer ml-2"
        >
          <div className="w-1/2 h-full bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </Switch.Group>
  );
};

export default ThemeHandler;
