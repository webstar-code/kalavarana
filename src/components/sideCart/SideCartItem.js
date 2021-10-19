import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { deleteCartItem, updateCartQauntity, getCartItems } from '../../actions/cart'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { RUPPEEICON } from '../../assetsKalavarna'

const SideCartItem = (props) => {
    // TODO: getting props.quanity updated but still showing prev quantity
    // console.log(props);
    // useEffect(() => {

    // }, [props.quantity]);

    console.log(props);
    const [Quantity, setQuantity] = useState(props.quantity)
    const [maxQuantityReached, setMaxQuantityReached] = useState(false);
    
    if (Quantity <= 0) {
        setQuantity(1)
    }
    useEffect(() => {
        if (props.quantity >= props.product.stock) {
            setQuantity(props.quantity);
            setMaxQuantityReached(true);
        }
        if (!props.disable) {
            props.updateCartQauntity(props.product.id, Quantity, props.getCartItems)
        }
    }, [Quantity])

    const handleDelete = () => {
        props.deleteCartItem(props.product.id, props.getCartItems)
    }

    return (
        <div className="side-cart-item">
            <Link to={`products/${props.product.id}`}>
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
                        {!props.disable && <button onClick={() => setQuantity(props.quantity - 1)}>-</button>}
                        <p>{props.quantity}</p>
                        {!props.disable && <button onClick={() => setQuantity(props.quantity + 1)}>+</button>}
                    </div>
                    {!props.disable && (<div className="trash-btn">
                        <button onClick={handleDelete} className="p-2 hover:bg-gray-100 rounded-full"><DeleteOutlineIcon /></button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}



export default connect(null, { deleteCartItem, updateCartQauntity, getCartItems })(SideCartItem)
