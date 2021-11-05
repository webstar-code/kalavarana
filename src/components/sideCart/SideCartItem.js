import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { deleteCartItem, updateCartQauntity, getCartItems, getLocalCartItems, showCart } from '../../actions/cart'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { RUPPEEICON } from '../../assets'
import CancelPrompt from '../CancelPrompt';
import localdb from '../../localDB'
import { history } from '../../history';

const SideCartItem = (props) => {
    const [maxQuantityReached, setMaxQuantityReached] = useState(false);
    const [showModal, setShowModal] = useState(false)
    let productID = useParams().id;

    useEffect(() => {
        if (props.quantity === props.product.stock) {
            setMaxQuantityReached(true);
        } else {
            setMaxQuantityReached(false);
        }
    }, [props.quantity]);

    const AddQuantity = () => {
        const quantity = props.quantity + 1;
        if (quantity <= props.product.stock) {
            if (props.user.id) {
                if (!props.disable) {
                    props.updateCartQauntity(props.product.id, quantity, props.getCartItems)
                }
            } else {
                localdb.cart.where('id').equals(props.product.id).modify({ quantity });
                props.getLocalCartItems();
            }
        }
    }
    const DecQuantity = () => {
        const quantity = props.quantity - 1;
        if (quantity > 0) {

            if (props.user.id) {
                if (!props.disable) {
                    props.updateCartQauntity(props.product.id, quantity, props.getCartItems)
                }
            } else {
                localdb.cart.where('id').equals(props.product.id).modify({ quantity });
                props.getLocalCartItems();
            }
        } else {

        }
    }

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
            <div onClick={() => (productID === props.product.id) ? props.showCart(false) : history.push(`/products/${props.product.id}`)}
                className="cursor-pointer">
                <div className="side-cart-item-img">
                    <img src={props.product.picUrl} alt="" />
                </div>
            </div>
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
                        {!props.disable && <button onClick={() => DecQuantity()}>-</button>}
                        <p>{props.quantity}</p>
                        {!props.disable && <button onClick={() => AddQuantity()}>+</button>}
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


export default connect(mapStateToProsp, { deleteCartItem, updateCartQauntity, getCartItems, getLocalCartItems, showCart })(SideCartItem)
