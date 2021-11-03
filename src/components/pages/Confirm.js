import React, { useState, useEffect } from 'react'
import { ORDER_CONFIRMED } from '../../assets'
import { history } from '../../history'

const Confirm = () => {
    const [counter, setCounter] = useState(5);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    useEffect(() => {
        setTimeout(() => {
            history.push('/profile/orders')
        }, 5000)
    }, [])

    return (
        <>
            <div className="confirmed-order">
                <img src={ORDER_CONFIRMED} alt="" />
                <h1 className="text-2xl font-bold mt-16 mb-6">Order has been placed!</h1>
                <p>You will be redirected in {counter}s..</p>
            </div>
        </>
    )
}

export default Confirm
