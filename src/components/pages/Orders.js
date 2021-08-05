import React from 'react'
import '../../styles/orders.css'
import ProfileNavigation from '../profile/ProfileNavigation'
import Header from '../Header'
import OrderCard from '../cards/OrderCard'
const Orders = () => {
    return (
        <>
        <Header/>
        <div className="profile-page">
            <ProfileNavigation/>
            <div className="orders">
                <h2>03 JANUARY 2021</h2>
               <OrderCard/>
               <OrderCard/>
               <h2>03 FEBRUARY 2021</h2>
               <OrderCard/>
            </div>
        </div>
        </>
    )
}

export default Orders
