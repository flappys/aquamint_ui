import { getInfuraURL } from "../../../utils/getIPFSURL";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useHelper from "../../helper/helper";
import { AUCTION_DETAILS } from "../../constants/api_endpoints";
import LineChart from "../charts/LineChart";
import Bids from "./Bids";

function Details() {
  const { makeRequests } = useHelper();
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState<any>({});
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await makeRequests(AUCTION_DETAILS(params.id));
    setData(data.data);
    console.log(data.data.meta);
  };
  useEffect(() => {
    console.log(Object.values(data));
  }, [data]);

  const bids = [
    { price: "2.52 ETH", usd: "22", from: "ram" },
    { price: "3.52 ETH", usd: "32", from: "sam" },
    { price: "5.52 ETH", usd: "52", from: "test" },
    { price: "6.52 ETH", usd: "62", from: "john" },
    { price: "7.52 ETH", usd: "62", from: "kevin" },
  ];

  const chart_data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [33, 53, 85, 41, 44, 65],
  };

  const card_details = {
    title : "Bids"
}
  return (
    <>
      {Object.values(data).length != 0 && (
        <>
          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-20 lg:mx-32 md:mx-32 relative sm:flex-col xs:flex-col z-[-1]">
            {/* <div className="grid grid-flow-col m-3 mt-20 mx-32 relative z-[-1] gap-10"> */}
            {/* <img
              src={getInfuraURL(data?.meta?.thumbnail)}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="sm:w-auto lg:w-[50%] md:w-[50%] object-center object-cover z-1000 rounded-lg"
            /> */}

            <div className="sm:w-auto lg:w-[50%] md:w-[50%] z-1000 rounded-lg">
                  <img
                    src={getInfuraURL(data?.meta?.thumbnail)}
                    alt="img"
                    className="w-[100%] h-[50rem] rounded-lg"
                  />
                  </div>
            <div className="sm:w-auto lg:w-[50%] md:w-[50%]">
              <h2 className="font-Montserrat text-[24px] font-extrabold">
                {data?.meta?.name}
              </h2>
              <div className="h-2"></div>
              <p className="font-Montserrat text-[16px] font-extralight">
                Author{" "}
                <span className="font-extrabold">{data?.owner?.name}</span>
              </p>
              <div className="h-4"></div>
              <p className="font-light">{data?.meta?.description}</p>

              {location.pathname.includes("auction") && (
                <div className="py-12">
                  <div className="mx-auto">
                    <dl className="mt-5 text-center grid grid-cols-1 rounded-2xl border overflow-hidden shadow md:grid-cols-3 items-center">
                      <div className="md:px-4 md:py-5 sm:p-6">
                        <dt className="font-semibold text-center text-2xl">
                          <div>
                            <p className="text-center text-xl">
                              Auction Ends In
                            </p>
                          </div>
                        </dt>
                        <dt className="text-base font-normal text-gray-400">
                          {data?.auction?.deadline}
                        </dt>
                      </div>
                      <div>
                        <p className="text-3xl">/</p>
                      </div>
                      <div className="md:px-4 md:py-5 sm:p-6">
                        <dt className="font-semibold text-center text-xl">
                          <div>
                            <p className="text-center text-xl">Last Bid</p>
                          </div>
                        </dt>
                        <dt className="text-base font-normal text-gray-400">
                          {data?.auction?.highestBid} ETH
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              {location.pathname.includes("sales") && (
                <div className="py-12">
                  <div className="mx-auto">
                    <dl className="mt-5 text-center grid grid-cols-1 rounded-2xl border overflow-hidden shadow md:grid-cols-3 items-center">
                      <div className="md:px-4 md:py-5 sm:p-6">
                        <dt className="font-semibold text-center text-2xl">
                          <div>
                            <p className="text-center text-xl">Collection</p>
                          </div>
                        </dt>
                        <dt className="text-base font-normal text-gray-400">
                          {data?.collection?.name}
                        </dt>
                      </div>
                      <div>
                        <p className="text-3xl">/</p>
                      </div>
                      <div className="md:px-4 md:py-5 sm:p-6">
                        <dt className="font-semibold text-center text-xl">
                          <div>
                            <p className="text-center text-xl">Price</p>
                          </div>
                        </dt>
                        <dt className="text-base font-normal text-gray-400">
                          {data?.sale?.price} ETH
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              {location.pathname.includes("auction") && (
                <div className="border dark:border-blue-500 flex items-center justify-between rounded-lg text-gray-400">
                  <h4 className="px-5">
                    {" "}
                    Minimum bid {data?.auction?.minBid} ETH
                  </h4>
                  <button className="cursor-pointer w-[50%] border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-5 rounded-lg text-center text-white">
                    Place Bid
                  </button>
                </div>
              )}

              {location.pathname.includes("sales") && (
                <div className="flex gap-10">
                  <button className="cursor-pointer w-[50%] border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-2 py-5 rounded-lg text-center text-white">
                    Buy for {data?.sale?.price} ETH
                  </button>
                  <button className="cursor-pointer w-[50%] border-blue-600 border  px-2 py-5 rounded-lg text-center text-white">
                    Make an Offer
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* <div className="py-5 container m-auto mt-20 flex flex-row gap-20"> */}
          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-20 lg:mx-32 md:mx-32 xs:flex-col relative sm:flex-col z-[-1]">
            <Bids className="w-1/2 " bids={bids} />
            <LineChart className="w-1/2" chart_data={chart_data} />
          </div>
        </>
      )}
    </>
  );
}

export default Details;
