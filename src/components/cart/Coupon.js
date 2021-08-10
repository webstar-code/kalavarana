import React from 'react'
import '../../styles/cupon.css'
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import CuponCard from './CuponCard';
const Coupon = (props) => {
    return (
        <div className="cut-screen" onClick={()=>props.setShowPromo(false)}>
            <div className="cupon-form" onClick={(e)=>e.stopPropagation()}>
                <div className="cupon-title">
                    <h1 className="font-bold">Promo Code</h1>
                    <div onClick={()=>props.setShowPromo(false)}>
                      <CloseIcon/>  
                    </div>
                </div>
                <form>
                   <div className="cupon-input">
                       <input type="text" />
                       <SearchIcon/>
                   </div>
                   <button className="code-pro-btn">Proceed</button>
                </form>
                <div className="weekend-cupons">
                    <h3 className="text-sm font-bold">WEEKEND OFFERS</h3>
                    < CuponCard />
                </div>
            </div>
        </div>
    )
}

export default Coupon
