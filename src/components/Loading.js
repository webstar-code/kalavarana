import React from 'react'
import BlueBgLogo from '../assetsKalavarna/logos/blue_bg_logo.png';

const Loading = () => {
    return (
        <div className="w-full absolute top-0 left-0 h-screen bg-primary p-32 pt-0 flex flex-col  items-center justify-center z-50">
            <img src={BlueBgLogo} className="w-40" />
            <div className="loding-bar my-2"></div>
        </div>
    )
}

export default Loading
