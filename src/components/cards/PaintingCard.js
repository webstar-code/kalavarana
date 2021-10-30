import React, { useEffect, useState } from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';
import { RUPPEEICON } from '../../assetsKalavarna'
import { Link, Redirect } from 'react-router-dom';
import { addToWhislist, getWishList, deleteWishList } from '../../actions/wishlist';
import { connect } from 'react-redux';
import { history } from '../../history';
import CancelPrompt from '../CancelPrompt';
import Msg from '../notification/Msg'

const PaintingCard = (props) => {
    const product = props.product;
    const [saved, setSaved] = useState(false);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        props.wishlist.map((item) => {
            if (item.id === props.product.id) {
                setSaved(true);
            }
        })
    }, [props.wishlist]);

    const handleDeleteWishList = () => {
        props.deleteWishList(product.id, props.getWishList);
        setSaved(false);
        setShowModal(false)
    }

    const handleAddtoWishList = () => {
        if (props.user.id) {
            props.addToWhislist({
                ...product
            }, props.getWishList)
            setSaved(true);
        } else {
            history.push('/login')
        }

    }

    return (
        <>
            <div className="w-full">
                <Link
                    // to={`/products/${product.id}` } 
                    to={{ pathname: `/products/${product.id}` }}
                >
                    <div className="relative w-full">
                        <img src={product.picUrl} alt="" className="w-full" />

                        {product.onSale && <div className="w-14 h-7 md:w-16 md:h-8 text-xs md:text-sm flex items-center justify-center absolute top-0 right-0 m-4 bg-gray-200 p-1">ON SALE</div>}
                    </div>
                </Link>
                <div className="flex justify-between items-start py-2 px-1">
                    <div className="flex flex-col items-start">
                        <h3 className="text-base md:text-lg font-medium pb-2">{product.name}</h3>
                        <div className="flex items-center">
                            <img src={RUPPEEICON} className="w-4 h-4" />
                            <p className="text-lg font-medium">{product.discountedMrp}</p>
                            <p className="text-sm text-gray-400 line-through font-medium">{product.mrp}</p>

                        </div>
                    </div>
                    {saved ?
                        <div className="" onClick={() => setShowModal(true)}>
                            <Bookmark className="cursor-pointer" />
                        </div>
                        :
                        <div className="" onClick={() => handleAddtoWishList()}>
                            <BookmarkBorderIcon className="cursor-pointer" />
                        </div>
                    }
                </div >
            </div >
            {showModal && <CancelPrompt setShowModal={setShowModal} callback={handleDeleteWishList} message="Are you sure you want to remove this item from your wishlist?" />}
        </>
    )
}

const mapStateToProps = (state) => {
    return { wishlist: state.wishlist, user: state.user.user }
}

export default connect(mapStateToProps, { addToWhislist, getWishList, deleteWishList })(PaintingCard)