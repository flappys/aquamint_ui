import React from 'react'
import { FaClipboardList } from "react-icons/fa";
import circle from "../../images/circle.png";
import Tezos from "../../images/blockchains/Tezos.svg"
import Flow from "../../images/blockchains/Flow.svg"

function TopSellingNFT() {

    const tableData = [
        { id:1, collection: "Bored Ape Yacht Club", volume: "4,915", blockchain:Tezos, twenty_four: "-10,00%", seven: "+18,60%", floor_price: "10,450.00", owner: "6.3k", items:"10.0k"},
        { id:2, collection: "Bored Club", volume: "4,915", blockchain:Flow, twenty_four: "-10,00%", seven: "+1,60%", floor_price: "10,450.00", owner: "6.3k", items:"10.0k"},
        { id:3, collection: "Bored Ape ", volume: "4,915", blockchain:Tezos, twenty_four: "-10,00%", seven: "+18,60%", floor_price: "10,450.00", owner: "6.3k", items:"10.0k"},
        { id:4, collection: "Ape Yacht Club", volume: "4,915", blockchain:Flow, twenty_four: "-10,00%", seven: "+18,60%", floor_price: "10,450.00", owner: "6.3k", items:"10.0k"},
        { id:5, collection: "Bored 1", volume: "4,915", blockchain:Tezos, twenty_four: "-10,00%", seven: "+18,00%", floor_price: "10,450.00", owner: "6.3k", items:"10.0k"},
        { id:6, collection: "Bored 2", volume: "4,915", blockchain:Flow, twenty_four: "-10,00%", seven: "+18,60%", floor_price: "10,450.00", owner: "6.3k", items:"10.0k"},
    ];
  return (
    <>
    <div className="ml-5 mx-auto overflow-y-hidden px-8 w-[100%]">
    <div className="flex flex-col p-12">
        <div className="flex justify-between">
    <h1 className='font-extrabold text-3xl'>Top selling NFTs</h1>
    <button
    type="button"
    className="flex items-center gap-1 border-gray-700  border focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mb-2 "
    >
    <FaClipboardList />
    Last 30 days
    </button>
        </div>
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 py-10">
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <div className="overflow-hidden border border-gray-200 sm:rounded-lg text-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                Collections
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                Volume
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                24h %
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                7h %
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                Floor price
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                Owners
              </th>
              <th
                scope="col"
                className="px-6 py-6 text-left text-xs font-medium uppercase tracking-wider text-white"
              >
                Items
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((item:any, index:any)=>(

            
            <tr>
              <td className="whitespace-nowrap px-6 py-6 text-sm font-medium text-white">
                <div className="flex items-center gap-2">
              {item.id} 
              <img
              className="text-center w-12"
              src={circle}
            ></img>
               {item.collection}
               </div>
              </td>
              <td className="whitespace-nowrap px-6 py-6 text-sm text-white">
              <div className="flex items-center gap-2">
              <img
              className="text-center"
              src={item.blockchain}
              ></img>
               {item.volume}
               </div>
              </td>
              <td className="whitespace-nowrap px-6 py-6 text-sm text-red-500">
              {item.twenty_four}
              </td>
              <td className="whitespace-nowrap px-6 py-6 text-sm text-green-400">
              {item.seven}
              </td>
              <td className="whitespace-nowrap px-6 py-6 text-sm text-white">
              <div className="flex items-center gap-2">
              <img
              className="text-center"
              src={item.blockchain}
              ></img>
               {item.floor_price}
               </div>
              </td>
              <td className="whitespace-nowrap px-6 py-6 text-sm text-gray-400">
              {item.owner}
              </td>
              <td className="whitespace-nowrap px-6 py-6 text-sm text-gray-400">
              {item.items}
              </td>
            </tr>

))}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <button
      type="button"
      className={`px-8 mx-auto border bg-blue-700 border-blue-700  focus:outline-none focus:ring-4  font-medium rounded-full text-sm  py-2.5 mb-2  dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
    >
      Load More
    </button>
</div>
</div>
    </>
  )
}

export default TopSellingNFT