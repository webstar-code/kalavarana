import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';

const PaintingCard = ({ name, price, originalPrice, widthFull, id, imageUrl, overflow }) => {
    return (
        <Link to={`/products/${id}`}>
            <div className={`dress-card ${widthFull && 'width-full'} ${overflow && 'custom-width'}`}>
                <div className="relative w-72">
                    {imageUrl && <img src={imageUrl} alt="" />}
                    <div className="absolute top-0 right-0 m-4 bg-gray-200 p-1">ON SALE</div>
                </div>
                <div className="flex justify-between items-start p-2">
                    <div className="flex flex-col items-start">
                        <h3 className="text-sm font-medium">{name}</h3>
                        <div className="price">
                            <p className="text-sm font-medium">Rs{price}</p>
                            <p>Rs{originalPrice}</p>
                        </div>
                    </div>
                    <div className="wishlist">
                        <BookmarkBorderIcon />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PaintingCard
