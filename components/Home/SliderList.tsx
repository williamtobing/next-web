import { useState } from "react";
import { useProjects } from "./data";
import SliderItem from "./SliderItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const SliderList = () => {
  const [idx, setIdx] = useState(0);

  const leftClickHandler = () => {
    if (idx - 1 >= 0) {
      setIdx(idx - 1);
    } else {
      setIdx(useProjects.length - 1);
    }
  };

  const rightClickHandler = () => {
    if (idx + 1 <= useProjects.length - 1) {
      setIdx(idx + 1);
    } else {
      setIdx(0);
    }
  };
  return (
    <div className="flex flex-col justify-center h-full text-gray-100">
      <div className="mb-4">
        <div className="flex overflow-hidden">
          {useProjects.map((project) => (
            <SliderItem
              key={project.id}
              name={project.name}
              imgUrl={project.imgUrl}
              idx={idx}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center z-10">
        <div className="flex items-center">
          <div className="flex">
            <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2 md:mx-0 md:mr-4">
              <img
                title="Vue.js"
                src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027581/logo/stack%20logo/vue_kedlql.webp"
                alt="vue logo"
                className="w-12 h-full transform scale-75 translate-y-0.5"
              />
            </div>
            <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2 md:mx-0 md:mr-4">
              <img
                title="Laravel"
                src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027266/logo/stack%20logo/laravel_lmyz5m.webp"
                alt="laravel logo"
                className="w-12 h-full transform scale-75"
              />
            </div>
            <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2 md:mx-0 md:mr-4">
              <img
                title="Inertia.js"
                src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027265/logo/stack%20logo/inertia-js_mav49q.png"
                alt="inertia logo"
                className="w-12 h-full"
              />
            </div>
            <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2 md:mx-0 md:mr-4">
              {" "}
              <img
                title="Taildwind CSS"
                src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636000856/logo/stack%20logo/tailwindcss_csi3ob.png"
                alt="tailwindcss logo"
                className="w-12 h-full"
              />
            </div>
            <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2 md:mx-0 md:mr-4">
              <img
                title="MySQL"
                src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027266/logo/stack%20logo/mysql_p2pgcs.webp"
                alt="mysql logo"
                className="w-12 h-full transform scale-75"
              />
            </div>
            <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2 md:mx-0 md:mr-4">
              <img
                title="AWS"
                src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027266/logo/stack%20logo/aws_seykwd.webp"
                alt="aws logo"
                className="w-12 h-full transform scale-90 translate-y-0.5"
              />
            </div>
          </div>
        </div>

        <div className="flex mb-4">
          <span
            onClick={leftClickHandler}
            className="border-2 border-gray-200 hover:bg-gray-200 duration-300 hover:text-gray-800 rounded-xl p-1 mr-1"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </span>
          <span
            onClick={rightClickHandler}
            className="border-2 border-gray-200 hover:bg-gray-200 duration-300 hover:text-gray-800 rounded-xl p-1 ml-1"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderList;
