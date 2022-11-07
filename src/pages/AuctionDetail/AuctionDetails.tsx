
import Details from "../../shared/components/details/details";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { DataContext } from "../../store/dataContext";
function AuctionDetails() {

    const {location,setLocation}=useContext(DataContext)
    const locations=useLocation()
    useEffect(()=>{
        setLocation(locations.pathname)
    },[])
    return <Details></Details>
}

export default AuctionDetails;
