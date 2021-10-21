import React from 'react';
import BlueBgLogo from '../../assetsKalavarna/logos/blue_bg_logo.png';
import '../../styles/splashscreen.css'

const SplashScreen = () => {
    return(
        <div className="splash absolute top-0 w-full h-full z-20 flex items-center justify-center fade-out"
         style={{background: '#08263F'}}>
            <img src={BlueBgLogo} className="fade-out-slow" />
        </div>
    )
}

export default SplashScreen;