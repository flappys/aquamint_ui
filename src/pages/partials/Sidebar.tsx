import React, { useEffect, useState } from "react";
import { ALLOWED_ROUTE_PATH_FOR_SIDEMENU, SIDEMENU } from "../../shared/constants/static";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidemenus, setMenu] = useState(SIDEMENU)
  const gotoRoute = (route_name: any, index: number) => {

    sidemenus.map((menus) => {
      menus.active = false
    })
    sidemenus[index].active = true
    setMenu([...sidemenus])
    navigate(route_name)
  }



  useEffect(() => {


    let timer = setTimeout(() => {
      sidemenus.map((menus) => {
        menus.active = false;
        if (location.pathname == menus.route) {
          console.log(menus)
          console.log("here")
          menus.active = true
        }
      })
      setMenu([...sidemenus])
    }, 10);


  }, [location.pathname])






  return <div className="flex flex-col items-center m-auto w-[85%] mt-3">
         {sidemenus.map((menu,index)=><a onClick={()=>gotoRoute(menu.route,index)} className={menu.active?" bg-gray-700 flex items-center w-full h-12 px-3 mt-2 rounded-lg hover:bg-gray-700 hover:text-gray-300 pl-12":"flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:rounded-lg hover:text-gray-300 pl-12"} href="#">
            <img src={menu.imgSrc}></img>
           <span className="ml-2 text-[16px] font-medium">{menu.name}</span>
         </a>)}
        
       </div>

}

export default Sidebar;
