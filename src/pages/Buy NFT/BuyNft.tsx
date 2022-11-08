import React from 'react'
import dash from "../../images/dashboard_menu.svg";
import list from "../../images/listing_menu.svg";
import fav from "../../images/fav_menu.svg";
import following from "../../images/following_menu.svg";
import payouts from "../../images/payouts_menu.svg";
import tower1 from "../../images/home/tower1.svg";
import tower2 from "../../images/home/tower2.svg";
import tower3 from "../../images/home/tower3.svg";
import tower4 from "../../images/home/tower4.svg";
import tower5 from "../../images/home/tower5.svg";
import tower6 from "../../images/home/tower6.svg";
import tower7 from "../../images/home/tower7.svg";
import { BsClock,BsHeart } from "react-icons/bs";
import Header from '../partials/Header';


function BuyNft() {
  return (
    <>
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-8">
    <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Buy NFTs</h1>
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


    <div className="flex justify-center">
    <div className="mt-8 grid md:grid-flow-col gap-10">
    <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower1}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
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
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower2}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower3}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower5}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower6}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</div>

<div className="flex justify-center">
    <div className="mt-8 grid md:grid-flow-col gap-10">
    <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower1}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
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
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower2}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower3}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower5}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative border rounded-lg">
          <div className="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={tower6}
              alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className='mx-2 py-2'>
            <p className="mt-1 text-sm text-white">White and black</p>
            <div className="flex justify-between border-b py-1">
              <p className="mt-1 text-sm text-gray-500">Price</p>
              <p className="mt-1 text-sm text-white">123</p>
            </div>
            <div className="flex justify-between py-1">
              <p className="mt-1 text-sm text-gray-500">Author</p>
              <p className="mt-1 text-sm text-white">Ram</p>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            {/* <p className="relative text-lg font-semibold text-white">$140</p> */}
            
            <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-between">
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsClock /></span><span className='ml-2'>02:48:03</span></button>
                <button className="flex items-center justify-between py-2 px-4 rounded-full bg-white text-gray-500 text-sm hover:bg-gray-300"><span><BsHeart /></span><span className='ml-2'>121</span></button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </>
  )
}

export default BuyNft