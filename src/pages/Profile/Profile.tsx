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

function Profile() {
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
    { name: "All", active: true },
    { name: "Trending", active: false },
    { name: "Collectibles", active: false },
    { name: "Domain Names", active: false },
    { name: "Music", active: false },
    { name: "Photography", active: false },
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

  return (
    <>
    <div className="ml-10 overflow-y-hidden w-[100%]">
    <img src={profile} className="w-auto mx-auto"></img>
          <div className="grid place-items-center">
            <img
              className="text-center relative bottom-[4rem] w-28"
              src={circle}
            ></img>
             <p className="text-[32px] relative bottom-10">{data[0]?.collection.name}</p>
            </div>
            <div className="grid place-items-center">
            <p className="font-light">Created By {data[0]?.owner.name}</p>
          </div>

          <div className="mx-auto w-2/5">
            <dl className="mt-5 text-center grid grid-cols-1 rounded-2xl border overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
              <div className="px-4 py-5 sm:p-6">
                <dt className="font-semibold text-center text-2xl">
                  <div>
                    <p className="text-center text-2xl"> 8.9k</p>
                  </div>
                </dt>
                <dt className="text-base font-normal text-gray-400">Items</dt>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <dt className="font-semibold text-center text-2xl">
                  <div>
                    <p className="text-center text-2xl"> 8.9k</p>
                  </div>
                </dt>
                <dt className="text-base font-normal text-gray-400">Owners</dt>
              </div>
              <div className="px-4 py-5 sm:p-6  whitespace-nowrap">
                <dt className="font-semibold text-center text-2xl">
                  <div>
                    <p className="text-center text-2xl"> 8.9k</p>
                  </div>
                </dt>
                <dt className="text-base font-normal text-gray-400">
                  Floor Price
                </dt>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <dt className="font-semibold text-center text-2xl">
                  <div>
                    <p className="text-center text-2xl"> 8.9k</p>
                  </div>
                </dt>
                <dt className="text-base font-normal text-gray-400">Volume</dt>
              </div>
            </dl>
          </div>

          <div className="grid place-items-center">
            <p className="font-light py-10 text-xl break-all">
             {data[0]?.collection.description}
            </p>
          </div>

            </div>

    <section className="text-white body-font overflow-hidden">
        <div className="container px-5 mx-auto">
      
        <div className="flex gap-5">
            <div className="ml-20 md:w-[25%] flex-col">

            <div className="mt-5 flex justify-between items-center">
              <label className=" text-2xl font-semibold text-white">Filters</label>
              <button
                type="button"
                className=" flex items-center whitespace-nowrap border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <RiDeleteBin5Fill className="mr-2" />
                Reset
              </button>
            </div>


 <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Status</h4>
                    <BsChevronUp
                      onClick={() => accordionToggle(statsAcc, setStatsAcc)}
                      className={`cursor-pointer font-semibold ${
                        statsAcc == false ? "-rotate-180" : ""
                      }  text-white`}
                    />
                  </div>
                  {statsAcc && (
                    <div className="py-2">
                      <div className="grid md:grid-flow-col lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2">
                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          Buy Now
                        </button>

                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          On Auction
                        </button>
                      </div>

                      <div className="grid md:grid-flow-col lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2">
                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          Accept Offer
                        </button>

                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          New
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Price</h4>
                    <BsChevronUp
                      onClick={() => accordionToggle(priceAcc, setPriceAcc)}
                      className={`cursor-pointer font-semibold ${
                        priceAcc == false ? "-rotate-180" : ""
                      }  text-white`}
                    />
                  </div>
                  {priceAcc && (
                    <div className="py-2 flex flex-col gap-4">
                    {/* <BarChart /> */}
                      {/* <input
                        type="range"
                        onChange={(e) => setRangeVal(e.target.value)}
                        value={rangeVal}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      /> */}
                      <div className="flex items-center gap-2">

<input
      type="number"
      min={0}
      className=" form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Min"
    /> 
<p>to</p>
<input
      type="number"
      min={0}
      className=" form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Max"
    /> 
                      </div>
                      <h4 className="border-blue-600 border cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-2 py-1 rounded-lg text-center text-white">
                            Apply
                          </h4>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Primary colors</h4>
                    <BsChevronUp className="cursor-pointer font-semibold text-white" />
                  </div>
                </div>
              </div>

              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Background</h4>
                    <BsChevronUp className="cursor-pointer font-semibold text-white" />
                  </div>
                </div>
              </div>

              </div>

            <div className="p-5 md:w-[75%] flex flex-col items-start">
            <div className="">
            <div className="flex items-baseline justify-between">
              <div className="grid gap-3 md:grid-flow-col lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2">
                {tabs.map((tabs,index) => (
                  <button
                  key={index}
                    type="button"
                    className={`border ${index == 0 ? 'bg-blue-700 border-blue-700' : ''} border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
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
                Sort By
              </button>
            </div>
            <div className="flex">
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


      {/* <div className="mx-auto px-4 sm:px-6 md:px-8 ml-10">
        

        <div className="flex flex-row gap-10 mx-auto ml-10">
          <div className="w-1/5 md:block sm:hidden">
            <div className="flex justify-between mt-4">
              <div className="">
                <p className="text-[23px]">Filters</p>
              </div>
              <div className="relative right-10 top-2">
                <div>Reset</div>
              </div>
            </div>

            <div className="py-10">
              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Status</h4>
                    <BsChevronUp
                      onClick={() => accordionToggle(statsAcc, setStatsAcc)}
                      className={`cursor-pointer font-semibold ${
                        statsAcc == false ? "-rotate-180" : ""
                      }  text-white`}
                    />
                  </div>
                  {statsAcc && (
                    <div className="py-2">
                      <div className="flex gap-5 py-2">
                        
                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          Buy Now
                        </button>

                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          On Auction
                        </button>
                        
                      </div>

                      <div className="flex gap-5 py-2">
                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          Accept Offer
                        </button>

                        <button
                          type="button"
                          className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          New
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Price</h4>
                    <BsChevronUp
                      onClick={() => accordionToggle(priceAcc, setPriceAcc)}
                      className={`cursor-pointer font-semibold ${
                        priceAcc == false ? "-rotate-180" : ""
                      }  text-white`}
                    />
                  </div>
                  {priceAcc && (
                    <div className="py-2">
                      <input
                        type="range"
                        onChange={(e) => setRangeVal(e.target.value)}
                        value={rangeVal}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Primary colors</h4>
                    <BsChevronUp className="cursor-pointer font-semibold text-white" />
                  </div>
                </div>
              </div>

              <div className="text-white space-y-4 py-2">
                <div className="w-full rounded-lg ring-1 ring-gray-400 p-5">
                  <div className="flex justify-between items-center">
                    <h4>Background</h4>
                    <BsChevronUp className="cursor-pointer font-semibold text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="flex items-baseline justify-between">
              <div className="flex gap-3 mt-5">
                {tabs.map((tabs) => (
                  <button
                    type="button"
                    className=" border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    {tabs.name}
                  </button>
                  // <div
                  //   className={
                  //     tabs.active
                  //       ? "bg-blue-500 h-[2.5rem] min-w-[9rem] text-center pt-2 border rounded-2xl font-Montserrat cursor-pointer"
                  //       : "h-[2.5rem] min-w-[9rem] text-center pt-2 border rounded-2xl font-Montserrat cursor-pointer   "
                  //   }
                  // >

                  // </div>
                ))}
              </div>
              <button
                type="button"
                className=" flex items-center whitespace-nowrap border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <HiOutlineArrowsUpDown className="mr-2" />
                Sort By
              </button>
            </div>
            <div className="flex">
              <div className="mt-8 grid md:grid-flow-col gap-4">
                {" "}
                {data.map((item: any, index: any) => (
                  <div key={index}>
                    <div className="relative border rounded-lg cursor-pointer">
                      <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                          src={getInfuraURL(
                            item.meta.thumbnail || item.meta.media
                          )}
                          alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                          className="w-[20rem] h-full object-center object-cover"
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

                        <div className="py-1">
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
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
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


      </div> */}

      </div>
      </section>
    </>
  );
}

export default Profile;
