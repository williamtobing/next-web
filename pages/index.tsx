import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
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
    setEnabled(false); /* Unnecessary for the toggle button */
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  };

  const toDark = () => {
    setTheme("dark");
    setEnabled(true); /* Unnecessary for the toggle button */
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <>
      <Head>
        <title>William S L</title>
        <meta name="description" content="William Suarez Lumbantobing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="">
            <h1 className="text-6xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
              William Suarez
            </h1>
            <p className="text-lg text-blue-400 font-bold italic tracking-wide ml-1 mb-2">
              Lumbantobing
            </p>
            <Switch.Group>
              <div
                className="flex flex-wrap items-center ml-1"
                onClick={enabled ? toLight : toDark}
              >
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
                <Switch.Label className="flex text-gray-900 dark:text-gray-100 ml-2">
                  <div>Change Theme:</div>
                  <div className="w-8 text-center ml-2">
                    {enabled ? "True" : "False"}
                  </div>
                </Switch.Label>
                <span className="mx-2 cursor-pointer">
                  {theme === "dark" ? (
                    <SunIcon
                      className="h-6 w-6 text-gray-400 hover:text-white duration-300"
                      onClick={toLight}
                    />
                  ) : (
                    <MoonIcon
                      className="h-6 w-6 text-gray-400 hover:text-black duration-300"
                      onClick={toDark}
                    />
                  )}
                </span>
                <button
                  type="button"
                  onClick={enabled ? toLight : toDark}
                  className="bg-blue-200 hover:bg-blue-400 text-gray-900 font-bold duration-300 px-2 py-1"
                >
                  CHANGE
                </button>
              </div>
            </Switch.Group>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
