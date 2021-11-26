import React from 'react'

const Banner = ({ img, text, height, styles }) => {
    return (
        <div className="relative w-full h-full mt-12 mb-12 flex justify-center items-center mx-auto" style={{width: '800px', height: '256pox'}}>
            <img src={img} alt="banner-img" className="object-contain h-64 md:h-full" />
            {text && <h1 className={`banner-title w-2/5 text-xl sm:text-4xl md:text-6xl leading-relaxed font-semibold uppercase  absolute top-52 left-2/3  md:top-36 md:left-2/4 -ml-28 ${styles}`}>{text}</h1>}
        </div>
    )
}

export default Banner
