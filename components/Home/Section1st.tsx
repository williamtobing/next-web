import { useState } from "react";
import { BeakerIcon } from "@heroicons/react/outline";
import { useCircuitSVG } from "./data";
import ThemeHandler from "../ThemeHandler";

const Section1st = () => {
  const [bgSVG] = useState(useCircuitSVG("ef4444"));

  return (
    <section className="relative h-full bg-gray-200 dark:bg-gray-800">
      <div
        style={{ backgroundImage: `url("${bgSVG}")` }}
        className="absolute w-1/12 sm:w-2/12 h-screen bg-gray-200 dark:bg-gray-800"
      />

      <div className="sec-container flex flex-col justify-center items-center h-full relative">
        <div className="text-center sm:text-left">
          <p className="text-6xl font-bold tracking-widest d-text">
            William Suarez
          </p>
          <p className="text-lg text-red-500 font-bold italic tracking-wide sm:ml-1 mb-2">
            Lumbantobing
          </p>
          <div className="flex sm:block justify-center items-center mb-2">
            <ThemeHandler />
          </div>
          <p className="bg-red-500 text-gray-100 sm:text-right uppercase sm:rounded-md px-4 py-2 my-2 font-bold sm:ml-1">
            #ef4444
          </p>
          <p className="bg-gray-800 dark:bg-gray-200 text-gray-100 dark:text-gray-900 sm:text-right uppercase sm:rounded-md px-4 py-2 my-2 font-bold sm:ml-1">
            #1f2937
          </p>
          <p className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 sm:text-right uppercase sm:rounded-md px-4 py-2 my-2 font-bold sm:ml-1">
            #111827
          </p>
          <div className="flex justify-center mt-4 animate-pulse invisible">
            <BeakerIcon className="h-6 w-6 mx-2 d-text" />
            <p className="d-text tracking-widest dark">UNDER DEVELOPMENT</p>
            <BeakerIcon className="h-6 w-6 mx-2 d-text" />
          </div>
          <div className="flex flex-col items-center invisible">
            <p className="d-text tracking-wider">
              Please refer to the following site.
            </p>
            <a
              className="tracking-wider text-red-500 hover:text-red-600 hover:underline font-bold"
              href="https://williamtobing.github.io/"
            >
              williamtobing.github.io
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full flex flex-col">
        <div className="flex justify-center animate-pulse">
          <BeakerIcon className="h-6 w-6 mx-2 d-text" />
          <p className="d-text tracking-widest dark">UNDER DEVELOPMENT</p>
          <BeakerIcon className="h-6 w-6 mx-2 d-text" />
        </div>
        <div className="flex flex-col items-center">
          <p className="d-text tracking-wider dark">
            Please refer to the following site.
          </p>
          <a
            className="tracking-wider text-red-500 hover:text-red-600 hover:underline font-bold"
            href="https://williamtobing.github.io/"
          >
            williamtobing.github.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1st;
