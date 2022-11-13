import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import logo from "../../images/logo.png";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ALLOWED_ROUTE_PATH_FOR_SIDEMENU, SIDEMENU, TOP_MENU, } from "../../shared/constants/static";

function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const showMobileMenu = () => {
    showMobMenu == false ? setShowMobMenu(true) : setShowMobMenu(false);
  };

  const navigate = useNavigate();
  const home = () => {
    console.log("lsdjlfdj");
    navigate("/");
  };

  const dark = '#07080e' as any;
  const light = 'white' as any;

  const [mode, setMode] = useState(null);
  const defaultMode = localStorage.getItem("mode") as any;

  if (defaultMode == null) {
    localStorage.setItem("mode", dark);
  }

  useEffect(() => {
    setMode(defaultMode);
  }, []);

  const changeMode = () => {
    if (mode == light || mode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", dark);
      setMode(dark);
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", light);
      setMode(light);
    }

  }
  return (
    <>
      <>
        <nav className="shadow lg:hidden md:hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-black">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  onClick={() => showMobileMenu()}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <FiMenu className="text-2xl font-bold" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    onClick={() => home()}
                    className="block lg:hidden h-8 w-auto hover:cursor-pointer"
                    src={logo}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 lg:hidden rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  <div
                    className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={showMobMenu === true ? "" : "hidden"}
            id="mobile-menu"
          >
            <div className="pt-2 pb-4 space-y-1">
              {SIDEMENU?.map((menu: any, i: any) => (
                <Link
                  to={menu?.route}

                  key={i}
                  className={menu.active ? "bg-gray-900 text-white group flex items-center cursor-pointer px-2 py-2 text-sm font-medium rounded-md" : "text-white cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"}
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
                    className={`whitespace-pre duration-500 overflow-hidden`}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}

              {/* <a
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </a> */}

            </div>
          </div>
        </nav>
      </>

      <div className="bg-black hidden lg:flex md:flex sticky top-0 z-10 flex-shrink-0 h-16 shadow">
        <div
          className="flex-1 px-4 flex justify-between items-center"

        >
          <div className="flex items-center h-16 flex-shrink-0 px-4 ">
            <img
              onClick={() => home()}
              className="w-auto hover:cursor-pointer"
              src={logo} alt="" />
          </div>
          <div className="flex-1 flex ml-8">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <input
                className="searchbar"
                type="search"
                name="search"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4 items-center">
                {TOP_MENU.map((top_menu: any) =>
                  <a
                    href="#"
                    className="hdr-link"
                  >
                    {top_menu.name}
                  </a>
                )}
                <label
                  htmlFor="checked-toggle"
                  className="inline-flex relative cursor-pointer"
                >
                  <input
                    onClick={() => changeMode()}
                    type="checkbox"
                    defaultValue=""
                    id="checked-toggle"
                    className="sr-only peer"

                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                </label>

                <a
                  href="#"
                  className="text-gray-300 bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium ml-3 mr-3"
                >
                  Create
                </a>
              </div>
            </div>
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img onClick={() => navigate("/profile")}
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                {/* Active: "bg-gray-100", Not Active: "" */}
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
