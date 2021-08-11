import React from 'react'
import img from '../../assets/img/order-confiremd.png'
import Header from '../Header'
const Confirm = () => {
    return (
        <>
        <Header/>
        <div className="confirmed-order">
            <img src={img} alt="" />
            <h1 className="text-2xl font-bold mt-16 mb-6">Order has been placed!</h1>
            <p>You will be redirected in 5s..</p>
        </div>
        </>
    )
}

export default Confirm
