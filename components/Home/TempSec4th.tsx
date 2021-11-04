const TempSec2nd = () => {
  return (
    <section className="md:h-full bg-gray-900">
      <div className="sec-container h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="my-8 md:mt-0 md:mb-16">
            <h1 className="text-gray-100 text-xl md:text-4xl text-center font-bold font-ubuntu uppercase">
              This site was developed with
            </h1>
          </div>
          <div className="md:flex mb-12 md:mb-0">
            <div className="mx-2 mb-8 md:mb-0 2xl:mx-8">
              <div className="bg-gray-200 hover:bg-white duration-500 border-8 border-gray-400 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636001626/logo/stack%20logo/next-js_felzgo.webp"
                  alt="next.js logo"
                  className="w-48 h-full transform hover:scale-125 duration-1000"
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-text-reverse hover:text-red-600 text-2xl font-bold text-center duration-300"
                >
                  NEXT.js
                </a>
              </div>
            </div>
            <div className="mx-2 mb-8 md:mb-0 2xl:mx-8">
              <div className="bg-gray-200 border-8 border-gray-400 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636000856/logo/stack%20logo/react_ura0hq.webp"
                  alt="react logo"
                  className="w-48 h-full hover:animate-spin-slow"
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-text-reverse hover:text-red-600 text-2xl font-bold text-center duration-300"
                >
                  React.js
                </a>
              </div>
            </div>
            <div className="mx-2 mb-8 md:mb-0 2xl:mx-8">
              <div
                style={{ backgroundColor: "#2d79c7" }}
                className="border-8 border-gray-400 rounded-full overflow-hidden"
              >
                <img
                  src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636000856/logo/stack%20logo/typescript_ho8aqd.png"
                  alt="typescript logo"
                  className="w-48 h-full transform hover:-translate-x-3.5 hover:-translate-y-7 duration-1000"
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-text-reverse hover:text-red-600 text-2xl font-bold text-center duration-300"
                >
                  TypeScript
                </a>
              </div>
            </div>
            <div className="mx-2 mb-8 md:mb-0 2xl:mx-8">
              <div className="bg-gray-200 border-8 border-gray-400 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dox0nkwax/image/upload/v1636000856/logo/stack%20logo/tailwindcss_csi3ob.png"
                  alt="tailwindcss logo"
                  className="w-48 h-full transform scale-90 hover:scale-110 duration-1000"
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-text-reverse hover:text-red-600 text-2xl font-bold text-center duration-300"
                >
                  Taildwind CSS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempSec2nd;
