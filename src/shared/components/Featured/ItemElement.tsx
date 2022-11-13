import React from 'react';
import tower1 from "../../../images/home/tower1.svg";

const ItemElement = (props: any) => {
    return (
        <div className='bx' key={props?.key}>
            <img src={props?.img} alt='' className='bx-img' />
            <div className='bx-cnt'>
                <h6 className="bx-cnt-name">{props?.name}</h6>
                <p className="bx-cnt-subname">{props?.author}</p>
            </div>
        </div>
    )
}

export default ItemElement