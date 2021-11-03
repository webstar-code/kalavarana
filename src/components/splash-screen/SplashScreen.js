import React from 'react';
import {KALAVARANA_BLUE_LOGO} from '../../assets';
import '../../styles/splashscreen.css'

const SplashScreen = () => {
    return(
        <div className="splash absolute top-0 w-full h-full z-50 flex items-center justify-center fade-out"
         style={{background: '#08263F'}}>
            <img src={KALAVARANA_BLUE_LOGO} className="fade-out-slow" />
        </div>
    )
}

export default SplashScreen;