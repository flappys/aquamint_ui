import { useEffect, useState } from "react"
import { BsClock, BsHeart } from "react-icons/bs"
import { HiChevronDoubleRight } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { getInfuraURL } from "../../../utils/getIPFSURL"
import CardLoader from "../skelton_loader/card_loader"
import GridCardLoader from "../skelton_loader/Grid_card_loader"
import GridContentItem from "./GridContentItem"

function GridContent(props: Props) {
    const navigate = useNavigate();

    const gotoRouteShow = () => {
        navigate(props.route)
    }

    return props?.api_data.length != 0 ? <>
        <div className="py-2 flex justify-between">
            <h1 className="relative top-5">{props.title}</h1>
            <p className="text-gray-500 text-sm flex items-center hover:text-blue-500 cursor-pointer relative top-5" onClick={gotoRouteShow}>
                Show All
                <span>
                    <HiChevronDoubleRight />
                </span>
            </p>
        </div>

        <div className="mt-8  grid md:grid-cols-3 xs:grid-cols-1  xl:grid-cols-3  2xl:grid-cols-4 sm:grid-cols-2 gap-3">
            {props.api_data.map((item: any, index: any) => <GridContentItem
                key={index}
                navigate={() => navigate(props.detail_route + "/" + item.positionId)}
                img={getInfuraURL(item.meta.thumbnail || item.meta.media)}
                time={'02:48:03'}
                likes={116}
                name={item.meta.name}
                marketFee={item.marketFee}
                author={'Ram'}
            />
            )}
            {/* {props.api_data.map((item: any, index: any) =>
                <div key={index} onClick={() => navigate(props.detail_route + "/" + item.positionId)}>
                    <div className="relative border rounded-lg cursor-pointer">
                        <div className="relative w-full h-72 rounded-lg overflow-hidden" >
                            <img
                                src={getInfuraURL(
                                    item.meta.thumbnail || item.meta.media
                                )}
                                alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="mx-2 py-2">
                            <p className="mt-1 text-sm text-white">{item.meta.name}</p>
                            <div className="flex justify-between border-b py-1">
                                <p className="mt-1 text-sm text-gray-500">Price</p>
                                <p className="mt-1 text-sm text-white">{item.marketFee}</p>
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
            )} */}

        </div>

    </>
        : <div className="">
            <div className="mt-9">
                <div className="bg-gray-700 w-full animate-pulse h-3 rounded-2xl mt-2"></div>
            </div>
            <div className="mt-8 grid md:grid-flow-col gap-10 flex-wrap">
                {props.skeleton_card.map((loader: any) => <div className="relative">
                    <GridCardLoader height={15}></GridCardLoader>
                </div>)}
            </div>
        </div>
}




interface Props {
    skeleton_card: any,
    api_data: any,
    title: any,
    route: any,
    detail_route: any
}

export default GridContent