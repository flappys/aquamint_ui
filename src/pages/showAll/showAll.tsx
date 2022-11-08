import React, { useContext, useEffect, useState } from 'react'
import { BsClock, BsHeart } from "react-icons/bs";
import { makeRequest } from '../../shared/helper/api_requests';
import { SET_PARAMS_ALL } from '../../shared/constants/api_endpoints';
import { getInfuraURL } from '../../utils/getIPFSURL';
import { DataContext } from '../../store/dataContext';
import Skeleton from '../../shared/components/skelton_loader/skeleton_loader';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


function ShowAll() {
  const [showData, setData] = useState<any>();
  const { hover } = useContext(DataContext)
  const [limit, setLimit] = useState(10)
  const [showAll, hideShowAll] = useState(false)
  const locations = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const { location, setLocation } = useContext(DataContext)
 
  useEffect(() => {
    setLocation(locations.pathname)
    
    getShowAll()
  }, [locations.pathname])



  const getShowAll = async () => {
    hideShowAll(true)
    let data = {
      param_id: params.id,
      limit: localStorage.getItem("limit"),
      from: 0
    }
    const response = await makeRequest(SET_PARAMS_ALL(data));
    setData(response.data.items);
    localStorage.setItem("limit", response.data.pagination.lowest)
    hideShowAll(false)
  };

  const gotoRoute = (item: any) => {
    navigate(locations.pathname.includes("2") ? `/auction/${item.positionId}` : `/sales/${item.positionId}`)
  }


  const fetchMoreData = () => {
    getShowAll()
  }



  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 mt-8">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">{locations.pathname.includes("2") ? "Live NFTs Auctions" : "Buy NFTs"}</h1>
        <ul className="flex flex-wrap justify-center -mb-px">
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Trending</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Collectibles</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Domain Names</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Music</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Photography</a>
          </li>
        </ul>
      </div>


      {/* <div className={hover == false ? "container ml-[8rem] mt-14 flex flex-row flex-wrap gap-10" : " mt-14 container ml-[22rem] flex flex-row flex-wrap gap-10"}> */}

      <div className="grid md:grid-cols-4 container gap-3 relative top-10 left-[18rem]" >
        {!showAll && showData?.map((auction: any, index: any) => <div className=' cursor-pointer' onClick={() => gotoRoute(auction)} >
          <div key={index} className="relative border rounded-lg" >
            <div className="relative w-full h-72 rounded-lg ">
              <img
                src={getInfuraURL(
                  auction.meta.thumbnail || auction.meta.media
                )}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className='mx-2 py-2'>
              <p className="mt-1 text-sm text-white">{auction.meta.name}</p>
              <div className="flex justify-between border-b py-1">
                <p className="mt-1 text-sm text-gray-500">Price</p>
                <p className="mt-1 text-sm text-white">{auction.amount}</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="mt-1 text-sm text-gray-500">Author</p>
                {/* <p className="mt-1 text-sm text-white">{auction.creator.name}</p> */}
              </div>
              <div className="flex justify-center py-1">
                <h4 className="border-blue-600 border bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-1 rounded-lg text-center text-white">
                {locations.pathname.includes("2") ? "Place Bid" : "Buy NFT"}
                </h4>
                </div>
            </div>
            <div className="">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 "
              />
              {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
              <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                  <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                  <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
              <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                  <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                  <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>

            </div>
          </div>
        </div>)}





      </div>
      <div className='h-10'></div>

      {showAll && <div>
        <div className="grid md:grid-cols-4 container gap-3 left-[18rem] relative top-5">
          <Skeleton width={200} height="200px"></Skeleton>
          <Skeleton width={200} height="200px"></Skeleton>
          <Skeleton width={200} height="200px"></Skeleton>
          <Skeleton width={200} height="300px"></Skeleton>
        </div>
      </div>}



    </>
  )
}

export default ShowAll