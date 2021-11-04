type sliderProps = {
  imgUrl: string;
  name: string;
  idx: number;
};

const SliderItem = ({ imgUrl, name, idx }: sliderProps) => {
  const styleHandler = () => {
    return {
      transform: `translateX(${-idx * 656}px)`,
    }; /* img width + margin right */
  };

  const styleMobileHandler = () => {
    return {
      transform: `translateX(${-idx * 308}px)`,
    }; /* img width + margin right */
  };

  return (
    <>
      <div
        style={styleHandler()}
        className="relative mt-8 mr-4 flex-none duration-300 transform ease-in-out hidden md:block"
      >
        <img
          src={imgUrl}
          alt="slider image"
          className="rounded-2xl w-v360p h-h360p object-cover filter grayscale contrast-125 hover:filter-none duration-500"
        />
        <div className="absolute bottom-4 left-4 bg-gray-800 rounded-lg uppercase px-2 py-1">
          <p className="text-gray-50 font-bold">{name}</p>
        </div>
      </div>

      {/* MOBILE */}
      <div
        style={styleMobileHandler()}
        className="relative mt-8 ml-1 mr-4 flex-none duration-300 transform ease-in-out md:hidden"
      >
        <img
          src={imgUrl}
          alt="slider image"
          className="rounded-2xl w-72 h-h360p object-cover filter grayscale contrast-125 hover:filter-none duration-500"
        />
        <div className="absolute bottom-4 left-4 bg-gray-800 rounded-lg uppercase px-2 py-1">
          <p className="text-gray-50 font-bold">{name}</p>
        </div>
      </div>
    </>
  );
};

export default SliderItem;
