import "twin.macro";
import { BeakerIcon } from "@heroicons/react/outline";

const InProgress = () => {
  return (
    // <div tw="hidden">
    <div tw="fixed bottom-2 w-full flex flex-col z-50">
      <div tw="flex justify-center md:justify-end animate-pulse">
        <BeakerIcon tw="h-6 w-6 mx-2" />
        <p tw="text-sm md:text-base font-bold tracking-widest">
          {/* UNDER DEVELOPMENT */}
          Revamp in progress
        </p>
        <BeakerIcon tw="h-6 w-6 mx-2" />
      </div>
    </div>
  );
};

export default InProgress;
