import React, { useEffect, useState } from 'react'
import '../../styles/cart.css'
import { connect } from 'react-redux'
import { checkout } from '../../actions/checkout'
import SideCartItem from '../sideCart/SideCartItem'
import Header from '../Header'
import AddressCard from '../profile/AddressCard'
import AddressForm from '../profile/AddressForm'
import AddIcon from '@material-ui/icons/Add';
import Msg from '../notification/Msg'
import Coupon from '../cart/Coupon'
const Cart = (props) => {
	const [showForm, setShowForm] = useState(false)
	const [showPromo, setShowPromo] = useState(false)
	const [payOnline, setPayOnline] = useState(true)
	const [activeIndex, setActiveIndex] = useState(0)
	const [couponDiscount, setCouponDiscount] = useState(0)
	const [Code, setCode] = useState('')
	const [selectedAddress, setSelectedAddress] = useState(props.addresses[0])

	const getCodeNDiscount = (couponDiscount, code) => {
		setCouponDiscount(couponDiscount)
		setCode(code)
		console.log(couponDiscount, code)
		console.log(couponDiscount, Code)
	}

	const getActiveAdd = (addIndex, selecAdd) => {
		setActiveIndex(addIndex)
		setSelectedAddress(selecAdd)
		console.log(selecAdd);
	}


	const handleCheckout = () => {
		console.log(selectedAddress);
		props.checkout({
			address: selectedAddress,
			orderType: 'Paid Online',
			couponDiscount,
			Code
		})
	}

	return (
		<>
			<Msg />
			<Header />
			<div className="main-cart-container">
				<div className="main-cart-area">
					<div className="main-right-cart">
						<h1 className="text-2xl font-bold m-0 p-0">{props.cartItems.length} items {`(Item Total ${props.cartTotal})`}</h1>
						<div className="side-cart-items">
							{props.cartItems?.map((cart, i) => (
								<SideCartItem
									key={cart.product.id}
									product={cart.product}
									quantity={cart.quantity}
								/>
							))}
						</div>
					</div>
					<div className="main-cart-selection">
						<div className="selection-title">
							<h1 className="text-2xl font-bold m-0 p-0">Select Address</h1>
							<div onClick={() => setShowForm(true)}><AddIcon className="adress-add-icon" /></div>
						</div>
						<div className="address">
							{
								props.addresses.map((address, i) => (
									<AddressCard
										key={i} getActiveAdd={getActiveAdd}
										i={i}
										address={address}
										style={i === activeIndex ? { border: '3px solid #08263F' } : null}
									/>
								))
							}
						</div>

						<div className="payment-method">
							<h1 className="text-xl font-bold">Payment Mode</h1>
							<div className="payment-btns">
								{/* <button onClick={handleCOD} className={`${cashOnDelivery&& 'active'}`}>Cash On Delivery</button> */}
								<button className={`${payOnline && 'active'}`}>Pay Online</button>
							</div>
						</div>


						<div className="cupon-code-area">
							<div className="select-cupon">
								<h1 className="text-xl font-bold">Got a coupon ?</h1>
								<p onClick={() => setShowPromo(true)}>SELECT COUPON</p>
							</div>
							<div className="cupon-fields">
								<input value={Code} type="text" placeholder="coupon" />
								<button className="bg-primary">Apply</button>
							</div>
						</div>


						<div className="process-area ">
							<button className="bg-primary" onClick={handleCheckout}>Process</button>
						</div>
					</div>
				</div>
			</div>
			{showForm && <AddressForm setShowForm={setShowForm} />}
			{showPromo && <Coupon getCodeNDiscount={getCodeNDiscount} setShowPromo={setShowPromo} />}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart,
		cartTotal: state.cartTotal.total,
		addresses: state.addresses,
	}
}

export default connect(mapStateToProps, { checkout })(Cart)
