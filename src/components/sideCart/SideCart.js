import React, { useEffect } from 'react'
import '../../styles/sidecart.css'
import CloseIcon from '@material-ui/icons/Close';
import { showCart } from '../../actions/cart'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SideCartItem from './SideCartItem';
const SideCart = (props) => {
  // console.log(props.cartItems);
  return (
    <div onClick={() => props.showCart(false)} className={`cart-full ${props.showcart && 'show-side-cart'}`}>
      <div className="side-cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart-title">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="close cursor-pointer" onClick={() => props.showCart(false)}>
            <CloseIcon />
          </div>
        </div>
        {props.cartItems.length == 0 && 
        <div className="w-full flex items-start justify-center pt-28">
          <p className="text-3xl font-medium text-gray-400">Your Cart is Empty</p>
        </div>
        }
        <div className="side-cart-items">
          {props.cartItems?.map((cart, i) => (
            <SideCartItem
              key={cart.product.id}
              product={cart.product}
              quantity={cart.quantity}
            />
          ))}
        </div>
        <div className="side-cart-des">
          <div className="side-cart-check flex justify-between bg-gray-200">
            <p>{props.cartItems.length}</p>
            <p>INR {props.total}</p>
          </div>
          <div className="side-cart-check">
            <Link to="/cart"><button>CHECKOUT</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { cartItems: state.cart, showcart: state.showcart.showcart, total: state.cartTotal.total }
}

export default connect(mapStateToProps, { showCart })(SideCart)
