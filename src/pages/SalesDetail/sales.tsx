import Details from "../../shared/components/details/details";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/dataContext";
import { getInfuraURL } from "../../utils/getIPFSURL";
import { useLocation, useParams } from "react-router-dom";
import useHelper from "../../shared/helper/helper";
import { AUCTION_DETAILS } from "../../shared/constants/api_endpoints";
import Bids from "../../shared/components/details/Bids";
import LineChart from "../../shared/components/charts/LineChart";

function SalesDetails() {
  const { location, setLocation } = useContext(DataContext);
  const locations = useLocation();
  useEffect(() => {
    setLocation(locations.pathname);
  }, []);
  // return <Details></Details>
  const { makeRequests } = useHelper();
  const params = useParams();
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
    { price: "12.52 ETH", usd: "22", from: "ram" },
    { price: "13.52 ETH", usd: "32", from: "sam" },
    { price: "15.52 ETH", usd: "52", from: "test" },
    { price: "16.52 ETH", usd: "62", from: "john" },
    { price: "17.52 ETH", usd: "62", from: "kevin" },
  ];

  const chart_data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [100, 53, 45, 91, 24, 65],
  };

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
  return (
    <>
      {Object.values(data).length != 0 && (
        <>
          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-20 lg:mx-32 md:mx-32 relative sm:flex-col xs:flex-col z-[-1]">
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

              <div className="flex gap-10">
                <button className="hover:cursor-pointer w-[50%] border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-2 py-5 rounded-lg text-center text-white">
                  Buy for {data?.sale?.price} ETH
                </button>
                <button className="hover:cursor-pointer w-[50%] border-blue-600 border  px-2 py-5 rounded-lg text-center text-white">
                  Make an Offer
                </button>
              </div>
              <div className="py-5">
                <Bids className="w-1/2" w_percentage={"100"} bids={bids} />
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-20 lg:mx-32 md:mx-32 xs:flex-col relative sm:flex-col z-[-1]">
            <div className="md:w-[50%] shadow sm:w-auto">
              <div
                className={`overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">
                    Description
                  </h3>
                </div>
                <p className="px-4 py-5">{data?.meta?.description}</p>
              </div>

              <div
                className={`mt-5 overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
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
                className={`mt-5 overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">
                    {data?.meta?.name} by {data?.creator?.name}
                  </h3>
                </div>
                <p className="px-8 py-5">{data?.meta?.description}</p>
              </div>

              <div
                className={`mt-5 overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
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
            <LineChart className="w-1/2" chart_data={chart_data} />
          </div>

          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-10 lg:mx-32 md:mx-32 xs:flex-col relative sm:flex-col z-[-1]">
            <div className="md:w-[100%] shadow sm:w-auto">
              <div
                className={`overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">Details</h3>
                </div>
                <div className="px-4 py-5 ">
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
          </div>

          <div className="flex lg:flex-row md:flex-row gap-20 m-3 mt-10 lg:mx-32 md:mx-32 xs:flex-col relative sm:flex-col z-[-1]">
            <div className="md:w-[100%] shadow sm:w-auto">
              <div
                className={`overflow-hidden border shadow sm:rounded-lg sm:w-auto`}
              >
                <div className="px-4 py-5 sm:px-6 border-b">
                  <h3 className="text-lg font-medium leading-6 ">More from this collection</h3>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SalesDetails;
