import type { NextPage } from "next";
// import Section1st from "../components/Home/Section1st";
// import Section2nd from "../components/Home/Section2nd";
// import Section3rd from "../components/Home/Section3rd";
import TempSec1st from "../components/Home/TempSec1st";
import TempSec2nd from "../components/Home/TempSec2nd";
import TempSec3rd from "../components/Home/TempSec3rd";
import TempSec4th from "../components/Home/TempSec4th";

const Home: NextPage = () => {
  return (
    <>
      {/* <Section1st />
      <Section2nd />
      <Section3rd /> */}

      <TempSec1st />
      <TempSec2nd />
      <TempSec3rd />
      <TempSec4th />
    </>
  );
};

export default Home;
