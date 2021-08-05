import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
const DressCard = ({name,price,originalPrice,widthFull}) => {
    return (
        <div className={`dress-card ${widthFull&& 'width-full'} `}>
            <div className="dress-img">
            <div className="on-sale">ON SALE</div>
            </div>
            <div className="dress-des">
                <div className="text">
                   <h3>{name}</h3>
                   <div className="price">
                        <p>{price}</p>
                        <p>{originalPrice}</p>
                   </div>
                </div>
                <div className="wishlist">
                    <BookmarkBorderIcon/>
                </div>
            </div>
        </div>
    )
}

export default DressCard
