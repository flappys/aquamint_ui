import { formAPIConfig,getAPIWithParams } from "../helper/api_requests"
import { AUCTION_DATA } from "./api_data"
import { constants } from "./constants"

export const FEATURED_API: string = `${constants.BackEnd}/get/marketplace/featured`
export const SALES_API: string = `${constants.BackEnd}/get/marketplace/all/1?limit=4&startFrom=0`
export const AUCTIONS_API: string = `${constants.BackEnd}/get/marketplace/all/2`
export const AUCTION_DETAIL_API:string=`${constants.BackEnd}get/marketplace/position/`
export const FEATURED = formAPIConfig("GET", FEATURED_API, AUCTION_DATA)
export const COLLECTION_API: string = `${constants.BackEnd}/get/marketplace/by-collection/`

export const BASE_DETAIL_API=`${constants.BackEnd}/get/marketplace/all/`

export const AUCTION_DETAILS=(id:any)=>{
    let url=AUCTION_DETAIL_API + id;
    return formAPIConfig("GET",url,AUCTION_DATA)
}

export const AUCTIONS=(PARAMS:any) =>{
    return getAPIWithParams("GET", AUCTIONS_API, PARAMS)
    }

export const GET_SALES=(data:any)=>{
    return formAPIConfig("GET", SALES_API , data)
}

export const SET_PARAMS_ALL=(data:any)=>{
    let url = BASE_DETAIL_API + data.param_id + `?limit=${data.limit}&startFrom=${data.from}`
    return formAPIConfig("GET", url, data)
}

export const COLLECTION=(PARAMS:any,id:any) =>{
    let url = COLLECTION_API + id + '/0';
    return getAPIWithParams("GET", url, PARAMS)
    }

    export const SET_PARAMS=(data:any)=>{
       
        return formAPIConfig("GET", data.url, data)
    }