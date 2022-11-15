import profile from "../../images/profile.png";
import { DataContext } from "../../store/dataContext";
import React, { useContext, useEffect, useState } from "react";
import circle from "../../images/circle.png";
import { getInfuraURL } from "../../utils/getIPFSURL";
import {
  AUCTIONS_PARAMS,
  COLLECTION_PARAMS,
} from "../../shared/constants/api_data";
import { AUCTIONS, COLLECTION } from "../../shared/constants/api_endpoints";
import useHelper from "../../shared/helper/helper";
import { BsChevronDown, BsClock, BsHeart, BsChevronUp } from "react-icons/bs";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RiDeleteBin5Fill } from "react-icons/ri";
import BarChart from "../../shared/components/charts/BarChart";
import { FaUserFriends,FaRegEnvelope } from "react-icons/fa";
import { BsArrowUpRight,BsThreeDots } from "react-icons/bs";

function ProfileList() {
  const { location, setLocation } = useContext(DataContext);
  const locations = useLocation();
  const { makeRequests } = useHelper();
  const [data, setData] = useState<any>([]);
  const [statsAcc, setStatsAcc] = useState<any>(true);
  const [priceAcc, setPriceAcc] = useState<any>(true);
  const [rangeVal, setRangeVal] = useState<any>(50);
  const params = useParams();

  useEffect(() => {
    setLocation(locations.pathname);
    getAuctions();
  }, [locations.pathname]);

  const [tabs, setTabs] = useState([
    { name: "Listings", active: true },
    { name: "Purchase", active: false },
    { name: "Sales", active: false },
    { name: "Transfer", active: false },
    { name: "Burns", active: false },
    { name: "Bids", active: false },
    { name: "Likes", active: false },
    { name: "Followings", active: false },
  ]);

  const getAuctions = async () => {
    COLLECTION_PARAMS.limit = 4;
    COLLECTION_PARAMS.startFrom = 0;
    const response = await makeRequests(COLLECTION(COLLECTION_PARAMS,params?.id));
    setData(response.data.items);
  };

  const accordionToggle = (acc: any, accState: any) => {
    if (acc == true) {
      accState(false);
    } else {
      accState(true);
    }
  };

  const listData = [
    {name:"fish",by:"a123",time:"09/03/2022, 04:58"},
    {name:"Diane Lansdowne",by:"a123",time:"09/03/2022, 04:58"},
    {name:"Graham Griffiths ",by:"a123",time:"09/03/2022, 04:58"},
    {name:"Cvita Doleschall",by:"a123",time:"09/03/2022, 04:58"},
    {name:"Bairam Frootan",by:"a123",time:"09/03/2022, 04:58"},
  ];

  const tabs_list = [
    {name:"All"},
    {name:"On Sale"},
    {name:"Owned"},
    {name:"Created"},
    {name:"Collections"},
    {name:"Following"},
    {name:"Activity"},
  ];

  return (
    <>
    <div className="ml-5 overflow-y-hidden w-[100%]">
    <img src={profile} className="w-auto mx-auto"></img>
          <div className="grid place-items-center">
            <img
              className="text-center relative bottom-[4rem] w-28"
              src={circle}
            ></img>
            </div>
            <div>
              <p className="text-[32px] relative text-center">Martina Brito</p>
              <div className="flex justify-center">
              <p className="font-light text-center mx-2"><b>96</b> <span className="font-light text-base text-gray-500">followers </span></p>
              <p className="font-light text-center mx-2"><b>28</b> <span className="font-light text-base text-gray-500">following </span></p>
              <p className="font-light text-center mx-2"><b>36</b> <span className="font-light text-base text-gray-500">items </span></p>
            </div>
          </div>

          <div className="py-5">
              <div className="flex gap-5 justify-center">
              <button
                    type="button"
                    className="flex items-center gap-1 bg-blue-700 border-blue-700 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mb-2 "
                  >
                    <FaUserFriends />
                    Follow
                  </button>

                  <button
                    type="button"
                    className=" flex items-center gap-1 border-gray-300 border focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mb-2 "
                  >
                    <FaRegEnvelope />
                    Message
                  </button>

                  <button
                    type="button"
                    className=" flex items-center gap-1 border-gray-300 border rounded-full text-sm px-5 py-2.5 mb-2 "
                  >
                    <BsArrowUpRight />
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1 border-gray-300 border rounded-full text-sm px-5 py-2.5 mb-2 "
                  >
                    <BsThreeDots />
                  </button>
            </div>
          </div>  
          <div>
  <div className="hidden sm:block">
    <div className="border-b border-gray-200">
      <nav className="flex justify-center mx-72" aria-label="Tabs">
        {tabs_list.map((tabs,index) => (
       <a
       href="#"
       className={`${index == 3 ? ' text-white border-gray-300' : ''} whitespace-nowrap border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-48 py-4 px-1 text-center border-b-2 font-medium text-sm`}
     >
      {tabs.name}
        </a>
))}
      </nav>
    </div>
  </div>
</div>

           <div className="grid place-items-center">
            <p className="font-light py-10 text-xl break-all">
             {data[0]?.collection.description}
            </p>
          </div>

            </div>

    <section className="text-white body-font overflow-hidden">
        <div className="container px-5 mx-auto">
      
        <div className="flex gap-5 justify-center">
            <div className="p-5  flex flex-col items-start">
            <div className="">
            <div className="hidden sm:flex items-baseline gap-20 justify-between">
              <div className="grid gap-3 md:grid-flow-col lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2">
                {tabs.map((tabs,index) => (
                  <button
                  key={index}
                    type="button"
                    className={`border ${index == 3 ? 'bg-blue-700 border-blue-700' : ''} border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
                  >
                    {tabs.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className=" flex items-center whitespace-nowrap border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <HiOutlineArrowsUpDown className="mr-2" />
                Reset filters
              </button>
            </div>

            <div className="overflow-hidden  sm:rounded-md">
  <ul role="list">

  {listData.map((item: any, index: any) => (
    <li className="rounded-lg border border-gray-400 mt-4">
      <a href="#" className="block">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-20 rounded"
                src={circle}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="truncate text-sm font-medium text-white">
                {item.name}
                </p>
                <p className="mt-2 flex items-center text-sm text-white">
                  <span className="truncate">minted by {item.by}</span>
                </p>
                <p className="mt-2 flex items-center text-sm text-white">
                  <span className="truncate"> {item.time}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>...</p>
          </div>
        </div>
      </a>
    </li>
     ))}
  </ul>
</div>

              <div className="mt-2 grid md:grid-flow-col lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 gap-4">
                {" "}

              
                {data.map((item: any, index: any) => (
                  <div key={index}>
                    <div className="relative border rounded-lg cursor-pointer">
                          <div className="relative aspect-w-1 aspect-h-1 w-60 rounded-lg overflow-hidden">
                            <img
                              src={getInfuraURL(
                                item.meta.thumbnail || item.meta.media
                              )}
                              alt="img."
                            />
                          </div>
                      <div className="mx-2 py-2">
                        <p className="mt-1 text-sm text-white">
                          {item.meta.name}
                        </p>
                        <div className="flex justify-between border-b py-1">
                          <p className="mt-1 text-sm text-gray-500">Price</p>
                          <p className="mt-1 text-sm text-white">
                            {item.marketFee}
                          </p>
                        </div>
                        <div className="flex justify-between py-1">
                          <p className="mt-1 text-sm text-gray-500">Author</p>
                          <p className="mt-1 text-sm text-white">{item.creator.name}</p>
                        </div>

                        <div className="flex flex-col mx-5 py-2">
                          <h4 className="border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-2 py-1 rounded-lg text-center text-white">
                            Place Bid
                          </h4>
                          <h4 className="border-blue-600 border text-blue-600 px-2 mt-2 py-1 rounded-lg text-center whitespace-nowrap">
                            Buy NFT 2.03 ETH
                          </h4>
                        </div>
                      </div>
                      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black opacity-50"
                        />
                        <div className="absolute left-0 top-3 w-full">
                          <div className="flex justify-between">
                            <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300">
                              <span>
                                <BsClock />
                              </span>
                              <span className="ml-2">02:48:03</span>
                            </button>
                            <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300">
                              <span>
                                <BsHeart />
                              </span>
                              <span className="ml-2">116</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            



          </div>

            </div>
            </div>
      </div>
      </section>
    </>
  );
}

export default ProfileList;
