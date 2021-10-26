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
      <div className="flex flex-wrap items-center sm:ml-1">
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
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400`}
          >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
            <span className="hidden">THEME</span>
          </Switch>
        </div>
      </div>
    </Switch.Group>
  );
};

export default ThemeHandler;
