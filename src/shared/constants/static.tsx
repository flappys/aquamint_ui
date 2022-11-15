import payouts from "../../images/payouts_menu.svg";
import dash from "../../images/dashboard_menu.svg";
import list from "../../images/listing_menu.svg";
import fav from "../../images/fav_menu.svg";
import following from "../../images/following_menu.svg";
import tower2 from "../../images/home/tower2.svg";
import tower3 from "../../images/home/tower3.svg";
import tower4 from "../../images/home/tower4.svg";
import tower5 from "../../images/home/tower5.svg";
import tower6 from "../../images/home/tower6.svg";
import tower7 from "../../images/home/tower7.svg";
import { BASE_DETAIL_API } from "./api_endpoints";
export const SIDEMENU = [
    { name: "Dashboard", imgSrc: list, route: "/",active:false,hoverSidemenu:false,route_param:"" },
    { name: "Your Listing", imgSrc: dash, route: "/listing",active:false,hoverSidemenu:false,route_param:"listing" },
    { name: "Favorites", imgSrc: fav, route: "/favourites",active:false,hoverSidemenu:false,route_param:"favourites" },
    { name: "Following", imgSrc: following, route: "/following",active:false,hoverSidemenu:false,route_param:"following" },
    { name: "Payouts", imgSrc: payouts, route: "/payouts",active:false ,hoverSidemenu:false,route_param:"payouts"},
    { name: "Auctions", imgSrc: payouts, route: "/showAll/2",active:false ,hoverSidemenu:true,route_param:"showAll"},
    { name: "Sales", imgSrc: payouts, route: "/showAll/1",active:false ,hoverSidemenu:false,route_param:"showAll"},
]

export const ALLOWED_ROUTE_PATH_FOR_SIDEMENU = [
    "/",
    "/listing",
    "/favourites",
    "/following",
    "/payouts",
    "/showAll/1",
    "/showAll/2",
]

export const ALLOWED_ROUTE_PATH_FOR_HOVER_SIDEMENU = [
    "auction",
    "profile",
]

export const SKELETON_COUNT=[1,2,3,4]

export const FEATURED =[
    {NAME:"Towers NTF Art", author:"By Marcos Alvin",imageSrc:tower2},
    {NAME:"Towers NTF Art", author:"By Marcos Alvin",imageSrc:tower3},
    {NAME:"Towers NTF Art", author:"By Marcos Alvin",imageSrc:tower4},
    {NAME:"Towers NTF Art", author:"By Marcos Alvin",imageSrc:tower5},
    {NAME:"Towers NTF Art", author:"By Marcos Alvin",imageSrc:tower6},
    {NAME:"Towers NTF Art", author:"By Marcos Alvin",imageSrc:tower7},

]


export const COLLECTIONS = [
    {count:1,imageSrc:tower2,name:"Tower 1",price:1234},
    {count:2,imageSrc:tower3,name:"Tower 2",price:1234},
    {count:3,imageSrc:tower4,name:"Tower 3",price:1234},
    {count:4,imageSrc:tower5,name:"Tower 4",price:1234},
    {count:5,imageSrc:tower6,name:"Tower 5",price:1234},
]


export const Tabs = [
    {name:"All",active:false,api_url:BASE_DETAIL_API + "id" + `?limit=${10}&startFrom=0`},
    {name:"Trending",active:true,api_url:BASE_DETAIL_API + "id" + `?limit=${10}&startFrom=0`},
    {name:"Collectibles",active:false,api_url:BASE_DETAIL_API + "id" + `?limit=${10}&startFrom=0`},
    {name:"Domain Names",active:false,api_url:BASE_DETAIL_API + "id" + `?limit=${10}&startFrom=0`},
    {name:"Music",active:false,api_url:BASE_DETAIL_API + "id" + `?limit=${10}&startFrom=0`},
    {name:"Photography",active:false,api_url:BASE_DETAIL_API + "id" + `?limit=${10}&startFrom=0`}
]


export const TOP_MENU =[
    {
    name:"Top Selling",
    link:"/top-selling"
},
{
    name:"Stats",
    link:"#"
},
{
    name:"Drops",
    link:"#"
},
{
    name:"Activity",
    link:"/activity"
}
]