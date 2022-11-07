import { features } from "process";
import React, { useEffect, useState } from "react";
import { getInfuraURL } from "../../../utils/getIPFSURL";
import { FEATURED } from "../../constants/static";
import CardLoader from "../skelton_loader/card_loader";
import Skeleton from "../skelton_loader/skeleton_loader";
function FeaturedHome(props: any) {


  return <>{props.data.length!=0 ? <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xs:gap-10 md:grid-cols-2 xl:grid-cols-2 md:gap-10 lg:gap-5 ">
    <div className="rounded-3xl">
    <img
          className="md:h-[100%] h-[100%] w-full rounded-lg  object-center"
          src={getInfuraURL(
            props.data[0]?.meta.thumbnail || props.data?.meta.media
        )}
          alt="t2"
        />
    </div>
    <div className="grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  2xl:grid-cols-3 2xl:gap-2 sm:gap-5  xl:gap-3 md:gap-3">
      {FEATURED.map((feature) => <div className="relative">
        <img
          className="h-full rounded-lg w-full  object-cover object-center"
          src={feature.imageSrc}
          alt="t2"
        />
        <h2 className="text-center relative bottom-16">
          {feature.NAME}
        </h2>
        <p className="text-center relative bottom-16">
          {feature.author}
        </p>
      </div>)}
    </div>

  </div>:<div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xs:gap-10 md:grid-cols-2 xl:grid-cols-2 md:gap-10 lg:gap-3">
    <div className="w-auto">
      <CardLoader height={30}></CardLoader>
    </div>
    <div className="grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3  2xl:grid-cols-3 2xl:gap-5 sm:gap-5  xl:gap-5">
      <Skeleton height={30}></Skeleton>
      <Skeleton height={30}></Skeleton>
      <Skeleton height={30}></Skeleton>
    </div>
  </div>}</>






}
export default FeaturedHome;