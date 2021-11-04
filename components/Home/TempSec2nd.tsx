import { useState } from "react";
import SliderList from "./SliderList";
import { useCircuitSVG } from "./data";

const TempSec2nd = () => {
  const [bgSVG] = useState(useCircuitSVG("1F2937"));

  return (
    <section className="relative bg-gray-900 min-h-screen">
      <div className="flex justify-end z-0">
        <div
          style={{ backgroundImage: `url("${bgSVG}")` }}
          className="absolute w-1/12 sm:w-2/12 h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-transparent dark:bg-gray-800"
        />
      </div>

      <div className="sec-container min-h-screen">
        <div className="flex flex-col justify-center min-h-screen">
          <h1 className="text-gray-100 text-2xl font-bold font-ubuntu ml-1">
            Current Project:{" "}
            <span className="text-red-600 italic hover:underline">
              <a
                href="https://www.xlaxiata.co.id/bisnis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                XL Axiata Business Solutioins
              </a>
            </span>
          </h1>
          <SliderList />
        </div>
      </div>
    </section>
  );
};

export default TempSec2nd;
