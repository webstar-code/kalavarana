import React from 'react'

const Banner = ({ img, text, height, styles }) => {
    return (
        <div className="banner-1 relative w-full h-full mt-12 mb-12 flex justify-center items-center mx-auto" style={{ height: height }}>
            <img src={img} alt="banner-img" className="h-full" style={{ height: height }} />
            {text && <h1 className={`banner-title text-6xl leading-relaxed font-semibold uppercase w-1/3 absolute top-36 left-2/4 -ml-28 ${styles}`}>{text}</h1>}
        </div>
    )
}

export default Banner
