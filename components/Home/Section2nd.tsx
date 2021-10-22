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
          <h1 className="font-bold text-4xl text-white tracking-widest">
            Section 2nd
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Section2nd;
