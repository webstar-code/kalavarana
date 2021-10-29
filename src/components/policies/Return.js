import React from 'react'
import Privcy from '../pages/Privcy'
import '../../styles/privacy.css'
import Footer from '../Footer'

const Return = () => {
    return (
        <>
            <div className="privacy-page mb-12">
                <div className="content-area">
                    <Privcy />
                    <div className="text-area">
                        Every product is checked thoroughly before it is shipped. Therefore, we don't accept returns/refunds/exchanges for any products purchased online.
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Return
