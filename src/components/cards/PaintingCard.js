import React, { useEffect, useState } from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';
import { RUPPEEICON } from '../../assetsKalavarna'
import { Link } from 'react-router-dom';
import { addToWhislist, getWishList, deleteWishList } from '../../actions/wishlist';
import { connect } from 'react-redux';

const PaintingCard = (props) => {
    const product = props.product;
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        props.wishlist.map((item) => {
            if (item.id === props.product.id) {
                setSaved(true);
            }
        })
    }, []);

    const handleDeleteWishList = () => {
        props.deleteWishList(product.id, props.getWishList);
        setSaved(false);
    }

    const handleAddtoWishList = () => {
        props.addToWhislist({
            ...product
        }, props.getWishList)
        setSaved(true);

    }

    return (
        <div className="w-full">
            <Link to={`/products/${product.id}`}>
                <div className="relative w-full">
                    <img src={product.picUrl} alt="" className="w-full" />
                    {product.onSale && <div className="absolute top-0 right-0 m-4 bg-gray-200 p-1">ON SALE</div>}
                </div>
            </Link>
            <div className="flex justify-between items-start py-2 px-1">
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-medium pb-2">{product.name}</h3>
                    <div className="flex items-center">
                        <img src={RUPPEEICON} className="w-4 h-4" />
                        <p className="text-lg font-medium">{product.discountedMrp}</p>
                        <p className="text-sm text-gray-400 line-through font-medium">{product.mrp}</p>

                    </div>
                </div>
                {saved ?
                    <div className="" onClick={() => handleDeleteWishList()}>
                        <Bookmark className="cursor-pointer" />
                    </div>
                    :
                    <div className="" onClick={() => handleAddtoWishList()}>
                        <BookmarkBorderIcon className="cursor-pointer" />
                    </div>
                }
            </div >
        </div >

    )
}

const mapStateToProps = (state) => {
    return { wishlist: state.wishlist }
}

export default connect(mapStateToProps, { addToWhislist, getWishList, deleteWishList })(PaintingCard)