export default function Tag() {
  return (
    <div className="my-1 md:my-5 w-full p-4 flex justify-start -ml-4">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-row gap-2 md:gap-6 lg:gap-10 items-center justify-center">
          <div className="bg-black px-1 md:px-4 py-1">
            <h2 className="text-xs md:text-lg lg:text-xl text-white">
              Professional
            </h2>
          </div>
          <div className="bg-black px-1 md:px-4 py-1">
            <h2 className="text-xs md:text-lg lg:text-xl text-white">
              Comprehensive
            </h2>
          </div>
          <div className="bg-black px-1 md:px-4 py-1">
            <h2 className="text-xs md:text-lg lg:text-xl text-white">
              Reliable
            </h2>
          </div>
          <div className="bg-black px-1 md:px-4 py-1">
            <h2 className="text-xs md:text-lg lg:text-xl text-white">
              Integrity
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
