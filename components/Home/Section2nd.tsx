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
          <div className="flex justify-center items-center dark:bg-gray-600 bg-gray-400 bg-opacity-50 dark:bg-opacity-50 rounded-full p-4">
            <img
              src="https://res.cloudinary.com/dox0nkwax/image/upload/v1635608705/logo/william12kx_zc1a8m.png"
              alt="logo"
              className="w-80 h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2nd;
