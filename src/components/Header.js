import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineBell} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../assets/img/ana-logo.png'
const Header = (props) => {
    return (
        <div  className="fixed border-b border-gray-200 bg-white top-0 left-0 flex flex-col w-full pt-6 px-3 flex z-10">
            <div className="flex items-center justify-around">
             <div className="div">

             </div>
             <div className="ml-36">
                 <Link to="/"><img src={logo} alt="ANA" /></Link>
             </div>
             <div className="flex justify-evenly text-black">
              <BiSearch className="text-xl mx-3"/>
              <Link to="/profile"><AiOutlineUser className="text-xl mx-3"/></Link>
              <Link to="/cart"><div className="cart-icon"><span>{props.cart?.length}</span><FiShoppingCart className="text-xl mx-3"/></div></Link>
              <AiOutlineBell className="text-xl mx-3"/>
             </div>
            </div>
            <div className="flex w-full px-10 items-center justify-center pt-8 pb-5 ">
                <ul className="cursor-pointer upper-case flex w-3/4 items-center justify-evenly">
                    <Link to="/sales"><li>Sales</li></Link>
                    <Link to="/collections"><li>Collections</li></Link>
                    <Link to="/clothing"><li>Clothing</li></Link>
                    <Link to="/dresses"><li>Dresses</li></Link>
                    <Link to="/hijabs"><li>Hijabs</li></Link>
                    <Link to="/accessories"><li>Accessories</li></Link>
                    <Link to="/collab"><li>Collab</li></Link>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{cart:state.cart}
}

export default connect(mapStateToProps)(Header)
