import { BeakerIcon } from "@heroicons/react/outline";

const InProgress = () => {
  return (
    <div className="fixed bottom-2 w-full flex flex-col z-50">
      <div className="flex justify-end animate-pulse">
        <BeakerIcon className="h-6 w-6 mx-2 d-text-reverse" />
        <p className="d-text-reverse font-bold tracking-widest">
          UNDER DEVELOPMENT
        </p>
        <BeakerIcon className="h-6 w-6 mx-2 d-text-reverse" />
      </div>
    </div>
  );
};

export default InProgress;
