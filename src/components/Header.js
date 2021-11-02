import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { FiShoppingCart, FiMenu } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { KALAVARANA_LOGO2X } from '../assets';
import { firestore } from '../firebase'

const Header = (props) => {
	const [showSideBar, setShowSideBar] = useState(false)
	const [categories, setCategories] = useState([]);
	const [showHeader, setShowHeader] = useState({ show: true, scrollPos: 0 });

	useEffect(() => {
		console.log("useEffect")
		let items = [];
		firestore.collection('CATAGORIES').get().then((snapshot) => {
			for (let i = 0; i < snapshot.docs.length; i++) {
				items[i] = { cat: snapshot.docs[i].data(), subcats: [] };
				firestore.collection('SUB-CATAGORIES').get().then((querySnapshot) => {
					querySnapshot.forEach(doc => {
						let x = doc.data();
						if (x.category.name === snapshot.docs[i].data().name) {
							items[i].subcats.push({ ...x });
						}
					})
				})
			}
			console.log(items);
			setCategories(items);
		}).
			catch(err => console.log(err));
	}, []);

	useEffect(() => {

	}, [categories])

	const handleScroll = () => {
		if (window.scrollY < 100) {
			setShowHeader((prev) => ({ ...showHeader, show: true }));
		} else {
			setShowHeader((prev) => ({
				scrollPos: document.body.getBoundingClientRect().top,
				show: document.body.getBoundingClientRect().top > prev.scrollPos
			}))
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const path = useLocation().pathname;

	if (path === '/login' || path === '/signup' || path === '/checkout') {
		return null;
	}

	return (
		<div className={`fixed border-b border-gray-200 bg-white top-0 left-0 flex flex-col w-full h-20 md:h-36 pt-4 px-3 z-20 transition-all
			${!showHeader.show ? '-top-20 md:-top-36' : 'top-0'} 
		`}>
			<div className="w-full h-full md:w-4/5 mx-auto">
				<div className="div">
				</div>
				<div className="w-full h-3/5 relative flex items-center justify-around">
					<div className="md:hidden" onClick={() => { setShowSideBar(true) }}>
						<FiMenu className="text-xl" />
					</div>
					<div className="absolute mx-auto">
						<Link to="/"><img src={KALAVARANA_LOGO2X} alt="KALAVARNA" className="w-auto h-12 md:h-20 md:mx-auto" /></Link>
					</div>
					<div className="flex ml-auto justify-evenly text-black">
						{/* <BiSearch className="text-xl mx-3" /> */}
						<Link to={!props.user.id ? '/login' : '/profile'}><AiOutlineUser className="hidden md:block text-xl mx-3" /></Link>
						<Link to="/cart">
							<div className="relative">
								<span className="inline-block absolute -top-2 right-0 bg-primary w-4 h-4 text-white text-center text-xs rounded-full">{props.cart?.length}</span><FiShoppingCart className="text-xl mx-3" />
							</div>
						</Link>
					</div>
				</div>

				<div className="w-full md:flex px-10 py-0 md:py-5 items-center justify-center ">
					<ul className={`nav-links ${showSideBar && 'show-side-bar'} cursor-pointer upper-case flex items-center select-none z-50`}>

						<div className="profile bg-primary justify-start">

							{props.user.id ? <Link to="/profile-and-details" onClick={() => setShowSideBar(false)}> <AiOutlineUser className="user-icon" /></Link>
								:
								<div className="w-full h-full flex items-center justify-center">
									<Link to="/login" onClick={() => setShowSideBar(false)}>
										<button className="bg-white text-primary uppercase px-4 py-2">Login</button>
									</Link>
								</div>
							}
							<p className="px-3">{props.user?.name}</p>
						</div>

						<Link to="/sales" onClick={() => setShowSideBar(false)}>
							<li className="relative">Sales</li>
						</Link>
						{categories.length > 0  && categories.map((item) => (
							<>
								<Link to={`/category/${item.cat.name}`} key={item.cat.id} onClick={() => setShowSideBar(false)}>
									<li className="hover relative first-list whitespace-nowrap">{item.cat.name}
										{item.subcats.length > 0 && item.subcats ?
											<div className="drop-down whitespace-nowrap">
												{item.subcats.map((subcat) => (
													<Link to={`/category/${item.cat.name}/${subcat.name}`} key={subcat.id}>
														<p className="flex py-2">{subcat.name}</p>
													</Link>
												))}
											</div>
										: null}
									</li>
								</Link>
								<ListItem item={item} setShowSideBar={setShowSideBar} key={item.cat.name} />
							</>
						))}

						<Link to="/about" onClick={() => setShowSideBar(false)}><li className="whitespace-nowrap">About us</li></Link>
						<Link to="/blog" onClick={() => setShowSideBar(false)}><li className="whitespace-nowrap">Blog</li></Link>
						<Link to="/connect" onClick={() => setShowSideBar(false)}><li className="whitespace-nowrap">Contact us</li></Link>
					</ul>
					<div onClick={() => setShowSideBar(false)} className={`blank-screen ${showSideBar && 'show-side-bar'}`}>
					</div>
				</div>
			</div>
		</div >
	)
}


const ListItem = ({ item, setShowSideBar }) => {
	const [state, setState] = useState();
	return (
		<li className="onclick relative first-list whitespace-nowrap outline-none focus:outline-none select-none" key={item.cat.name}>
			<span className="flex items-center justify-between" >
				<Link to={`/category/${item.cat.name}`} onClick={() => setShowSideBar(false)}>
					<p>{item.cat.name}</p>
				</Link>
				<IoMdArrowDropdown className="text-base" onClick={() => setState(!state)} style={{ transform: state ? "rotate(180deg)" : "rotate(0deg)" }} />
			</span>
			<div className={`onclick-drop-down ${state && 'showOnClick'}`}>
				{item.subcats.length > 0 && item.subcats.map((subcat) => (
					<Link to={`/category/${item.cat.name}/${subcat.name}`} onClick={() => setShowSideBar(false)} key={subcat.name}>
						<p className="flex py-2">{subcat.name}</p>
					</Link>
				))}
			</div>
		</li>

	)

}



const mapStateToProps = (state) => {
	return { cart: state.cart, user: state.user.user }
}

export default connect(mapStateToProps)(Header)
