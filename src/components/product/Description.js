import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const Description = ({text}) => {
    return (
        <div className="product-review-area">
            <div className="review-perecent-area">
                 <h1>4.0</h1>
                 <div className="stars">
                 <StarIcon className="star-icon"/>
                     <StarIcon className="star-icon"/>
                     <StarIcon className="star-icon"/>
                     <StarIcon className="star-icon"/>
                     <StarBorderIcon className="star-icon"/>
                 </div>
                 <p>Based on 447 Reviews</p>
                 <div className="percentage">
                     <div className="per-area">
                         <p>4.0</p>
                         <div className="perLoader">
                             <span className="four"></span>
                         </div>
                      </div>
                     <div className="per-area">
                         <p>3.0</p>
                         <div className="perLoader">
                             <span className="three"></span>
                         </div>
                      </div>
                     <div className="per-area">
                         <p>2.0</p>
                         <div className="perLoader">
                             <span></span>
                         </div>
                      </div>
                     <div className="per-area">
                         <p>1.0</p>
                         <div className="perLoader">
                             <span></span>
                         </div>
                      </div>
                 </div>
            </div>
            <div className="product-des-text">
                <p>{text}</p>

                <h3>Measurements: 180 cm x 70 cm</h3>
            </div>
        </div>
    )
}

export default Description
