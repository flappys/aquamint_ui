import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ALLOWED_ROUTE_PATH_FOR_SIDEMENU, SIDEMENU, } from "../../shared/constants/static";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const HoverSidebar = () => {
  const location = useLocation();
  const [isShown, setIsShown] = useState(false);
  const [showHoverSidemenu, setShowHoverSidemenu] = useState(false)

  useEffect(() => {
    let filter = ALLOWED_ROUTE_PATH_FOR_SIDEMENU.filter((x) => x == location.pathname)
    setShowHoverSidemenu(filter.length != 0)
  }, [location.pathname])

 



  return (
     <>
     
     {showHoverSidemenu == false ? <div className="hidden md:block md:flex w-[28%] bg md:flex-col md:fixed z-100">
        <div className="flex-1 flex flex-col min-h-0 ">

          <section className="flex gap-6 absolute z-20">
            <div
              onMouseEnter={() => { setIsShown(true); }}
              onMouseLeave={() => { setIsShown(false); }}
              className={`bg-[#0e0e0e] min-h-screen w-16 hover:w-60 
        duration-500 text-gray-100 px-4 z-20`}
            >
              <div
                className="mt-10 flex flex-col gap-6 relative">
                {SIDEMENU?.map((menu: any, i: any) => (
                  <Link
                    to={menu?.route}

                    key={i}
                    className={menu.active  ? "bg-gray-900 text-white group flex items-center cursor-pointer px-2 py-2 text-sm font-medium rounded-md" : "text-white cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"}
                  >
                    <img
                      src={menu.imgSrc}
                      className="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                      alt="dash"
                    />
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre font-normal text-[22px]`}
                    >
                      {isShown && menu?.name}
                    </h2>
                  </Link>
                ))}
              </div>
            </div>

          </section>
        </div>
      </div> : <div className="fixed top-20 z-1000  w-64 h-full  border-gray-700 border-t-[0.5px] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px]">
        <Sidebar></Sidebar>
      </div>
      }
     
     </>

  );
};

export default HoverSidebar;
