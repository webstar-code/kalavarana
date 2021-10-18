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
    let fdate = new Date(props.orders[0].bookingTime);
    let date = fdate.getDate();
    let month = fdate.getMonth();
    let year = fdate.getFullYear();
    const placeDate = `${date} ${months[month]} ${year}`
    return (
        <>
            <Header />
            <div className="profile-page">
                <ProfileNavigation />
                <div className="orders">
                    <h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
                        <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
                        My Orders</h1>
                    <h2>{placeDate}</h2>
                    {
                        props.orders.map((order, i) => (
                            <OrderCard key={order.id} order={order} />
                        ))
                    }
                    {/* <h2>03 FEBRUARY 2021</h2> */}
                    {/* <OrderCard/>*/}
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return { orders: state.orders }
}

export default connect(mapStateToProps)(Orders)
