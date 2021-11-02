import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { history } from '../../history'
import { firestore } from '../../firebase'
import { connect } from 'react-redux'
import { getCartItems } from '../../actions/cart'
import { placeOrder } from '../../actions/orders'
import InfoIcon from '@material-ui/icons/Info'
import SideCartItem from '../sideCart/SideCartItem'
import AddressCard from '../profile/AddressCard'
import { KALAVARANA_LOGO } from '../../assets'
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Checkout = (props) => {
	const donation = 50;
	const [grandTotal, setGrandTotal] = useState((props.checkout.total + props.checkout.deliveryCharge) - props.checkout.couponDiscount);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		// console.log("checked");
		if (checked) {
			setGrandTotal(grandTotal + donation);
		} else {
			setGrandTotal((props.checkout.total + props.checkout.deliveryCharge) - props.checkout.couponDiscount);
		}
	}, [checked]);

	// for offline testing purpose
	const handlePlaceOrder = () => {
		props.placeOrder({ ...props.checkout, grandTotal, isPaymentDone: true, paymentId: '123456', donation }, props.getCartItems)
	}

	const loadScripts = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement('script');
			script.src = src;

			script.onload = () => {
				resolve(true)
			}
			script.onerror = () => {
				resolve(false)
			}
			document.body.appendChild(script);
		})
	}

	const options = {
		"key": "rzp_live_IQokpoxhzmIjtY", // Enter the Key ID generated from the Dashboard
		"currency": 'INR',
		"amount": grandTotal * 100,
		"name": "Kalavarana",
		"image": KALAVARANA_LOGO,
		"description": props.user.name,
		//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
		"handler": function (response) {
			props.placeOrder({ ...props.checkout, grandTotal, paymentId: response.razorpay_payment_id, isPaymentDone: true, donation })
			// console.log(response)
			const payRef = firestore.collection('PAYMENTS')
				.doc(props.user.email).set({
					razorpay_payment_id: response.razorpay_payment_id
				})
				.then(() => {
					console.log('saved sucessfully')
				})
		},
		"prefill": {
			"name": props.user.name,
			"email": props.user.email,
			"contact": props.user.phoneNumber
		},
	};

	const displayRazorpay = async () => {
		const res = await loadScripts('https://checkout.razorpay.com/v1/checkout.js');
		if (!res) {
			history.push('/Error')
		}
		const paymentObject = new window.Razorpay(options);
		paymentObject.on('payment.failed', function (response) {
			history.push('/Error')
		});
		paymentObject.open();
	}

	return (
		<>
			{!props.user.id && <Redirect to='/login' />}
			<div className="mt-8 w-full h-full flex flex-col justify-center">
				<div className="w-11/12 mx-auto flex items-center">
					<span onClick={() => history.goBack()} className="">
						<KeyboardBackspaceIcon className="text-4xl mr-4 cursor-pointer" />
					</span>
					<h1 className="text-4xl font-semibold text-primary">Checkout</h1>
				</div>
				<div className="main-cart-area mx-auto">

					<div className="main-right-cart">
						<h1 className="text-2xl font-bold m-0 p-0">{props.cartItems.length} Items</h1>
						<div className="side-cart-items">
							{props.cartItems.length > 0 ? props.cartItems?.map((cart, i) => (
								<SideCartItem
									key={cart.id}
									product={cart.product}
									quantity={cart.quantity}
									disable
								/>
							)) :
								<div className="w-full flex items-start justify-center pt-28">
									<p className="text-3xl font-medium text-gray-400">Your Cart is Empty</p>
								</div>
							}
						</div>
					</div>
					<div className="main-cart-selection">
						<h1 className="text-xl font-bold">Delivering to,</h1>
						<div className="address">
							<AddressCard
								address={props.checkout.address}
								disable
							/>
						</div>
						<div className="subtotal-section">
							<h1 className="text-xl font-bold mb-3">Total Price</h1>
							<div className="table">
								<div className="price-item">
									<p>Item Total</p><p>{props.total}</p>
								</div>
								<div className="price-item">
									<p>Delivery Charges</p><p>{props.checkout.deliveryCharge}</p>
								</div>
								{props.checkout.couponDiscount > 0 &&
									<div className="price-item">
										<p>Discount</p><p>-{props.checkout.couponDiscount}</p>
									</div>
								}
								<div className={`price-item ${checked ? 'bg-gray-200' : 'bg-white'}`}>
									<div className={`flex items-center -ml-2 `}>
										<Checkbox
											color="primary"
											size="small"
											checked={checked}
											onChange={() => {
												setChecked(!checked);
											}}
											inputProps={{ 'aria-label': 'checkbox with small size' }}
										/>
										<p>I would like to donate</p>
										{/* <Link to=""> */}
										<div className="group relative">
											<InfoIcon className="text-primary text-xs ml-2 cursor-pointer " style={{width: '20px',height: '20px'}} />
											<div className=" text-xs w-72 -ml-36 opacity-0 group-hover:opacity-100 bg-primary text-white p-1 rounded text-center absolute z-10 left-1/2 bottom-full">
												This donation goes to one of the charity partners
											</div>
										</div>
										{/* </Link> */}
									</div>
									<p>{donation}</p>
								</div>
								<div className="price-item">
									<p className="font-bold">Grand Total</p><p className="font-bold">{grandTotal} Rs</p>
								</div>
								<p className="text-xs text-left mt-2" style={{ width: '100%' }}>*All prices are inclusive of taxes</p>
							</div>
						</div>

						<div className="process-area ">
							<button className="bg-primary" onClick={() => displayRazorpay()}>Pay Online</button>
							{/* <button className="bg-primary" onClick={() => handlePlaceOrder()}>Pay Online</button> */}

						</div>
					</div>

				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart,
		checkout: state.checkout?.checkout,
		total: state.cartTotal.total,
		user: state.user?.user
	}
}

export default connect(mapStateToProps, { placeOrder, getCartItems })(Checkout)
