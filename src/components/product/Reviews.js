import React ,{useEffect}from 'react'
import Reviewform from './Reviewform'
import '../../styles/review.css'
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {connect} from 'react-redux'
import StarIcon from '@material-ui/icons/Star';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {db} from '../../firebase'
import { useState } from 'react';

const Reviews = (props) => {
    const [reviews,setReviews]=useState([])
    

    const getStart=(number)=>{
        if(number===5){
           return( <>
               <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
            </>)

        }
   if(number===4){
      return(
          <>
               <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
               <StarBorderIcon className="star-icon"/>
          </>
      )
  }
  if(number===3){
    return(<>
    <StarIcon className="star-icon"/>
     <StarIcon className="star-icon"/>
     <StarIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
</>)
  }
  if(number===2){
    return(<>
    <StarIcon className="star-icon"/>
     <StarIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
</>)
  }
  if(number===1){
   return( <>
    <StarIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
    <StarBorderIcon className="star-icon"/>
</>)
  }
  else{
      return;
  }
    }
 console.log(props?.productId)
    const getReviews=()=>{
        if(props?.userId && props?.productId){
            db.reviews
    .where('productId','==',props?.productId)
    .get()
    .then((sanpShot)=>{
        console.log(sanpShot.docs.map(db.formatedDoc))
        setReviews(sanpShot.docs.map(db.formatedDoc))
    })
    .catch((err)=>{
        console.log(err);
    })
        }
    }
 useEffect(()=>{
    getReviews()
 },[props?.userId,props.currentReview,props?.productId])
    
    return (
        <div className="all-reviews">
            <div className="reviews-que">
                <h1>Reviews</h1>
                <h1>Questions</h1>
            </div>
            <div className="review-form-area">
               <Reviewform productId={props.productId}/>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="SEARCH REVIEWS"/>
                <SearchIcon/>
            </div>
            <div className="review-search-btns">
                <button>QUALITY</button>
                <button>HIJABS</button>
                <button>MATERIALS</button>
                <button>SCARFS</button>
            </div>
          
              { reviews.map((review,i)=>(
                <div className="review-section">
                    <div className="single-review" key={i}>
                    <div className="top-sec">
                    <h1 className="reviewer-name">{review?.userName}</h1>
                    <div className="stars">
                   {getStart(review?.stars)}
                    </div>
                    </div>
                    <div className="bottom-section">
                        <p>{review?.reviewText}</p>
                    
                    </div>
                    {review?.ReviewImg&&(<div className="review-img">
                         <img src={review?.ReviewImg} alt="" />
                    </div>)}
                    </div>
                    </div>

              ))
               }

          
          <div className="panigation">
              <ArrowBackIosIcon className="arrow"/>
              <div className="panigation-number">
                  <p>1</p>
              </div>
              <ArrowForwardIosIcon className="arrow"/>
          </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{userId:state.user?.user?.userId,currentReview:state.currentReview}
}
export default connect(mapStateToProps)(Reviews)
//Love the colors , love the fabric definitely will purchase more 😍😍😍😍💛💛💛 Essential Chiffon Hijab - Sahara