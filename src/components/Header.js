import React,{useState} from 'react'
import '../styles/Header.css'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiShoppingCart,FiMenu} from 'react-icons/fi'
import {AiOutlineBell} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../assets/img/ana-logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
// import {AiOutlineUser} from 'react-icons/ai'
const Header = (props) => {
    const [showSideBar,setShowSideBar]=useState(false)
    const [showSales,setShowSales]=useState(false)
    const [showColthing,setShowClothing]=useState(false)
    const [showHijabs,setShowHijabs]=useState(false)
    const [showAccs,setShowAccs]=useState(false)
    return (
        <div  className="main-header fixed border-b border-gray-200 bg-white top-0 left-0 flex flex-col w-full pt-6 px-3 flex z-10">
            <div className="flex items-center justify-around">
             <div className="div">

             </div>
             <div className="burger" onClick={()=>setShowSideBar(true)}>
                 <FiMenu className="menu"/>
             </div>
             <div className="ml-36 header-img">
                 <Link to="/"><img src={logo} alt="ANA" /></Link>
             </div>
             <div className="flex justify-evenly text-black">
              <BiSearch className="text-xl mx-3"/>
              <Link to="/profile"><AiOutlineUser className="top-user-icon text-xl mx-3"/></Link>
              <Link to="/cart"><div className="cart-icon"><span>{props.cart?.length}</span><FiShoppingCart className="text-xl mx-3"/></div></Link>
              <div className="relative first-list notification">
                <AiOutlineBell className="top-bell-icon text-xl mx-3"/>
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
            <div className="bottom-header flex w-full px-10 items-center justify-center pt-8 pb-5 ">
                <ul className={`nav-links ${showSideBar&& 'show-side-bar'} cursor-pointer upper-case flex w-3/4 items-center justify-evenly`}>
                    <div className="profile">
                       <Link to="/profile-and-details"> <AiOutlineUser className="user-icon"/></Link>
                        <p>{props.user?.name}</p>
                        <Link to="/notification">  <AiOutlineBell className="bell-icon"/></Link>
                    </div>
                        <Link><li className="hover relative first-list">Sales

                            <div className=" dorp-down ">
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        </li></Link>
                        <Link>
                        <li className="onclick relative first-list">
                              <span className="flex items-center justify-between" onClick={()=>setShowSales(!showSales)}>SALES  <IoMdArrowDropdown
                              style={{transform:showSales?"rotate(180deg)":"rotate(0deg)"}}/></span>
                            <div className={`onclick-dorp-down ${showSales&&'showOnClick'}`}>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        </li></Link>
                    <Link to="/collections"><li>Collections</li></Link>
                    <Link>
                    <li className="onclick relative first-list">
                    <span className="flex items-center justify-between" onClick={()=>setShowClothing(!showColthing)}>COTHING  <IoMdArrowDropdown
                              style={{transform:showColthing?"rotate(180deg)":"rotate(0deg)"}}/></span>
                        
                        <div className={`onclick-dorp-down ${showColthing&&'showOnClick'}`}>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        </li></Link>
                    <Link><li className="hover relative first-list">
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
                    <Link>
                        <li className="hover relative first-list">
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
                    <Link>
                        <li className="onclick relative first-list">
                        <span className="flex items-center justify-between" onClick={()=>setShowHijabs(!showHijabs)}>HIJABS  <IoMdArrowDropdown
                              style={{transform:showHijabs?"rotate(180deg)":"rotate(0deg)"}}/></span>

                            <div className={`onclick-dorp-down ${showHijabs&&'showOnClick'}`}>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>

                        </li>
                        </Link>
                    <Link><li className="hover relative first-list">
                        
                        Accessories
                        <div className=" dorp-down ">
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        
                        </li></Link>
                    <Link><li className="onclick relative first-list">
                        
                    <span className="flex items-center justify-between" onClick={()=>setShowAccs(!showAccs)}>ACCESSORIES<IoMdArrowDropdown
                              style={{transform:showAccs?"rotate(180deg)":"rotate(0deg)"}}/></span>

                        <div className={`onclick-dorp-down ${showAccs&&'showOnClick'}`} >
                                 <p>Text</p>
                                 <p>Text</p>
                            </div>
                        
                        </li></Link>
                    <Link to="/collab"><li>Collab</li></Link>
                </ul>
                <div onClick={()=>setShowSideBar(false)} className={`blank-screen ${showSideBar&& 'show-side-bar'}`}>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{cart:state.cart,user:state.user.user}
}

export default connect(mapStateToProps)(Header)
