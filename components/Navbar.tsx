import { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.document.onscroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  };

  return (
    <nav
      className={`${
        scroll
          ? "bg-gray-100 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90"
          : "bg-transparent"
      } w-full fixed z-50 hidden sm:block duration-300`}
    >
      <div className="sec-container flex justify-end">
        <ul className="my-4 flex items-center d-text text-center">
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-gray-900 dark:border-gray-100 cursor-pointer">
              HOME
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 duration-300 cursor-pointer">
              ABOUT
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 duration-300 cursor-pointer">
              PROJECT
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 duration-300 cursor-pointer">
              CONTACT
            </p>
          </li>
          <li className="ml-6 border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-900 px-2 py-1 rounded-md cursor-pointer duration-300">
            <p className="tracking-widest font-bold">Call to Action</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
