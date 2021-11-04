import { useState } from "react";
import { useCircuitSVG } from "./data";

const TempSec3rd = () => {
  const [bgSVG] = useState(useCircuitSVG("9CA3AF"));

  return (
    <section style={{ height: "50vh" }} className="relative bg-gray-900">
      <div className="flex z-0">
        <div
          style={{ backgroundImage: `url("${bgSVG}")` }}
          className="absolute w-full h-full"
        />
      </div>

      <div className="sec-container h-full">
        <div className="flex justify-center items-center h-full">
          <div className="bg-gray-900 text-center rounded-full p-12 z-10">
            <p className="d-text-reverse">
              This site is still under development.
            </p>
            <p className="d-text-reverse">
              For more details, please refer to my previous site.
            </p>
            <a
              className="xs:text-xl tracking-wider text-red-600 hover:text-red-700 hover:underline font-bold"
              href="https://williamtobing.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              williamtobing.github.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempSec3rd;
