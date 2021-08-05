import React from 'react'

const Banner = ({img,text}) => {
    return (
        <div className="relative w-full h-full mt-12 mb-12">
            <img src={img} alt="banner-img" className="h-full w-full p" />
            {text&&<h1 className="text-5xl text-white w-1/3 absolute top-1/2 left-32">{text}</h1>}
        </div>
    )
}

export default Banner
