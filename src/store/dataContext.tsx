import { createContext, useState } from "react";

interface Props {
    children: React.ReactNode
}

const defaultState = {
    error: {
        message: "not being called",
        code: 800
    },
    setError: (error: object) => {
    },
    toggleFlag: false,
    location:"",
    setLocation: (location: string) => {
    },
    setToggleFlag: (error: boolean) => {
    },
    hover:false,
    setHover:(hover:boolean)=>{

    },
    showSideMenu:false,
    setshowSideMenu:(sidemenu:boolean)=>{

    },
    routeData:{},
    setRouteData:(data:any)=>{

    }
}
export const DataContext = createContext(defaultState);
export const DataProvider = ({ children }: Props) => {
    const [error, setError] = useState<any>({
        message: "not being called",
        code: 800
    });
    const [toggleFlag, setToggleFlag] = useState(false)
    const [showSideMenu, setshowSideMenu] = useState(false)
    const [hover,setHover]=useState(false)
    const [location,setLocation]=useState<any>("")
    const [routeData,setRouteData]=useState<any>()
    return (
        <DataContext.Provider value={{
             error, 
             setError, 
             toggleFlag, 
             location,setLocation,
             setToggleFlag,
             hover,
             routeData,
             setRouteData,
             setHover,
             showSideMenu,
             setshowSideMenu
        
        
        }}>
            {children}
        </DataContext.Provider>
    );
};