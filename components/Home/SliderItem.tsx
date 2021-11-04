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

  return (
    <>
      <div
        style={styleHandler()}
        className="relative mt-8 mr-4 flex-none duration-300 transform ease-in-out"
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
    </>
  );
};

export default SliderItem;
