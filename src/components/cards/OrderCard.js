import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import CancleForm from '../orders/CancleForm'

const OrderCard = (props) => {
	const [cancel, setCancel] = useState(true)
	const [showCancleForm, setShowCancleForm] = useState(false)

	const OneDay = props.order.bookingTime + (1000 * 60 * 60 * 24)
	const dateNow = Date.now();

	useEffect(() => {
		if (dateNow > OneDay) {
			// The yourDate time is less than 1 days from now
			console.log('you can cancel')
			setCancel(true)
		}
		else if (OneDay < dateNow) {
			console.log('you canot cancel order')
			setCancel(false)
			// The yourDate time is more than 1 days from now
		}
	}, [])

	return (
		<>

			{props.order.items.map((item) => (
				<div className="flex w-full justify-start items-start my-4">
					<Link to={`/products/${item.product.id}`}>
						<div className="w-32 h-40 md:w-40 md:h-48">
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
						{props.order.state === 'delivered' && <p className="text-sm text-green-600 mb-2">DELIVERED</p>}
						{props.order.state === 'canceled' && <p className="text-sm text-red-600 mb-2">CANCELED</p>}
						<div className="order-btns">
							<p className="text-xs pt-2 underline text-right" > CONTACT SUPPORT</p>
						</div>

					</div>
					{showCancleForm && <CancleForm order={props.order} item={item} setShowCancleForm={setShowCancleForm} />}
				</div>
			))}

		</>
	)
}

export default OrderCard
