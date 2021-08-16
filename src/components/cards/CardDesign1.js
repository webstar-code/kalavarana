import React from 'react'
import {Link} from 'react-router-dom'
const Card = ({img,id,title,price,originalPrice,hascolors}) => {
    return (
        <Link to={`/products/${id}`}>
        <div className="card-1 relative bg-white flex flex-col items-start justify-start p-2 mr-2">
            <img className="h-4/5" src={img} alt="img" />
            <h3 className="py-1">{title}</h3>
            <p className="text-sm mt-1">{price} <span className="text-gray-500 tex-xs line-through">{originalPrice}</span></p>
            {hascolors&&(<div className="flex mt-2">
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
                <div className="rounded-full p-3 bg-gray-200 mr-2"></div>
            </div>)}
            <div className="sale-tag absolute top-5 right-16 bg-white p-1 ">ON SALE</div>
        </div>
        </Link>
    )
}

export default Card
