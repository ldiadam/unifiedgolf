export default function Tag() {
  return (
    <div className="my-1 md:my-5 w-full">
      <div className="flex gap-4 md:gap-6 lg:gap-10 items-center justify-start md:justify-between">
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
          <h2 className="text-xs md:text-lg lg:text-xl text-white">Reliable</h2>
        </div>
        <div className="bg-black px-1 md:px-4 py-1">
          <h2 className="text-xs md:text-lg lg:text-xl text-white">
            Integrity
          </h2>
        </div>
      </div>
    </div>
  );
}
