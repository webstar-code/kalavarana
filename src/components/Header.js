import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineBell} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../assets/img/ana-logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
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
              <div className="relative first-list notification">
                <AiOutlineBell className="text-xl mx-3"/>
                <div className=" dorp-down ">
                   <div className="noti">
                       <div className="noti-icon mr-4">
                       <NotificationsIcon/>
                       </div>
                       <div className="noti-text">
                           <p className="text-sm">Your Order Has been Shipped!</p>
                           <span className="text-xs text-gray-300">21 Feb 2021</span>
                       </div>
                  </div>        
                </div>
                </div>
             </div>
            </div>
            <div className="flex w-full px-10 items-center justify-center pt-8 pb-5 ">
                <ul className="cursor-pointer upper-case flex w-3/4 items-center justify-evenly">
                    <Link to="/sales">
                        <li className="relative first-list">Sales

                            <div className=" dorp-down ">
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        </li>
                        </Link>
                    <Link to="/collections"><li>Collections</li></Link>
                    <Link to="/clothing"><li className="relative first-list">
                        Clothing
                        
                        <div className=" dorp-down ">
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        </li></Link>
                    <Link to="/dresses"><li>Dresses</li></Link>
                    <Link to="/hijabs">
                        <li className="relative first-list">
                            Hijabs
                            <div className=" dorp-down ">
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>

                        </li>
                        </Link>
                    <Link to="/accessories"><li className="relative first-list">
                        
                        Accessories
                        <div className=" dorp-down ">
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        
                        </li></Link>
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
