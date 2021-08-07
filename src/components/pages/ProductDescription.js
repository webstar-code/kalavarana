import React,{useState,useEffect} from 'react'
import '../../styles/productDes.css'
import Header from '../Header'
import {connect} from 'react-redux'
import {db,firestore} from '../../firebase'
import {addToWhislist} from '../../actions/wishlist'
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
const ProductDescription = (props) => {
  console.log(props.id)
const [count,setCount]=useState(1)
const [showSizeChart,setShowSizeChart]=useState(false)
const [product,setProduct]=useState({})
const [selectedSize,setSelectedSize]=useState('')
const [selectedColor,setSelectedColor]=useState('')
console.log(product)
const getSize=(size)=>{
  setSelectedSize(size)
  console.log(size)
}

const getColor=(color)=>{
  console.log(color)
setSelectedColor(color)
}

useEffect(()=>{
 firestore.collection('spring-oasis-product').doc(props.id).get()
 .then((doc)=>{
   setProduct(db.formatedDoc(doc))
   console.log(product)
 })
},[])

    if(count<=0){
      setCount(1)
    }




const handleWishList=()=>{
  props.addToWhislist(
    props.id,
    product?.title,
    product?.originalPrice,
    product?.price,
    product?.imageUrl
    )
}

    return (
        <>
        <Msg/>
        {showSizeChart&&<SizeChart setShowSizeChart={setShowSizeChart}/>}
        <Header/>
        <div className="product-des-container">
            <div className="product-info-area">
                <div className="product-images">
                   <div className="main-img">
                      {product?.imageUrl&&<img src={product?.imageUrl} alt="" />}
                   </div>
                   <div className="all-imgs">
                     <div className="single-img">
                       <img src={product?.imageUrl} alt="" />
                     </div>
                     <div className="single-img">
                       <img src={product?.imageUrl} alt="" />
                     </div>
                     <div className="single-img">
                       <img src={product?.imageUrl} alt="" />
                     </div>
                     <div className="single-img">
                       <img src={product?.imageUrl} alt="" />
                     </div>
                   </div>
                </div>
                <div className="product-selection">
                   <div className="title-price">
                       <h1>{product?.title}</h1>
                       <h1> <span>Rs{product?.originalPrice}</span>Rs{product?.price}</h1>
                       
                   </div>
                   <div className="sizes">
                         <div className="size-chart">
                             <p>Select Size</p>
                             <p onClick={()=>setShowSizeChart(true)}>SIZE CHART</p>
                         </div>
                         <div className="size-select">
                           {
                             product?.sizes?.map((size,i)=>(
                              <Size size={size.size}
                              getSize={getSize}
                              />
                             ))
                           }
                             
                             
                        </div>  
                    </div>

                    <div className="custom-size">

                    </div>
                  <div className="colors">
                    <div className="color-text">
                     <p>SELECT COLOR</p>
                     <p>CUSTOM TEXT</p>
                    </div>
                    <div className="color-select">
                      <div className="color">
                         {product?.colors?.map((col,i)=>(
                           <Color
                           key={i}
                           color={col.color}
                           hex={col.hex}
                           getColor={getColor}
                           />
                         ))} 
                      </div>
                      <div className="custom-text">
                      <TextField id="standard-basic" label="TEXT HERE" />
                      </div>
                    </div>
                  </div>

                 
           <div className="handle-cart">
             <div className="quanity">
               <div className="decrease" onClick={()=>setCount(count-1)}>
                 <RemoveIcon/>
               </div>
               <div className="count">
                   {count}
               </div>
               <div className="increase" onClick={()=>setCount(count+1)}>
                <AddIcon/>
               </div>
             </div>

             <button className="add-to-cart-btn">
             ADD TO CART
             </button>
             <button onClick={handleWishList} className="add-to-wishlist">
             ADD TO WISHLIST
             </button>

           </div>

                </div>


            </div>

            <Description text={product?.description}/>
            <Reviews productId={product?.productId}/>
            <RelatedProducts/>
        </div>
        </>
    )
}

const mapStateToProsp=(state,ownProps)=>{
return{id:ownProps.match.params.id}
}
export default connect(mapStateToProsp,{addToWhislist})(ProductDescription)