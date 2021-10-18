import React, { useState } from 'react'
import '../styles/Header.css'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { FiShoppingCart, FiMenu } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import logo from '../assets/img/ana-logo.png'
import { KALAVARANA_LOGO } from '../assetsKalavarna';

// import {AiOutlineUser} from 'react-icons/ai'
const Header = (props) => {
	const [showSideBar, setShowSideBar] = useState(false)
	const [showSales, setShowSales] = useState(false)
	const [showTanjore, setTanjore] = useState(false)
	const [showTanjore2D, setTanjore2D] = useState(false)
	const [showTanjore3D, setTanjore3D] = useState(false)



	return (
		<div className="fixed border-b border-gray-200 bg-white top-0 left-0 flex flex-col w-full h-20 md:h-36 pt-4 px-3 z-10">
			<div className="w-full h-full md:w-4/5 mx-auto">
				<div className="w-full h-3/5 relative flex items-center justify-around">
					<div className="md:hidden" onClick={() => {setShowSideBar(true)}}>
						<FiMenu className="text-xl" />
					</div>
					<div className="absolute mx-auto">
						<Link to="/"><img src={KALAVARANA_LOGO} alt="KALAVARNA" className="w-auto h-12 md:h-20 md:mx-auto" /></Link>
					</div>
					<div className="flex ml-auto justify-evenly text-black">
						<BiSearch className="text-xl mx-3" />
						<Link to="/profile"><AiOutlineUser className="hidden md:block text-xl mx-3" /></Link>
						<Link to="/cart">
							<div className="relative">
								<span className="inline-block absolute -top-2 right-0 bg-primary w-4 h-4 text-white text-center text-xs rounded-full">{props.cart?.length}</span><FiShoppingCart className="text-xl mx-3" />
							</div>
						</Link>
					</div>
				</div>

				<div className="hidden w-full md:flex px-10 py-0 md:py-5 items-center justify-center ">
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
						<Link to={`/category/Category1`}>
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
						<Link to={`/category/Category2`}>
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

						<Link to={`/category/Category3`}>
							<li className="hover relative first-list whitespace-nowrap ">Tanjore3D Painting
								<div className="drop-down whitespace-nowrap">
									<p className="flex py-2">Sub-category1</p>
									<p className="flex py-2">Sub-category2</p>
									<p className="flex py-2">Sub-category3</p>
								</div>
							</li>
						</Link>
						<Link to={`/category/Category3`}>
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



						<Link to="/about"><li className="whitespace-nowrap">About us</li></Link>
						<Link to="/blog"><li className="whitespace-nowrap">Blog</li></Link>
						<Link to="/connect"><li className="whitespace-nowrap">Contact us</li></Link>
					</ul>
					<div onClick={() => setShowSideBar(false)} className={`blank-screen ${showSideBar && 'show-side-bar'}`}>

					</div>
				</div>

			</div>

		</div>
	)
}

const mapStateToProps = (state) => {
	return { cart: state.cart, user: state.user.user }
}

export default connect(mapStateToProps)(Header)
