import React from 'react'
import '../../styles/orders.css'
import ProfileNavigation from '../profile/ProfileNavigation'
import { connect } from 'react-redux'
import Header from '../Header'
import OrderCard from '../cards/OrderCard'
import { PAINTING2 } from '../../assetsKalavarna'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';


const Orders = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // let fdate = new Date(props.orders[0].bookingTime);
    // let date = fdate.getDate();
    // let month = fdate.getMonth();
    // let year = fdate.getFullYear();
    // const placeDate = `${date} ${months[month]} ${year}`

    const formatDate = (ms) => {
        let fdate = new Date(ms);
        let date = fdate.getDate();
        let month = fdate.getMonth();
        let year = fdate.getFullYear();
        return `${date} ${months[month]} ${year}`
    }

    return (
        <>
            <div className="profile-page">
                <ProfileNavigation />
                <div className="w-full md:w-3/5 py-12 px-6 md:px-12 flex flex-col justify-center ml-auto ">
                    <div className="flex flex-col justify-start">
                        <h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium mb-4">
                            <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
                            My Orders</h1>
                        {
                            props.orders.length > 0 ? props.orders.map((order, i) => (
                                <div key={order.id}>
                                    <h2>{formatDate(order.bookingTime)}</h2>
                                    <OrderCard key={order.id} order={order} />
                                </div>
                            ))
                                : <h1>No orders yet</h1>
                        }
                        {/* <h2>03 FEBRUARY 2021</h2> */}
                        {/* <OrderCard/>*/}
                    </div>
                </div>
            </div>

        </>
    )
}
const mapStateToProps = (state) => {
    return { orders: state.orders }
}

export default connect(mapStateToProps)(Orders)
