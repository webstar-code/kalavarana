import React from 'react';
import BlueBgLogo from '../../assetsKalavarna/logos/blue_bg_logo.png';
import '../../styles/splashscreen.css'

const SplashScreen = () => {
    return(
        <div className="splash absolute top-0 w-screen h-screen z-20 flex items-center justify-center fade-out-slow"
         style={{background: '#08263F'}}>
            <img src={BlueBgLogo} className="fade-out" />
        </div>
    )
}

export default SplashScreen;