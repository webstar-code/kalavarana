import React, { useState, useEffect } from 'react'
import '../../styles/productDes.css'
import Header from '../Header'
import { connect } from 'react-redux'
import { db, firestore } from '../../firebase'
import { addToWhislist } from '../../actions/wishlist'
import { addToCart, getCartItems } from '../../actions/cart'
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Size from '../product/Size'
import Color from '../product/Color'
import Msg from '../notification/Msg'
import Description from '../product/Description'
import Reviews from '../product/Reviews'
import SizeChart from '../product/SizeChart'
import RelatedProducts from '../product/RelatedProducts'
import SideCart from '../sideCart/SideCart'
import Fabric from '../product/Fabric'
import { PAINTING1 } from '../../assetsKalavarna'
import { useParams } from 'react-router-dom'

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
    firestore.collection('PRODUCTS').doc(productID).get()
      .then((doc) => {
        console.log(doc.data());
        setProduct(doc.data());
      }).catch((err) => {
        console.log(err);
      })
  }, [])



  if (quantity <= 0) {
    setCount(1)
  }


  const handleAddToCart = () => {
    props.addToCart({
      product: { ...product },
      quantity
    })
    props.getCartItems();
  }

  const handleWishList = () => {
    props.addToWhislist({
      ...product
    })
  }

  return (
    <>
      <Msg />
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center mt-20 md:mt-36">
        <div className="w-full h-full md:w-4/5 px-5 md:px-0  mt-10 grid grid-cols-1 md:grid-cols-2 place-items-start items-start justify-between">
          <div className="w-full flex justify-center items-center">
            <img src={PAINTING1} className=" md:max-w-xs h-full" />
          </div>
          <div className="h-full flex flex-col items-start justify-start pl-8">
            <div className="w-full flex justify-between items-start">
              <h1 className="text-2xl md:text-3xl font-medium">{product?.name}</h1>
              <div className="text-right">
                <h1 className="text-base md:text-3xl font-medium">{product?.mrp}</h1>
                <p className="inline-block text-sm text-gray-400">Discount Applied : {product?.discountPercentage}% off</p>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="flex justify-between">
                <p className="border-b border-opacity-50 w-full py-3">Width</p>
                <p className="font-semibold h-full border-b py-3 w-1/5 text-right">{product?.width}cm</p>
              </div>
              <div className="flex justify-between">
                <p className="border-b border-opacity-50 w-full py-3">Height</p>
                <p className="font-semibold h-full border-b py-3 w-1/5 text-right">{product?.height}cm</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm py-4 text-gray-400">{product?.description}</p>
            </div>
            <div className="handle-cart w-full flex flex-col md:flex-row items-start md:items-center justify-between mt-auto">
              <div className="flex ">
                <div className="w-9 h-9 flex items-center justify-center text-white border border-primary cursor-pointer bg-primary" onClick={() => setCount(quantity - 1)}>
                  <RemoveIcon />
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-primary border border-primary cursor-pointer bg-white">
                  {quantity}
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-white border border-primary cursor-pointer bg-primary " onClick={() => setCount(quantity + 1)}>
                  <AddIcon />
                </div>
              </div>

              <button onClick={handleAddToCart} className="bg-primary text-white h-9 px-8 py-2 border border-black flex justify-center items-center my-2 md:my-0 md:ml-5 mx-0 w-full whitespace-nowrap">
                ADD TO CART
              </button>
              <button onClick={handleWishList} className="text-primary h-9 px-8 py-2 border border-black flex justify-center items-center my-2 md:my-0 md:ml-5 mx-0 w-full whitespace-nowrap">
                ADD TO WISHLIST
              </button>

            </div>

          </div>


        </div>
        <Description text={dummyData?.description} />
        <Reviews productID={dummyData?.productID} />
        <RelatedProducts />
        <SideCart />
      </div>
    </>
  )
}

const mapStateToProsp = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    userId: state.user?.user?.userId,
  }
}
export default connect(mapStateToProsp, { addToWhislist, addToCart, getCartItems })(ProductDescription)


{/* <div className="sizes">
              <div className="size-chart">
                <p>Select Size</p>
                <p onClick={() => setShowSizeChart(true)}>SIZE CHART</p>
              </div>
              <div className="size-select">
                {
                  product?.sizes?.map((size, i) => (
                    <Size size={size.size}
                      key={i}
                      getSize={getSize}
                      i={i}
                      style={sizeActiveIndex === i ? { background: '#000', color: '#fff' } : { background: '#fff', color: '#000' }}
                    />
                  ))
                }


              </div>
            </div> */}

{/* <div className="custom-size">

            </div>
            <div className="colors">
              <div className="color-text">
                <p>SELECT COLOR</p>
                <p>CUSTOM TEXT</p>
              </div>
              <div className="color-select">
                <div className="color">
                  {product?.colors?.map((col, i) => (
                    <Color
                      key={i}
                      color={col.color}
                      i={i}
                      hex={col.hex}
                      getColor={getColor}
                      style={colorActiveIndex === i ? { border: '2px solid #000' } : { border: 'none' }}
                    />
                  ))}
                </div>
                <div className="custom-text">
                  <TextField value={coustomText} onChange={(e) => setCustomText(e.target.value)} id="standard-basic" label="TEXT HERE" />
                </div>
              </div>
              <p className="select-fabric">SELECT FABRIC</p>
              <div className="color fabric">

                {product?.fabrics?.map((col, i) => (
                  <Fabric
                    key={i}
                    fabric={col.fabric}
                    i={i}
                    hex={col.hex}
                    getFabric={getFabric}
                    style={fabricActiveIndex === i ? { border: '2px solid #000' } : { border: 'none' }}
                  />
                ))}
              </div>
            </div> */}
