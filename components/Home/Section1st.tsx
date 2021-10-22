import { BeakerIcon } from "@heroicons/react/outline";
import { useState } from "react";
import ThemeHandler from "../ThemeHandler";
import { CircuitSVG } from "./data";

const Section1st = () => {
  const [bgSVG, setBgSVG] = useState(CircuitSVG);

  return (
    <section className="relative h-full bg-gray-200 dark:bg-gray-800">
      <div
        style={{ backgroundImage: `url("${bgSVG}")` }}
        className="absolute w-1/12 sm:w-2/12 h-screen bg-gray-200 dark:bg-gray-800"
      />
      <div className="sec-container flex flex-col justify-center items-center h-full relative">
        <div className="text-center sm:text-left">
          <p className="text-6xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
            William Suarez
          </p>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-bold italic tracking-wide sm:ml-1 mb-2">
            Lumbantobing
          </p>
          <div className="flex sm:block justify-center items-center mb-2">
            <ThemeHandler />
          </div>
          <p className="bg-red-500 text-gray-100 sm:text-right uppercase rounded-md px-4 py-2 my-2 font-bold sm:ml-1">
            #ef4444
          </p>
          <p className="bg-gray-800 text-gray-100 sm:text-right uppercase rounded-md px-4 py-2 my-2 font-bold sm:ml-1">
            #1f2937
          </p>
          <p className="bg-gray-900 text-gray-100 sm:text-right uppercase rounded-md px-4 py-2 my-2 font-bold sm:ml-1">
            #111827
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center items-center animate-pulse">
        <BeakerIcon className="h-6 w-6 mx-2 text-gray-900 dark:text-gray-100" />
        <p className="text-gray-900 dark:text-gray-100 tracking-widest dark">
          UNDER DEVELOPMENT
        </p>
        <BeakerIcon className="h-6 w-6 mx-2 text-gray-900 dark:text-gray-100" />
      </div>
    </section>
  );
};

export default Section1st;
