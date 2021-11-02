import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { deleteCartItem, updateCartQauntity, getCartItems, getLocalCartItems } from '../../actions/cart'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { RUPPEEICON } from '../../assetsKalavarna'
import CancelPrompt from '../CancelPrompt';
import localdb from '../../localDB'

const SideCartItem = (props) => {
    const location = useLocation().pathname
    const [Quantity, setQuantity] = useState(props.quantity)
    const [maxQuantityReached, setMaxQuantityReached] = useState(false);
    const [showModal, setShowModal] = useState(false)

    console.log(Quantity);

    useEffect(() => {
        if(props.quantity === props.product.stock) {
            setMaxQuantityReached(true);
        }else{
            setMaxQuantityReached(false);
        }
        setQuantity(props.quantity);
    }, [props]);

    if (Quantity <= 0) {
        setQuantity(1)
    }
    useEffect(() => {
        if (props.user.id) {
            // if (props.quantity >= props.product.stock) {
            //     setQuantity(props.quantity);
            //     setMaxQuantityReached(true);
            // }
            if (!props.disable) {
                props.updateCartQauntity(props.product.id, Quantity, props.getCartItems)
            }
        } else {
            // update local cart items
            console.log(Quantity);
            localdb.cart.where('id').equals(props.product.id).modify({ quantity: Quantity });
            props.getLocalCartItems();
        }
    }, [Quantity])

    const handleDelete = () => {
        if (props.user.id) {
            props.deleteCartItem(props.product.id, props.getCartItems)
        } else {
            localdb.cart.where('id').equals(props.product.id).delete();
            props.getLocalCartItems();
        }

    }

    return (
        <div className="side-cart-item">
            <Link to={location.pathname === '/products' ? `/${props.product.id}` : `/products/${props.product.id}`}>
                <div className="side-cart-item-img">
                    <img src={props.product.picUrl} alt="" />
                </div>
            </Link>
            <div className="side-cart-item-des pl-4 ">
                <div className="item-des">
                    <p className="text-lg font-medium mb-3">{props.product.name}</p>
                    <div className="flex items-center">
                        <img src={RUPPEEICON} className="h-5 w-5 mb-3 self-end" />
                        <p className="text-md font-medium mb-3">{props.product.discountedMrp}</p>
                        <p className="text-sm font-medium mb-3 line-through text-gray-400">{props.product.mrp}</p>
                    </div>
                    {props.product.outOfStock && <p className="text-sm text-red-500 mb-3">Out of Stock</p>}
                    {maxQuantityReached && <p className="text-sm text-red-500 mb-3">Max Quantity Reached</p>}
                </div>
                <div className="item-handler">
                    <div className="item-quanity">
                        {!props.disable && <button onClick={() => {setQuantity(props.quantity - 1)
                                setMaxQuantityReached(false);
                            }}>-</button>}
                        <p>{props.quantity}</p>
                        {!props.disable && <button onClick={() => {
                            if (Quantity == props.product?.stock) {
                                setQuantity(Quantity);
                                setMaxQuantityReached(true);
                            } else {
                                setMaxQuantityReached(false);
                                setQuantity(Quantity + 1);
                            }
                        }}>+</button>}
                    </div>
                    {!props.disable && <div className="trash-btn">
                        <button onClick={() => setShowModal(true)} className="p-2 hover:bg-gray-100 rounded-full"><DeleteOutlineIcon /></button>
                        {showModal && <CancelPrompt setShowModal={setShowModal} callback={handleDelete} message="Are you sure you to remove the item from your cart?" />}
                    </div>}

                </div>
            </div>
        </div>
    )
}

const mapStateToProsp = (state,) => {
    return {
        user: state.user?.user,
    }
}


export default connect(mapStateToProsp, { deleteCartItem, updateCartQauntity, getCartItems, getLocalCartItems })(SideCartItem)
