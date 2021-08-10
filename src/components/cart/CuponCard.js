import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const CuponCard = (props) => {
    return (
        <div className="promo-code-card" >
            <div className="promo-img">

            </div>
            <div className="promo-text">
                <h3>Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod</h3>
                <p>Lorem ipsum dolor sit amet, etur scing elit, sed do eiusmod</p>
                <div className="promo-code-btn">
                    <div className="lock-icon">
                        <LockOutlinedIcon/>
                    </div>
                    <div className="offer-code-text">
                       <p>Min Purchase of INR4255</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CuponCard
