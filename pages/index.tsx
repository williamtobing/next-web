import type { NextPage } from "next";
import { useState, useEffect } from "react";
// import Section1st from "../components/Home/Section1st";
// import Section2nd from "../components/Home/Section2nd";
// import Section3rd from "../components/Home/Section3rd";
import TempSec1st from "../components/Home/TempSec1st";
import TempSec2nd from "../components/Home/TempSec2nd";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("lang", navigator.language);
    const themeStorage = localStorage.getItem("theme");

    if (themeStorage) {
      setTheme(theme);
    }
  }, []);

  return (
    <>
      {/* <Section1st /> */}
      {/* <Section2nd /> */}
      {/* <Section3rd /> */}

      <TempSec1st />
      <TempSec2nd />
    </>
  );
};

export default Home;
