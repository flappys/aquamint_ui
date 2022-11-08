import React, { useEffect, useState } from "react";
import tower1 from "../../images/home/tower1.svg";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { BsClock, BsHeart } from "react-icons/bs";
import { FEATURED, AUCTIONS, GET_SALES } from "../../shared/constants/api_endpoints";
import { SALES_DATA, AUCTIONS_PARAMS } from "../../shared/constants/api_data";
import useHelper from "../../shared/helper/helper";
import { getInfuraURL } from "../../utils/getIPFSURL";
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "../../shared/components/skelton_loader/skeleton_loader";
import CardLoader from "../../shared/components/skelton_loader/card_loader";
import GridContent from "../../shared/components/gridcontent/gridcontent";
import { COLLECTIONS, SKELETON_COUNT } from "../../shared/constants/static";
import FeaturedHome from "../../shared/components/Featured/Featured";
function HomeContent() {
  const { makeRequests } = useHelper();
  const [featured, setFeatured] = useState<any>([]);
  const [auctions, setAuctions] = useState<any>([]);
  const [hideFeatured, setHideFeatured] = useState(false)

  const [hideAuction, setHideAuction] = useState(false)
  const [sales, setSales] = useState([])
  useEffect(() => {
    getFeatured();
    getAuctions();
    getSales()
  }, []);


  const getSales = async () => {
    const data = await makeRequests(GET_SALES(null));
    setSales(data.data.items)
  }

  const getFeatured = async () => {
    setHideFeatured(true)
    const data = await makeRequests(FEATURED);
    setHideFeatured(false)
    setFeatured(data.data.featured);
  };

  const getAuctions = async () => {
    AUCTIONS_PARAMS.limit = 4;
    AUCTIONS_PARAMS.startFrom = 0;
    setHideAuction(true)
    const response = await makeRequests(AUCTIONS(AUCTIONS_PARAMS));
    setAuctions(response.data.items);
    setHideAuction(false)
  };



  return (
    <>
      <main className=" border-gray-700 border p-3 rounded-lg">
        <div className="">
        
          
            <FeaturedHome data={featured}></FeaturedHome>

            <div className="mt-10">
            <GridContent detail_route={"/auction"} route={"/showAll/2"} title={"Running Auctions"} skeleton_card={SKELETON_COUNT} api_data={auctions}></GridContent>
            </div>
           

            <GridContent detail_route={"/sales"} route={"/showAll/1"} title={"Sales"} skeleton_card={SKELETON_COUNT} api_data={sales}></GridContent>


            <div className="flex justify-between mt-10">
              <h1>Top Collections</h1>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-600 rounded-lg text-sm px-5 py-1 mr-2 mb-2"
                >
                  1 Day
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-blue-600 rounded-lg text-sm px-5 py-1 mr-2 mb-2"
                >
                  7 Days
                </button>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-blue-600 rounded-lg text-sm px-5 py-1 mr-2 mb-2"
                >
                  30 Days
                </button>
              </div>
            </div>

            <div className="relative bottom-18">
              <div className="grid grid-cols-5 md:grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
             
                    {COLLECTIONS.map((collection)=><div className="flex space-x-4 lg:space-x-6 mt-4">
                      <span>{collection.count}</span>
                      <img
                        className="w-16 h-16 rounded-lg lg:w-20 lg:h-20"
                        src={tower1}
                        alt=""
                      />
                      <div className="flex flex-col-reverse">
                        <h3>{collection.name}</h3>
                        <span className="text-sm">{collection.price}</span>
                      </div>
                    </div>)}
                 
                  
            
              </div>
            </div>
          </div>
        
      </main>
    </>
  );
}

export default HomeContent;
