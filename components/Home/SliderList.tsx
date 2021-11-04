import { useState } from "react";
import SliderItem from "./SliderItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

type Projects = {
  id: number;
  imgUrl: string;
  name: string;
}[];

const projects: Projects = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012072/logo/project/web-busol/homepage_zlypgq.webp",
    name: "homepage",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012073/logo/project/web-busol/product-page_mmqwp1.webp",
    name: "product page",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012074/logo/project/web-busol/promo-page_l4lm9j.webp",
    name: "promo page",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012069/logo/project/web-busol/login_qcxkaq.webp",
    name: "cms",
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012069/logo/project/web-busol/admin-dashboard_k5nlhw.webp",
    name: "dashboard",
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012070/logo/project/web-busol/admin-profile_pgzicp.webp",
    name: "admin profile",
  },
  {
    id: 7,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012071/logo/project/web-busol/admin-layout_b4ptns.webp",
    name: "admin customization",
  },
  {
    id: 8,
    imgUrl:
      "https://res.cloudinary.com/dox0nkwax/image/upload/v1636012070/logo/project/web-busol/admin-homepage_zvnzgz.webp",
    name: "homepage customization",
  },
];

const SliderList = () => {
  const [idx, setIdx] = useState(0);

  const leftClickHandler = () => {
    if (idx - 1 >= 0) {
      setIdx(idx - 1);
    } else {
      setIdx(projects.length - 1);
    }
  };

  const rightClickHandler = () => {
    if (idx + 1 <= projects.length - 1) {
      setIdx(idx + 1);
    } else {
      setIdx(0);
    }
  };
  return (
    <div className="flex flex-col justify-center h-full text-gray-100">
      <div className="mb-4">
        <div className="flex overflow-hidden">
          {projects.map((project) => (
            <SliderItem
              key={project.id}
              name={project.name}
              imgUrl={project.imgUrl}
              idx={idx}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center z-10">
        <button
          type="button"
          onClick={leftClickHandler}
          className="border-2 border-gray-200 hover:bg-gray-200 duration-300 hover:text-gray-800 rounded-xl p-1 mr-2"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={rightClickHandler}
          className="border-2 border-gray-200 hover:bg-gray-200 duration-300 hover:text-gray-800 rounded-xl p-1 mr-2"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
        <div className="ml-6 mr-4">
          <p className="text-lg font-bold">TECH STACK</p>
        </div>
        <div className="flex">
          <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2">
            <img
              title="Vue.js"
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027581/logo/stack%20logo/vue_kedlql.webp"
              alt="vue logo"
              className="w-12 h-full transform scale-75 translate-y-0.5"
            />
          </div>
          <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2">
            <img
              title="Laravel"
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027266/logo/stack%20logo/laravel_lmyz5m.webp"
              alt="laravel logo"
              className="w-12 h-full transform scale-75"
            />
          </div>
          <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2">
            <img
              title="Inertia.js"
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027265/logo/stack%20logo/inertia-js_mav49q.png"
              alt="inertia logo"
              className="w-12 h-full"
            />
          </div>
          <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2">
            {" "}
            <img
              title="Taildwind CSS"
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636000856/logo/stack%20logo/tailwindcss_csi3ob.png"
              alt="tailwindcss logo"
              className="w-12 h-full"
            />
          </div>
          <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2">
            <img
              title="MySQL"
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027266/logo/stack%20logo/mysql_p2pgcs.webp"
              alt="mysql logo"
              className="w-12 h-full transform scale-75"
            />
          </div>
          <div className="rounded-full bg-gray-100 border-2 border-gray-100 overflow-hidden mx-2">
            <img
              title="AWS"
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636027266/logo/stack%20logo/aws_seykwd.webp"
              alt="aws logo"
              className="w-12 h-full transform scale-90 translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderList;
