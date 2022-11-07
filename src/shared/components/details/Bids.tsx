import React from 'react'

function Bids(props:any) {
    
  return (
    <>
    <div className={`overflow-hidden border shadow sm:rounded-lg  ${props.w_percentage == 100 ? "md:w-[100%]" : "md:w-[50%]" } sm:w-auto`}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6">{location.pathname.includes("auction")?"Bids":"Offers"}</h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="px-4 py-5 grid grid-cols-3 gap-4 px-6">
                    <dt className="text-xs text-gray-500">Price</dt>
                    <dt className="text-xs text-gray-500">USD Price</dt>
                    <dt className="text-xs text-gray-500">Price</dt>
                  </div>
                  {props.bids?.map((val: any, index: any) => (
                    <div
                      className={` ${
                        index != 0 && "border-t"
                      } px-4 py-5  grid grid-cols-3 gap-4 px-6`}
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
    </>
  )
}

export default Bids