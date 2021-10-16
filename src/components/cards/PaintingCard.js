import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';
import { addToWhislist } from '../../actions/wishlist';
import { connect } from 'react-redux';

const PaintingCard = (props) => {
    const product = props.product;

    const handleAddtoWishList = () => {
        props.addToWhislist({
            ...product
        })
    }

    return (
        <div className="w-full">
            <Link to={`/products/${product.id}`}>
                <div className="relative w-full">
                    <img src={product.picUrl} alt="" className="w-full" />
                    {product.onSale && <div className="absolute top-0 right-0 m-4 bg-gray-200 p-1">ON SALE</div>}
                </div>
            </Link>
            <div className="flex justify-between items-start p-1">
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-medium pb-3">{product.name}</h3>
                    <div className="">
                        <p className="text-sm font-medium">{product.mrp}</p>
                        {/* <p>{product.orignalPrice}</p> */}
                    </div>
                </div>
                <div className="" onClick={() => handleAddtoWishList()}>
                    <BookmarkBorderIcon />
                </div>
            </div>
        </div >
    )
}
export default connect(null, { addToWhislist })(PaintingCard)