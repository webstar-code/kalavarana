import React, { useState, useEffect } from 'react'
import '../../styles/productDes.css'
import Header from '../Header'
import { connect } from 'react-redux'
import { firestore } from '../../firebase'
import { addToWhislist, getWishList } from '../../actions/wishlist'
import { addToCart, getCartItems, getLocalCartItems, showCart } from '../../actions/cart'
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Msg from '../notification/Msg'
import Rating from '../product/Rating'
import Reviews from '../product/Reviews'
import RelatedProducts from '../product/RelatedProducts'
import SideCart from '../sideCart/SideCart'
import { PAINTING1 } from '../../assetsKalavarna'
import { useParams } from 'react-router-dom'
import { RUPPEEICON } from '../../assetsKalavarna'
import { history } from '../../history'
import Footer from '../Footer'
import localdb from '../../localDB'

const dummyData = {
  picUrk: PAINTING1,
  name: 'Ganesh Painting',
  mrp: 560,
  description: `The Painting is 100% handmade made with original 22 carat gold leaves and authentic 
  Jaipur gems by skilled artisans in Tanjore (Thanjavur). Beautiful gift for any auspicious occasion.`

}


const ProductDescription = (props) => {
  let productID = useParams().id;
  const [product, setProduct] = useState({})
  const [quantity, setCount] = useState(1)

  useEffect(() => {
    props.showCart(false);
    firestore.collection('PRODUCTS').doc(productID).get()
      .then((doc) => {
        // console.log(doc.data());
        setProduct(doc.data());
      }).catch((err) => {
        console.log(err);
      })


      if(props.cartItems.length > 0) {
        props.cartItems.map((item) => {
          if(item.product.id === productID) {
            setCount(item.quantity);
          }
        })
      }

  }, [useParams().id])

  // useEffect(() => {
  // }, [pathname]);

  if (quantity <= 0) {
    setCount(1)
  }


  const handleAddToCart = () => {
    console.log(props.user);
    if (props.user.id) {
      console.log("Add");
      props.addToCart({
        product: { ...product },
        quantity
      }, props.getCartItems)
    } else {
      console.log("local")
      localdb.transaction('rw', localdb.cart, () => {
        localdb.cart.put({
          id: productID,
          product: { ...product },
          quantity
        });
      }).then(() => {
        // add to cart
        // dispatch(showCart(true))
        props.showCart(true);

        props.getLocalCartItems();
      })
        .catch(function (e) {
          console.log(e);
        });

    }
  }

  const handleWishList = () => {
    if (props.user.id) {
      props.addToWhislist({
        ...product
      }, props.getWishList)
    } else {
      history.push('/login');
    }
  }

  return (
    <>
      <div className="w-full">

        <Msg />
        <div className="w-full h-full flex flex-col items-center justify-center mt-20 md:mt-36">
          <div className="w-full h-full md:w-4/5 px-5 md:px-0  mt-10 grid grid-cols-1 md:grid-cols-2 place-items-start items-start justify-between">
            <div className="w-full flex justify-center items-center">
              <img src={PAINTING1} className=" md:max-w-xs h-full" />
            </div>
            <div className="w-full h-full flex flex-col items-start justify-start px-4 md:px-0">
              <div className="w-full flex justify-between items-start py-4 md:py-0">
                <div>
                  <h1 className="text-2xl md:text-3xl font-medium">{product?.name}</h1>
                  {product?.outOfStock && <p className="text-red-500 text-sm py-2">Out of Stock</p>}
                </div>
                <div className="text-right">
                  <div className="flex justify-end items-center md:items-start">
                    <img src={RUPPEEICON} className="w-6 h-6 md:w-8 md:h-8 self-end" />
                    <h1 className="text-xl md:text-3xl font-medium">{product?.discountedMrp}</h1>
                    <h1 className="text-lg md:text-2xl font-medium line-through text-gray-400">{product?.mrp}</h1>
                  </div>
                  {product?.discountPercentage ?
                    <p className="inline-block text-xs md:text-sm text-gray-400">Discount Applied : {product?.discountPercentage}% off</p>
                    : product?.flatDiscountAmount ?
                      <p className="inline-block text-xs md:text-sm text-gray-400">flat discount amount : {product?.flatDiscountAmount} off</p>
                      : null
                  }
                </div>
              </div>
              <div className="flex flex-col w-1/2 py-2 md:py-0">
                <div className="flex justify-between">
                  <p className="border-b border-opacity-50 w-full py-3">Width</p>
                  <p className="font-semibold h-full border-b py-3 w-1/5 text-right">{product?.width}cm</p>
                </div>
                <div className="flex justify-between">
                  <p className="border-b border-opacity-50 w-full py-3">Height</p>
                  <p className="font-semibold h-full border-b py-3 w-1/5 text-right">{product?.height}cm</p>
                </div>
              </div>
              <div className="flex flex-col py-4 md:py-0">
                <p className="text-sm py-4 text-gray-400">{product?.description}</p>
              </div>
              <div className="handle-cart w-full flex flex-col md:flex-row items-start md:items-center justify-between mt-auto py-4 md:py-0">
                <div className="flex ">
                  <button disabled={product?.outOfStock ? true : false}
                    className={`w-9 h-9 flex items-center justify-center text-white border border-primary bg-primary ${product?.outOfStock ? 'opacity-70 cursor-default' : 'opacity-100 cursor-pointer'}`}
                    onClick={() => setCount(quantity - 1)}>
                    <RemoveIcon />
                  </button>
                  <div className="w-9 h-9 flex items-center justify-center text-primary border border-primary cursor-pointer bg-white">
                    {quantity}
                  </div>
                  <button disabled={product?.outOfStock ? true : false}
                    className={`w-9 h-9 flex items-center justify-center text-white border border-primary bg-primary ${product?.outOfStock ? 'opacity-70 cursor-default' : 'opacity-100 cursor-pointer'}`}
                    onClick={() => setCount(quantity + 1)}>
                    <AddIcon />
                  </button>
                </div>

                <button onClick={handleAddToCart} disabled={product?.outOfStock ? true : false}
                  className={`bg-primary text-white h-9 px-8 py-2 border border-black flex justify-center items-center my-2 md:my-0 md:ml-5 mx-0 w-full whitespace-nowrap ${product?.outOfStock ? 'opacity-70' : 'opacity-100'}`}>
                  ADD TO CART
                </button>
                <button onClick={handleWishList} className="text-primary h-9 px-8 py-2 border border-black flex justify-center items-center my-2 md:my-0 md:ml-5 mx-0 w-full whitespace-nowrap">
                  ADD TO WISHLIST
                </button>

              </div>

            </div>


          </div>
          {/* <Rating text={dummyData?.description} />
          <Reviews productID={dummyData?.productID} /> */}
          {product.subcategories && <RelatedProducts category={product?.categories} subcats={product?.subcategories} />}
          <SideCart />
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProsp = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    user: state.user?.user,
    cartItems: state.cart
  }
}
export default connect(mapStateToProsp, { addToWhislist, addToCart, getCartItems, getLocalCartItems,getWishList, showCart })(ProductDescription)