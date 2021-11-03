import type { NextPage } from "next";
import Section1st from "../components/Home/Section1st";
import Section2nd from "../components/Home/Section2nd";
import Section3rd from "../components/Home/Section3rd";

const Home: NextPage = () => {
  return (
    <>
      <Section1st />
      <Section2nd />
      <Section3rd />
    </>
  );
};

export default Home;
