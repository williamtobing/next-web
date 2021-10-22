import { BeakerIcon } from "@heroicons/react/outline";
import ThemeHandler from "../ThemeHandler";

const Section1st = () => {
  return (
    <section className="relative h-full">
      <div className="absolute w-full h-screen bg-gray-100 dark:bg-gray-900" />
      <div className="sec-container flex flex-col justify-center items-center h-full relative">
        <div className="text-center sm:text-left">
          <p className="text-6xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
            William Suarez
          </p>
          <p className="text-lg text-blue-400 font-bold italic tracking-wide ml-1 mb-2">
            Lumbantobing
          </p>
          <div className="flex sm:block justify-center items-center">
            <ThemeHandler />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center items-center animate-pulse">
        <BeakerIcon className="h-6 w-6 mx-2 text-gray-900 dark:text-gray-100" />
        <p className="text-gray-900 dark:text-gray-100 tracking-widest dark ml-1">
          UNDER DEVELOPMENT
        </p>
        <BeakerIcon className="h-6 w-6 mx-2 text-gray-900 dark:text-gray-100" />
      </div>
    </section>
  );
};

export default Section1st;
