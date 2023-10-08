import SidebarRecentCard from "../Card/SidebarRecentCard";

const MobileSidebar = ({ activeMobileSidebar, setActiveMobileSidebar }) => {
  return (
    <div
      className={`absolute ${
        activeMobileSidebar ? "top-20 w-full" : "w-0 top0 left-0"
      } h-[820px]  !bg-gray-950/50 z-2 transition-all duration-500 ease-in overflow-hidden block 800px:hidden md:hidden lg:hidden xl:hidden`}
    >
      <div className="overflow-y-auto cats w-1/2 h-full opacity-100 bg-gradient-to-b from-blue-950 to-blue-950 p-4 ">
        <div>
          <input
            type="text"
            placeholder="search"
            className="bg-[#1b2f53] w-full indent-2 p-2 my-2 rounded-full outline-none text-white"
          />
        </div>

        <div className="">
          <div className="text-gray-300  text-sm flex items-center my-8">
            <div className="">
              <img
                src="/images/bulb.gif"
                alt=""
                className="w-[25px] h-[25px] object-contain"
              />
            </div>
            <p className="ml-2"> Recent Activiy</p>
          </div>
          <SidebarRecentCard />
          <SidebarRecentCard />
          <SidebarRecentCard />
        </div>

        <div className="absolute bottom-2 right-2">
          <img
            src="/images/particles.gif"
            alt="bulb"
            className="w-[80px] h-[80px] rotate-45 object-contain mix-blend-luminosity transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
