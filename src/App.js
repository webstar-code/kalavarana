import './styles/global.css'
import React,{useEffect} from 'react'
import {Router ,Route,Switch} from 'react-router-dom'
import MainPage from './components/pages/MainPage'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Dressses from './components/pages/Dressses'
import {history} from './history'
import Profile from './components/pages/Profile'
import {auth,db} from './firebase'
import {connect} from 'react-redux'
import {getCartItems,getCartTotal} from './actions/cart'
import {getAddresses} from './actions/address'
import {userStateChanged} from './actions'
import Loading from './components/Loading'
import Adress from './components/profile/Adress'
import Orders from './components/pages/Orders'
import WhisList from './components/pages/WhisList'
import ProductDescription from './components/pages/ProductDescription'
import Cart from './components/pages/Cart'
import dummy from './dummy'
const App = (props) => {
   
    useEffect(()=>{
    props.getCartTotal()
    },[props.cart])

    useEffect(()=>{
        if(props.user?.userId){
         props.getCartItems()
         props.getAddresses()   
        }
        
      },[props.user?.userId])

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            console.log(user)
            if(user){
                const data= db.users.doc(user.phoneNumber).get().then(doc=>{
                    props.userStateChanged(db.formatedDoc(doc))
                 })
            }
        })
        return unsubscribe
        },[])
        console.log(props.user)
    return (
        <Router history={history}>
            <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route path="/loader" component={Loading}/>
          <Route path="/dresses" component={Dressses}/>
          <Route path="/profile/address" exact component={Adress}/>
          <Route path="/profile/orders" exact component={Orders}/>
          <Route path="/profile/whislist" exact component={WhisList}/>
          <Route path="/profile/orders" exact component={Orders}/>
          {/* <Route path="/checkout" exact component={dummy}/> */}
          <Route path="/cart" exact component={Cart}/>
          <Route path="/products/:id" exact component={ProductDescription}/>
          </Switch>
        </Router>
    )
}


const mapStateToProps=(state)=>{
    return{user:state.user?.user,cart:state.cart}
}
export default connect(mapStateToProps,{userStateChanged,getCartItems,getCartTotal,getAddresses})(App)
