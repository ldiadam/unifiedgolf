export default function CompanyProfilePage() {
  return (
    <>
      {/* Here is for mobile */}
      <div className="block md:hidden">
        <div className="w-full h-auto shadow-lg -mb-34">
          <img
            src="/bg-home-3.png"
            alt="Golf course background"
            className="w-full h-auto opacity-85"
          />
        </div>
        <footer className="bg-card/80 text-white text-xs text-center py-4">
          © 2025 Unified Golf Pte Ltd. All rights reserved.
        </footer>
      </div>

      {/* Here is for dekstop*/}
      <div className="hidden md:block md:h-auto md:-mt-6">
        <div className="w-full h-auto shadow-lg">
          <img
            src="/bg-home-desktop.png"
            alt="Golf course background"
            className="w-screen h-screen"
          />
        </div>
        {/* <footer className="bg-card/80 text-white text-xs text-center py-4">
          © 2025 Unified Golf Pte Ltd. All rights reserved.
        </footer> */}
      </div>
    </>
  );
}
