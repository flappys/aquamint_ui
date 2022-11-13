import React from 'react';
import { BsClock, BsHeart } from "react-icons/bs"

const GridContentItem = (props: any) => {
    return (
        <div
            className="actn-bx"
            key={props?.key}
            onClick={props?.navigate}>
            <div className="actn-bx-img">
                <img src={props?.img} alt="" />
                <div className="actn-bx-bdge">
                    <div className="actn-bx-bdge-bx">
                        <BsClock />
                        <span className='ml-1'>{props?.time}</span>
                    </div>
                    <div className="actn-bx-bdge-bx">
                        <BsHeart />
                        <span className='ml-1'>{props?.likes}</span>
                    </div>
                </div>
            </div>
            <div className="actn-bx-cnt">
                <h6 className="actn-bx-ttl">{props?.name}</h6>
                <div className="actn-bx-cnt-lst brd">
                    <span className="actn-bx-cnt-lst-nm">Price</span>
                    <span className="actn-bx-cnt-lst-nm actn-bx-cnt-lst-nm-bld">{props?.marketFee}</span>
                </div>
                <div className="actn-bx-cnt-lst">
                    <span className="actn-bx-cnt-lst-nm">Author</span>
                    <span className="actn-bx-cnt-lst-nm actn-bx-cnt-lst-nm-bld">{props?.author}</span>
                </div>
                {props?.element}
            </div>
        </div>
    )
}

export default GridContentItem