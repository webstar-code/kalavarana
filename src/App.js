import './styles/global.css'
import React, { useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import { history } from './history'
import Profile from './components/pages/Profile'
import { auth, db } from './firebase'
import { connect } from 'react-redux'
import { getCartItems, getCartTotal } from './actions/cart'
import { getWishList } from './actions/wishlist'
import { getAddresses } from './actions/address'
import { getOrders } from './actions/orders'
import { userStateChanged } from './actions'
import Loading from './components/Loading'
import Adress from './components/profile/Adress'
import Orders from './components/pages/Orders'
import WhisList from './components/pages/WhisList'
import ProductDescription from './components/pages/ProductDescription'
import Checkout from './components/pages/Checkout'
import Cart from './components/pages/Cart'
import dummy from './dummy'
import Confirm from './components/pages/Confirm'
import PrivacyPolicy from './components/policies/PrivacyPolicy'
import Terms from './components/policies/Terms'
import Return from './components/policies/Return'
import Connect from './components/pages/Connect'
import Collab from './components/pages/Collab'
import Collections from './components/pages/Collections'
import Blog from './components/pages/Blog'
import SingleBlog from './components/pages/SingleBlog'
import Career from './components/pages/Career'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import ProfileNavigation from './components/profile/ProfileNavigation'
import Notification from './components/pages/Notification'
import Error from './components/pages/Error'
import SplashScreen from './components/splash-screen/SplashScreen'
import Category from './components/pages/Category'
import SubCategory from './components/pages/SubCategory'
import Featured from './components/pages/Featured'
import Sales from './components/pages/Sales'
import Header from './components/Header'

const App = (props) => {

    useEffect(() => {
        props.getCartTotal()
    }, [props.cart])

    useEffect(() => {
        if (props.user?.id) {
            props.getCartItems()
            props.getAddresses()
            props.getOrders()
            props.getWishList();
        }
    }, [props.user])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            // console.log(user)
            if (user) {
                const data = db.users.doc(user.uid).get().then(doc => {
                    // console.log(doc.data());
                    props.userStateChanged(db.formatedDoc(doc))
                })
            }
        })
        return unsubscribe
    }, [])
    // console.log(props.user)
    return (
        <>
            <SplashScreen />
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <div>
                        <Header />
                        <Route path="/" exact component={MainPage} />
                        <Route path="/sales" component={Sales} />
                        <Route path="/featured" component={Featured} />
                        <Route path="/category/:category" exact component={Category} />
                        <Route path="/category/:category/:sub_category" component={SubCategory} />
                        <Route path="/loader" component={Loading} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/profile/address" exact component={Adress} />
                        <Route path="/profile/orders" exact component={Orders} />
                        <Route path="/profile/whislist" exact component={WhisList} />
                        <Route path="/profile/orders" exact component={Orders} />
                        <Route path="/cart" exact component={Cart} />
                        <Route path="/checkout" exact component={Checkout} />
                        <Route path="/order-confirmed" exact component={Confirm} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:id" exact component={SingleBlog} />
                        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                        <Route path="/careers" exact component={Career} />
                        <Route path="/about" exact component={About} />
                        <Route path="/profile-and-details" component={ProfileNavigation} />
                        <Route path="/notification" component={Notification} />
                        <Route path="/products/:id" exact component={ProductDescription} />
                        <Route path="/terms" exact component={Terms} />
                        <Route path="/return-policy" exact component={Return} />
                        <Route path="/connect" exact component={Connect} />
                        <Route path="/collab" exact component={Collab} />
                        <Route path="/collections" exact component={Collections} />
                        <Route path="/error" exact component={Error} />
                        <Route component={NotFound} />
                    </ div>

                </Switch>
            </Router>
        </>
    )
}


const mapStateToProps = (state) => {
    return { user: state.user?.user, cart: state.cart }
}
export default connect(mapStateToProps, { userStateChanged, getCartItems, getCartTotal, getAddresses, getOrders, getWishList })(App)
