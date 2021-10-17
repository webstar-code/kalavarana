import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { deleteCartItem, updateCartQauntity, getCartItems } from '../../actions/cart'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
const SideCartItem = (props) => {
    console.log(props);
    const [updatedQuantity, setQuantity] = useState(props.quantity)
    if (updatedQuantity <= 0) {
        setQuantity(1)
    }

    useEffect(() => {
        if (!props.disable) {
            props.updateCartQauntity(props.id, updatedQuantity)
            props.getCartItems()

        }
    }, [updatedQuantity])

    const handleDelete = () => {
        props.deleteCartItem(props.id)
        props.getCartItems()
    }

    return (
        <div className="side-cart-item">
            <Link to={`products/${props.id}`}>
                <div className="side-cart-item-img">
                    <img src={props.picUrl} alt="" />
                </div>
            </Link>
            <div className="side-cart-item-des pl-4 ">
                <div className="item-des">
                    <p className="text-md font-medium mb-3">{props.name}</p>
                    <p className="text-md font-medium mb-3">${props.mrp}</p>
                </div>
                <div className="item-handler">
                    <div className="item-quanity">
                        {!props.disable && <button onClick={() => setQuantity(updatedQuantity - 1)}>-</button>}
                        <p>{updatedQuantity}</p>
                        {!props.disable && <button onClick={() => setQuantity(updatedQuantity + 1)}>+</button>}
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
