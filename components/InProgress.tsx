import { BeakerIcon } from "@heroicons/react/outline";

const InProgress = () => {
  return (
    <div className="fixed bottom-2 w-full flex flex-col z-50">
      <div className="flex justify-center md:justify-end animate-pulse">
        <BeakerIcon className="h-6 w-6 mx-2 d-text-reverse" />
        <p className="d-text-reverse text-sm md:text-base font-bold tracking-widest">
          {/* UNDER DEVELOPMENT */}
          Too lazy to continue :)
        </p>
        <BeakerIcon className="h-6 w-6 mx-2 d-text-reverse" />
      </div>
    </div>
  );
};

export default InProgress;
