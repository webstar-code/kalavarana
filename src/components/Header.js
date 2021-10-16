import React, { useState } from 'react'
import '../styles/Header.css'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { FiShoppingCart, FiMenu } from 'react-icons/fi'
import { AiOutlineBell } from 'react-icons/ai'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import logo from '../assets/img/ana-logo.png'
import { KALAVARANA_LOGO } from '../assetsKalavarna';

import NotificationsIcon from '@material-ui/icons/Notifications';
// import {AiOutlineUser} from 'react-icons/ai'
const Header = (props) => {
	const [showSideBar, setShowSideBar] = useState(false)
	const [showSales, setShowSales] = useState(false)
	const [showTanjore, setTanjore] = useState(false)
	const [showTanjore2D, setTanjore2D] = useState(false)
	const [showTanjore3D, setTanjore3D] = useState(false)


	const [showColthing, setShowClothing] = useState(false)
	const [showHijabs, setShowHijabs] = useState(false)
	const [showAccs, setShowAccs] = useState(false)
	const [showMore, setShowMore] = useState(false)
	return (
		<div className="fixed border-b border-gray-200 bg-white top-0 left-0 flex flex-col w-full h-20 md:h-36 pt-4 px-3 z-10">
			<div className="flex items-center justify-around">
				<div className="div">

				</div>
				<div className="md:hidden" onClick={() => setShowSideBar(true)}>
					<FiMenu className="text-xl" />
				</div>
				<div className="ml-36">
					<Link to="/"><img src={KALAVARANA_LOGO} alt="KALAVARNA" className="w-2/5 h-2/5 md:w-1/2 md:h-1/2 md:mx-auto" /></Link>
				</div>
				<div className="flex justify-evenly text-black">
					<BiSearch className="text-xl mx-3" />
					<Link to="/profile"><AiOutlineUser className="hidden md:block text-xl mx-3" /></Link>
					<Link to="/cart"><div className="cart-icon"><span>{props.cart?.length}</span><FiShoppingCart className="text-xl mx-3" /></div></Link>
				</div>
			</div>
			<div className="bottom-header flex w-full px-10 py-5 items-center justify-center ">
				<ul className={`nav-links ${showSideBar && 'show-side-bar'} cursor-pointer upper-case flex items-center`}>
					<div className="profile">
						<Link to="/profile-and-details"> <AiOutlineUser className="user-icon" /></Link>
						<p>{props.user?.name}</p>
						{/* <Link to="/notification">  <AiOutlineBell className="bell-icon" /></Link> */}
					</div>
					<Link>
						<li className="hover relative first-list">Sales
							<div className=" drop-down ">
								<p>Text</p>
								<p>Text</p>
								<p>Text</p>
								<p>Text</p>
								<p>Text</p>
							</div>
						</li>
					</Link>
					{/* mobile */}
					<Link>
						<li className="onclick relative first-list">
							<span className="flex items-center justify-between" onClick={() => setShowSales(!showSales)}>SALES  <IoMdArrowDropdown
								style={{ transform: showSales ? "rotate(180deg)" : "rotate(0deg)" }} /></span>
							<div className={`onclick-drop-down ${showSales && 'showOnClick'}`}>
								<p>Text</p>
								<p>Text</p>
							</div>
						</li></Link>

					<Link to={`/category/Category1`}>
						<li className="hover relative first-list whitespace-nowrap">Tanjore Painting
							<div className="drop-down whitespace-nowrap">
								<p className="flex py-2">Sub-category1</p>
								<p className="flex py-2">Sub-category2</p>
								<p className="flex py-2">Sub-category3</p>
							</div>
						</li>
					</Link>
					<Link>
						<li className="onclick relative first-list whitespace-nowrap">
							<span className="flex items-center justify-between" onClick={() => setTanjore(!showTanjore)}>Tanjore Painting
								<IoMdArrowDropdown style={{ transform: showTanjore ? "rotate(180deg)" : "rotate(0deg)" }} /></span>
							<div className={`onclick-drop-down ${showTanjore && 'showOnClick'}`}>
								<p className="flex py-2">Sub-category1</p>
								<p className="flex py-2">Sub-category2</p>
								<p className="flex py-2">Sub-category3</p>
							</div>
						</li>
					</Link>

					<Link to={`/category/Category2`}>
						<li className="hover relative first-list whitespace-nowrap">Tanjore2D Painting
							<div className="drop-down whitespace-nowrap">
								<p className="flex py-2">Sub-category1</p>
								<p className="flex py-2">Sub-category2</p>
								<p className="flex py-2">Sub-category3</p>
							</div>
						</li>
					</Link>
					<Link>
						<li className="onclick relative first-list whitespace-nowrap">
							<span className="flex items-center justify-between" onClick={() => setTanjore2D(!showTanjore2D)}>Tanjore2D Painting
								<IoMdArrowDropdown style={{ transform: showTanjore2D ? "rotate(180deg)" : "rotate(0deg)" }} /></span>
							<div className={`onclick-drop-down ${showTanjore2D && 'showOnClick'}`}>
								<p className="flex py-2">Sub-category1</p>
								<p className="flex py-2">Sub-category2</p>
								<p className="flex py-2">Sub-category3</p>
							</div>
						</li>
					</Link>

					<Link to={`/category/tanjore3d_paintnig`}>
						<li className="hover relative first-list whitespace-nowrap ">Tanjore3D Painting
							<div className="drop-down whitespace-nowrap">
								<p className="flex py-2">Sub-category1</p>
								<p className="flex py-2">Sub-category2</p>
								<p className="flex py-2">Sub-category3</p>
							</div>
						</li>
					</Link>
					<Link>
						<li className="onclick relative first-list whitespace-nowrap">
							<span className="flex items-center justify-between" onClick={() => setTanjore3D(!showTanjore3D)}>Tanjore3D Painting
								<IoMdArrowDropdown style={{ transform: showTanjore3D ? "rotate(180deg)" : "rotate(0deg)" }} /></span>
							<div className={`onclick-drop-down ${showTanjore3D && 'showOnClick'}`}>
								<p className="flex py-2">Sub-category1</p>
								<p className="flex py-2">Sub-category2</p>
								<p className="flex py-2">Sub-category3</p>
							</div>
						</li>
					</Link>



					<Link><li className="whitespace-nowrap">About us</li></Link>
					<Link><li className="whitespace-nowrap">Blog</li></Link>
					<Link><li className="whitespace-nowrap">Contact us</li></Link>

					{/* <Link><li>ABAYAS</li></Link> */}
					{/* <Link to="/collections"><li>Collections</li></Link> */}
					{/* <Link>
						<li className="onclick relative first-list">
							<span className="flex items-center justify-between" onClick={() => setShowClothing(!showColthing)}>COTHING  <IoMdArrowDropdown
								style={{ transform: showColthing ? "rotate(180deg)" : "rotate(0deg)" }} /></span>

							<div className={`onclick-drop-down ${showColthing && 'showOnClick'}`}>
								<p>Text</p>
								<p>Text</p>
							</div>
						</li></Link>
					<Link><li className="hover relative first-list">
						Clothing

						<div className=" drop-down ">
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
							<div className=" drop-down ">
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
							<span className="flex items-center justify-between" onClick={() => setShowHijabs(!showHijabs)}>HIJABS  <IoMdArrowDropdown
								style={{ transform: showHijabs ? "rotate(180deg)" : "rotate(0deg)" }} /></span>

							<div className={`onclick-drop-down ${showHijabs && 'showOnClick'}`}>
								<p>Text</p>
								<p>Text</p>
							</div>

						</li>
					</Link>
					<Link><li className="hover relative first-list">

						Accessories
						<div className=" drop-down ">
							<p>Text</p>
							<p>Text</p>
							<p>Text</p>
							<p>Text</p>
							<p>Text</p>
						</div>

					</li></Link>
					<Link><li className="onclick relative first-list">

						<span className="flex items-center justify-between" onClick={() => setShowAccs(!showAccs)}>ACCESSORIES<IoMdArrowDropdown
							style={{ transform: showAccs ? "rotate(180deg)" : "rotate(0deg)" }} /></span>

						<div className={`onclick-drop-down ${showAccs && 'showOnClick'}`} >
							<p>Text</p>
							<p>Text</p>
						</div>

					</li></Link>
					<Link to="/collab"><li>Collab</li></Link>
					<Link to="/custom"><li>CUSTOM</li></Link>


					<Link><li className="hover relative first-list">

						MORE
						<div className=" drop-down ">
							<p>Text</p>
							<p>Text</p>
							<p>Text</p>
							<p>Text</p>
							<p>Text</p>
						</div>

					</li></Link>
					<Link><li className="onclick relative first-list">

						<span className="flex items-center justify-between" onClick={() => setShowMore(!showMore)}>MORE<IoMdArrowDropdown
							style={{ transform: showMore ? "rotate(180deg)" : "rotate(0deg)" }} /></span>

						<div className={`onclick-drop-down ${showMore && 'showOnClick'}`} >
							<p>Text</p>
							<p>Text</p>
						</div>

					</li></Link> */}
				</ul>
				<div onClick={() => setShowSideBar(false)} className={`blank-screen ${showSideBar && 'show-side-bar'}`}>

				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { cart: state.cart, user: state.user.user }
}

export default connect(mapStateToProps)(Header)
