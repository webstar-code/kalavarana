import React ,{useState}from 'react'
import '../../styles/cart.css'
import {connect} from 'react-redux'
import SideCartItem from '../sideCart/SideCartItem'
import Header from '../Header'
import AddressCard from '../profile/AddressCard'
import AddressForm from '../profile/AddressForm'
import AddIcon from '@material-ui/icons/Add';
import Msg from '../notification/Msg'
import Coupon from '../cart/Coupon'
const Cart = (props) => {
    const [showForm,setShowForm]=useState(false)
    const [showPromo,setShowPromo]=useState(false)
    return (
        <>
        <Msg/>
        <Header/>
        <div className="main-cart-container">
            <div className="main-cart-area">
                <div className="main-right-cart">
                  <h1 className="text-2xl font-bold m-0 p-0">{props.cartItems.length} items {`(Item Total ${props.total})`}</h1>
                  <div className="side-cart-items">
                  {props.cartItems?.map((cart,i)=>(
                  <SideCartItem
                  key={cart.id}
                  id={cart.id}
                  productId={cart.productId}
                  title={cart.title}
                  quanity={cart.quanity}
                  imageUrl={cart.imageUrl}
                  price={cart.price}
                  totalPrice={cart.totalPrice}
                  color={cart.color}
                  size={cart.size}
                  />
                ))}
                  </div>
                </div>
                <div className="main-cart-selection">
                <div className="selection-title">
                    <h1 className="text-2xl font-bold m-0 p-0">Select Address</h1>
                   <div onClick={()=>setShowForm(true)}><AddIcon  className="adress-add-icon"/></div>
                </div>
                  <div className="address">
                  {
                    props.addresses.map((add,i)=>(
                        <AddressCard key={i} add={add}/>
                    ))
                }
                  </div>

                  <div className="payment-method">
                      <h1 className="text-xl font-bold">Payment Mode</h1>
                      <div className="payment-btns">
                          <button>Cash On Delivery</button>
                          <button>Pay Online</button>
                      </div>
                  </div>


                  <div className="cupon-code-area">
                      <div className="select-cupon">
                      <h1 className="text-xl font-bold">Got a coupon ?</h1>
                      <p onClick={()=>setShowPromo(true)}>SELECT COUPON</p>
                      </div>
                      <div className="cupon-fields">
                        <input type="text" placeholder="coupon" />
                        <button>Apply</button>
                      </div>
                  </div>


                  <div className="process-area">
                      <button>Process</button>
                  </div>
                </div>
            </div>
        </div>
        {showForm&&<AddressForm setShowForm={setShowForm}/>}
        {showPromo&&<Coupon setShowPromo={setShowPromo}/>}
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartItems:state.cart,
        total:state.cartTotal.total,
        addresses:state.addresses,
    }
}
    
export default connect(mapStateToProps)(Cart)
