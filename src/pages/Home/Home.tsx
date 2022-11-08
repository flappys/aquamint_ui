import React,{useContext,useEffect} from "react";
import HomeContent from "./HomeContent";
import { useLocation } from 'react-router-dom';
import { DataContext } from "../../store/dataContext";
function Home() {
  const {location,setLocation}=useContext(DataContext)
    const locations=useLocation()
    useEffect(()=>{
        setLocation(locations.pathname)
    },[])
  return (
    <>
      <div>
       
        <div className="md:pl-[17rem] flex ">
          <HomeContent />
        </div>
      </div>
    </>
  );
}

export default Home;
