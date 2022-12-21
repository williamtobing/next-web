import { BeakerIcon } from "@heroicons/react/outline";

const InProgress = () => {
  return (
    <div className="fixed bottom-2 w-full flex flex-col z-50">
      <div className="flex justify-center md:justify-end">
        <BeakerIcon className="h-6 w-6 mx-2 d-text-reverse" />
        <p className="d-text-reverse text-sm md:text-base font-bold tracking-widest">
          {/* UNDER DEVELOPMENT */}
          Now latest:{" "}
          <a
            href="https://williamtobing.com"
            className="text-red-600 hover:text-red-700 hover:underline font-black mt-2.5"
          >
            williamtobing.com
          </a>
        </p>
        <BeakerIcon className="h-6 w-6 mx-2 d-text-reverse" />
      </div>
    </div>
  );
};

export default InProgress;
