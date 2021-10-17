import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import CancleForm from '../orders/CancleForm'
import { PAINTING2 } from '../../assetsKalavarna'

const OrderCard = (props) => {
	const [cancel, setCancel] = useState(true)
	const [showCancleForm, setShowCancleForm] = useState(false)
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let fdate = new Date(props.order.bookingTime);
	let date = fdate.getDate();
	let month = fdate.getMonth();
	let year = fdate.getFullYear();
	const placedDate = props.order.bookingTime;
	const OneDay = Date.now() + (1000 * 60 * 60 * 24);

	// const OneDay = new Date(`${months[props?.order?.bookingTime.getMonth()]} ${props?.order?.bookingTime.getDate()}, ${props?.order?.bookingTime.getFullYear()}`).getTime() + (1 * 24 * 60 * 60 * 1000)
	console.log('24 hour', OneDay, 'placed date', placedDate)
	console.log(OneDay > placedDate)
	useEffect(() => {
		if (OneDay > placedDate) {
			// The yourDate time is less than 1 days from now
			console.log('you can cancel')
			// setCancel(true)
		}
		else if (OneDay < placedDate) {
			console.log('you canot cancel order')
			// setCancel(false)
			// The yourDate time is more than 1 days from now
		}
	}, [])


	return (
		<>

			{/* <div className="flex w-4/5">
                <Link to={`/products/${order?.productId}`}>
                    <div className="w-36">
                        <img src={order.imageUrl} alt="product" />
                    </div>
                </Link>
                <div className="flex flex-col items-start ml-5 w-full">
                    <div className="flex justify-between w-full mb-3">
                        <h3 className="text-2xl font-semibold">{order.title}</h3>
                        <h3 className="text-2xl font-semibold">{order.price}</h3>
                    </div>
                    <div className="">
                        <p className="text-gray-400">{order.dimensions}</p>
                    </div>
                </div>
            </div>
 */}
			{props.order.items.map((item) => (
				<div className="order-card">
					<Link to={`/products/${item.product.id}`}>
						<div className="order-img">
							<img src={item.product.picUrl} alt="" />
						</div>
					</Link>
					<div className="order-des">
						<div className="order-title mb-2">
							<h3>{item.product.name}</h3>
						</div>
						{props.order.state === 'newOrder' && <p className="text-sm text-green-600 mb-2">PLACED</p>}
						{props.order.state === 'inPacking' && <p className="text-sm text-green-600 mb-2">PACKED</p>}
						{props.order.state === 'readyForDelivery' && <p className="text-sm text-green-600 mb-2">Ready</p>}
						{props.order.state === 'deliverd' && <p className="text-sm text-green-600 mb-2">DELIVERED</p>}
						{props.order.state === 'canceled' && <p className="text-sm text-red-600 mb-2">CANCELED</p>}
						<div className="order-btns">
							<div className="full-cancel flex flex-col items-start justify-start cancel-area">
								{(cancel && !props.order.cancled) ? <button onClick={() => setShowCancleForm(true)} className={`cancle-btn cancel`}>CANCEL PACKAGE</button> : <button className={`cancle-btn`}>CANCEL PACKAGE</button>}
								{cancel && <p className="text-xs pt-2 text-right" style={{ color: '#D10404CF' }}>WITHIN 24 HOURS OF PLACING ORDER</p>}
								{!cancel && <p className="text-xs pt-2 underline text-right" > CONTACT SUPPORT</p>}
							</div>
							{/* <div className="res-cancel flex flex-col items-end justify-end cancel-area">
								{(cancel && !props.order.cancled) ? <button onClick={() => setShowCancleForm(true)} className={`cancle-btn cancel`}>CANCEL PACKAGE</button> : <button className={`cancle-btn`}>CANCEL PACKAGE</button>}
								{cancel && <p className="text-xs pt-2 text-right" style={{ color: '#D10404CF' }}>WITHIN 24 HOURS OF PLACING ORDER</p>}
								{!cancel && <p className="text-xs pt-2 underline text-right" >CONTACT SUPPORT</p>}
							</div> */}
						</div>

					</div>
				</div>
			))}

			{showCancleForm && <CancleForm order={props.order} setShowCancleForm={setShowCancleForm} />}
		</>
	)
}

export default OrderCard
