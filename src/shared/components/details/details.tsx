import { getInfuraURL } from "../../../utils/getIPFSURL";
import React, { useEffect, useState } from "react";
import useHelper from "../../helper/helper";
import { AUCTION_DETAILS } from "../../constants/api_endpoints";
import LineChart from "../charts/LineChart";
import Bids from "./Bids";
import { BsChevronDown, BsClock, BsHeart, BsChevronUp } from "react-icons/bs";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { COLLECTION_PARAMS } from "../../constants/api_data";
import { AUCTIONS, COLLECTION } from "../../constants/api_endpoints";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

function Details() {
  const { makeRequests } = useHelper();
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState<any>({});
  const [moreData, setMoreData] = useState<any>([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [showDateTime, setShowDateTime] = React.useState(false);
  
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await makeRequests(AUCTION_DETAILS(params.id));
    setData(data.data);
    COLLECTION_PARAMS.limit = 4;
    COLLECTION_PARAMS.startFrom = 0;
    const response = await makeRequests(
      COLLECTION(COLLECTION_PARAMS, data.data?.collection?.id)
    );
    setMoreData(response.data.items);
  };
  useEffect(() => {
    console.log(Object.values(data));
  }, [data]);

  const bids = [
    { price: "2.52 ETH", usd: "22", from: "ram" },
    { price: "3.52 ETH", usd: "32", from: "sam" },
    { price: "5.52 ETH", usd: "52", from: "test" },
    { price: "6.52 ETH", usd: "62", from: "john" },
  ];

  const chart_data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [33, 53, 85, 41, 44, 65],
  };

  const card_details = {
    title : "Bids"
}


const nft_details = [
  { label: "Contract Address", value: "021616516531" },
  { label: "Token ID", value: "321654689" },
  { label: "Token Standard", value: "ERC-420" },
  { label: "Chain", value: "Etherium" },
  { label: "Last Updated", value: "3 Days ago" },
  { label: "Creator’s Earning", value: "7.5%" },
];

const nft_details_table = [
  {
    event: "Transfer",
    price: "$293.01",
    from: "Marjorie",
    to: "Esther Howard",
    date: "May 6, 2012",
  },
  {
    event: "Transfer",
    price: "$293.01",
    from: "Kathryn Murphy",
    to: "Courtney",
    date: "December 2, 2018",
  },
  {
    event: "Sale",
    price: "$293.01",
    from: "Courtney",
    to: "Esther Howard",
    date: "February 11, 2014",
  },
  {
    event: "Transfer",
    price: "$293.01",
    from: "Marjorie",
    to: "Kathryn Murphy",
    date: "May 20, 2015",
  },
  {
    event: "Sale",
    price: "$293.01",
    from: "Courtney",
    to: "Esther Howard",
    date: "May 6, 2012",
  },
];



const gotoRoute = () => {
  navigate(`/collection/${data?.collection?.id}`);
};

const showDT = (e:any) => {
  if(e.currentTarget.value == 'custom'){
    setShowDateTime(true);
  } else {
    setShowDateTime(false);
  }
}

  return (
    <>

<section className="text-white body-font overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="flex">
            <div className="ml-20 md:w-1/2 flex flex-col items-start">
              {Object.values(data).length != 0 && (
                <div className="aspect-w-1 aspect-h-1 w-[100%] z-[-1]">
                  <img
                    alt="ecommerce"
                    // className="w-full sm:h-auto md:h-[25rem] object-center  rounded"
                    // className="object-center h-48 w-96 rounded" max-h-[30rem] max-w-[30rem]
                    className="object-center rounded"
                    src={getInfuraURL(data?.meta?.image)}
                  />
                </div>
              )}

              <div className={`w-[100%] mt-5 overflow-hidden`}>
                <div
                  className={`overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
                >
                  <div className="px-4 py-5 sm:px-6 border-b">
                    <h3 className="text-lg font-medium leading-6 ">
                      Description
                    </h3>
                  </div>
                  <p className="px-4 py-5">{data?.collection?.description}</p>
                </div>
              </div>

              <div
                className={`w-[100%] mt-5 overflow-hidden border shadow rounded-lg `}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">Properties</h3>
                </div>
                <div className="px-4 py-5">
                  <div className="grid overflow-hidden grid-cols-4 grid-rows-2 gap-2">
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                    <div className="box border rounded-lg py-2 text-center">
                      <p className="text-blue-500 font-normal">Bids</p>
                      <p>No</p>
                      <p className="font-normal text-gray-400 text-sm">
                        77% have this trait
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`mt-5 overflow-hidden border shadow sm:rounded-lg w-[100%]`}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">
                    {data?.meta?.name} by {data?.creator?.name}
                  </h3>
                </div>
                <p className="px-8 py-5">{data?.collection?.description}</p>
              </div>

              <div
                className={`mt-5 overflow-hidden border shadow sm:rounded-lg sm:w-[100%]`}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">Details</h3>
                </div>

                <div className="py-4">
                  {nft_details.map((data: any, index: any) => (
                    <div key={index} className="px-8 py-2 flex justify-between">
                      <p className="text-left">{data.label}</p>
                      <p className="text-left">{data.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 md:w-[60%] flex flex-col items-start">
              <h2 className="font-Montserrat text-[24px] font-extrabold">
                {data?.meta?.name}
              </h2>
              <div className="h-2"></div>
              <p className="font-Montserrat text-[16px] font-extralight">
                Author{" "}
                <span className="font-extrabold">{data?.owner?.name}</span>
              </p>
              <div className="pt-4 w-[100%]">
                <div className="mx-auto">
                  <dl className="mt-5 text-center grid grid-cols-1 rounded-2xl border overflow-hidden shadow md:grid-cols-3 items-center">
                    <div className="md:px-4 md:py-5 sm:p-6">
                      <dt className="font-semibold text-center text-2xl">
                        <div>
                          <p className="text-center text-xl">Collection</p>
                        </div>
                      </dt>
                      <dt
                        onClick={() => gotoRoute()}
                        className="text-blue-500 text-base hover:cursor-pointer font-normal whitespace-nowrap"
                      >
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

              <div className="py-8 w-[100%]">
                <div className="mx-auto">
                  <dl className="text-center grid grid-cols-1 rounded-2xl border overflow-hidden shadow md:grid-cols-3 items-center">
                    <div className="md:px-4 md:py-5 sm:p-6">
                      <dt className="font-semibold text-center text-2xl">
                        <div>
                          <p className="text-center text-xl whitespace-nowrap">Auction Ends In</p>
                        </div>
                      </dt>
                      <dt className="text-base hover:cursor-pointer font-normal whitespace-nowrap text-gray-400">
                      {data?.auction?.deadline}
                      </dt>
                    </div>
                    <div>
                      <p className="text-3xl">/</p>
                    </div>
                    <div className="md:px-4 md:py-5 sm:p-6">
                      <dt className="font-semibold text-center text-xl">
                        <div>
                          <p className="text-center text-xl whitespace-nowrap">Last Bid</p>
                        </div>
                      </dt>
                      <dt className="text-base font-normal text-gray-400 whitespace-nowrap">
                      {data?.auction?.highestBid} ETH
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="w-[100%] border dark:border-blue-500 flex items-center justify-between rounded-lg text-gray-400">
                  <h4 className="px-5 w-[100%]">
                    {" "}
                    Minimum bid {data?.auction?.minBid} ETH
                  </h4>
                  <button className="cursor-pointer w-[50%] border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-5 rounded-lg text-center text-white">
                    Place Bid
                  </button>
                </div>
                
              <div className="py-8 flex justify-center gap-10 w-[100%]">
                <button className="w-[50%] hover:cursor-pointer border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 whitespace-nowrap p-4 rounded-lg text-center text-white">
                  Buy for {data?.sale?.price} ETH
                </button>
                <button onClick={() => setShowModal(true)} className="w-[50%] hover:cursor-pointer border-blue-600 text-blue-600 border whitespace-nowrap p-4 rounded-lg text-center ">
                  Make an Offer
                </button>

                {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
             <div className="relative bg-[#0e0e0e] rounded-lg shadow w-96">
    <button
      type="button"
      className="absolute top-3 right-2.5 text-gray-400 bg-transparent border-2 border-gray-100 rounded-full text-sm p-1.5 ml-auto inline-flex items-center bg-gray-100"
      data-modal-toggle="authentication-modal"
      onClick={() => setShowModal(false)} 
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
    <div className="py-6 px-6 lg:px-8">
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Make your offer
      </h3>
      <span className="text-sm">You’re making offer for {data?.meta?.name}</span>
      <form className="space-y-6 py-5" action="#">
        <div>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter amount
          </label>
          <input
            type="number"
            name="amount"
            className="bg-[#0e0e0e] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter amount"
            
          />
        </div>
        <div>
          <label
            htmlFor="Duration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Duration
          </label>
          <div className="flex gap-3">
          {showDateTime == false ? 
            <input
                type="text"
                name="Duration"
                className=" bg-[#0e0e0e] w-[60%] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                
              /> 
              :
              <Datetime className="text-white w-[60%]" />
          }
          <select onChange={(e)=> showDT(e)} className="bg-[#0e0e0e] w-[35%] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1  ml-8 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name="" id="">
            <option value="hours">Hours</option>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="custom">Custom</option>
          </select>
          </div>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-300 text-sm">Wallet Balance</p>
          <p>5.226165 ETH</p>
        </div>
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         Make an offer
        </button>

        <button
          type="button"
          onClick={() => setShowModal(false)} 
          className="w-full border-blue-600 text-blue-600 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Cancel
        </button>
        
      </form>
    </div>
  </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
              </div>
              <div className="py-5 w-[100%]">
                <Bids w_percentage={"100"} bids={bids} />
              </div>
              <LineChart w_percentage={"100"} chart_data={chart_data} />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div
              className={`mt-5 overflow-hidden border ml-20 mr-4 shadow sm:rounded-lg sm:w-[100%]`}
            >
              <div className="px-4 py-5 sm:px-6 border-b">
                <h3 className="text-lg font-medium leading-6 ">Details</h3>
              </div>

              <div className="px-4 py-5">
                <p className="border rounded-lg p-2">Filter</p>
              </div>

              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center">
                        <thead className="border-t">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-300  py-4"
                            >
                              Event
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-300  py-4"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-300  py-4"
                            >
                              From
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-300  py-4"
                            >
                              To
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-300  py-4"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {nft_details_table.map((data: any, index: any) => (
                            <tr className="border-t" key={index}>
                              <td className="text-sm text-white font-light  py-4 whitespace-nowrap">
                                {data.event}
                              </td>
                              <td className="text-sm text-white font-light  py-4 whitespace-nowrap">
                                {data.price}
                              </td>
                              <td className="text-sm text-white font-light  py-4 whitespace-nowrap">
                                {data.from}
                              </td>
                              <td className="text-sm text-white font-light  py-4 whitespace-nowrap">
                                {data.to}
                              </td>
                              <td className="text-sm text-white font-light  py-4 whitespace-nowrap">
                                {data.date}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-5">
            <div
              className={`mt-5 overflow-hidden border ml-20 mr-4  shadow sm:rounded-lg sm:w-[100%]`}
            >
              <div className={`overflow-hidden`}>
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">
                    More from this collection
                  </h3>
                </div>

                <div className="flex flex-col">
                <div className="flex justify-center mx-5">
                          <div className="mt-8 grid md:grid-flow-col md:grid-rows-1 sm:grid-rows-2 gap-10 z-[-1]">
                            {moreData?.map((item: any, index: any) => (
                              <div key={index}>
                                <div className="relative border rounded-lg cursor-pointer">
                                  <div className="relative aspect-w-1 aspect-h-1 w-60 rounded-lg overflow-hidden">
                                    {/* <div className="relative aspect-w-1 aspect-h-1 w-full h-72 rounded-lg overflow-hidden"> */}
                                    <img
                                      src={getInfuraURL(
                                        item.meta.thumbnail || item.meta.media
                                      )}
                                      alt="img."
                                      // className="w-[20rem] h-full object-scale-down"
                                    />
                                  </div>
                                  <div className="mx-2 py-2">
                                    <p className="mt-1 text-sm text-white">
                                      {item.meta.name}
                                    </p>
                                    <div className="flex justify-between border-b py-1">
                                      <p className="mt-1 text-sm text-gray-500">
                                        Price
                                      </p>
                                      <p className="mt-1 text-sm text-white">
                                        {item.marketFee}
                                      </p>
                                    </div>
                                    <div className="flex justify-between py-1">
                                      <p className="mt-1 text-sm text-gray-500">
                                        Author
                                      </p>
                                      <p className="mt-1 text-sm text-white">
                                        {item.creator.name}
                                      </p>
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
                                    {/* <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        /> */}
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
                        <div className="flex justify-center mx-auto py-5">
                          <h4
                            onClick={() => gotoRoute()}
                            className="border-blue-600 border cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-2 py-1 rounded-lg font-normal text-center text-white"
                          >
                            View Collection
                          </h4>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* <section className="text-white body-font overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap mx-5">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              {Object.values(data).length != 0 && (
                <img
                  alt="ecommerce"
                  className="w-full sm:h-auto md:h-[25rem] object-center rounded"
                  src={getInfuraURL(data?.meta?.image)}
                />
              )}

              <div className="py-5 w-[100%]">
                <div className={`overflow-hidden border shadow sm:rounded-lg md:w-[100%] sm:w-auto`}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6">{location.pathname.includes("auction")?"Bids":"Offers"}</h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="px-4 py-5 grid grid-cols-3 gap-4 px-6 text-center">
                    <dt className="text-xs text-gray-500">Price</dt>
                    <dt className="text-xs text-gray-500">USD Price</dt>
                    <dt className="text-xs text-gray-500">Price</dt>
                  </div>
                  {bids?.map((val: any, index: any) => (
                    <div
                      className={` ${
                        index != 0 && "border-t"
                      } px-4 py-4  grid grid-cols-3 gap-4 px-6 text-center`}
                    >
                      <dt className="text-sm font-medium text-white">
                        {val.price}
                      </dt>
                      <dt className="text-sm font-medium text-gray-500">
                        {val.usd}
                      </dt>
                      <dt className="text-sm font-medium text-white">
                        {val.from}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
              </div>

            </div>

            <div className="p-12 md:w-1/2 flex flex-col items-start">
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

              <div className="py-8 w-[100%]">
                <div className="mx-auto">
                  <dl className="mt-5 text-center grid grid-cols-1 rounded-2xl border overflow-hidden shadow md:grid-cols-3 items-center">
                    <div className="md:px-4 md:py-5 sm:p-6">
                      <dt className="font-semibold text-center text-2xl">
                        <div>
                          <p className="text-center text-xl whitespace-nowrap">Auction Ends In</p>
                        </div>
                      </dt>
                      <dt className="text-base hover:cursor-pointer font-normal whitespace-nowrap text-gray-400">
                      {data?.auction?.deadline}
                      </dt>
                    </div>
                    <div>
                      <p className="text-3xl">/</p>
                    </div>
                    <div className="md:px-4 md:py-5 sm:p-6">
                      <dt className="font-semibold text-center text-xl">
                        <div>
                          <p className="text-center text-xl whitespace-nowrap">Last Bid</p>
                        </div>
                      </dt>
                      <dt className="text-base font-normal text-gray-400 whitespace-nowrap">
                      {data?.auction?.highestBid} ETH
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="w-[100%] border dark:border-blue-500 flex items-center justify-between rounded-lg text-gray-400">
                  <h4 className="px-5 w-[100%]">
                    {" "}
                    Minimum bid {data?.auction?.minBid} ETH
                  </h4>
                  <button className="cursor-pointer w-[50%] border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-5 rounded-lg text-center text-white">
                    Place Bid
                  </button>
                </div>

              <div className="py-16 w-[100%]">
              <LineChart className="py-6" w_percentage={"100"} chart_data={chart_data} />
              </div>
            </div>
          </div>
         

        </div>
      </section> */}
      {/* {Object.values(data).length != 0 && (
        <>
          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-20 lg:mx-32 md:mx-32 relative sm:flex-col xs:flex-col z-[-1]">
            <div className="sm:w-auto lg:w-[50%] md:w-[50%] z-1000 rounded-lg">
                  <img
                    src={getInfuraURL(data?.meta?.thumbnail)}
                    alt="img"
                    className="w-[100%] h-[33rem] rounded-lg"
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
                            <p className="text-center text-xl whitespace-nowrap">
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

          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-20 lg:mx-32 md:mx-32 xs:flex-col relative sm:flex-col z-[-1]">
            <Bids className="w-1/2 " bids={bids} />
            <LineChart className="w-1/2" chart_data={chart_data} />
          </div>
        </>
      )} */}
    </>
  );
}

export default Details;
