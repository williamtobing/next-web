import type { NextPage } from "next";
import "twin.macro";

const Home: NextPage = () => {
  return (
    <>
      <p tw="text-3xl font-extrabold">Hi there,</p>
      <p tw="text-4xl font-bold">I am William</p>
      <p tw="text-2xl font-semibold italic">Software Engineer</p>
    </>
  );
};

export default Home;
