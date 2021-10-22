const Section2nd = () => {
  return (
    <section className="relative h-full">
      <img
        src="https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/Content_auto_x2.webp"
        alt="banner background"
        className="absolute h-screen object-cover filter grayscale contrast-150"
      />
      <div className="sec-container h-full relative">
        <div className="flex justify-center items-center h-full">
          <div className="w-96 h-56 flex justify-center items-center dark:bg-gray-600 bg-gray-400 bg-opacity-50 dark:bg-opacity-50 rounded-2xl">
            <h1 className="font-bold text-4xl text-gray-100 tracking-widest">
              Section 2nd
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2nd;
