import React, { useState, useEffect } from 'react'
import { ERROR as ERRORICON } from '../../assets'
import { history } from '../../history'
const Error = () => {
    const [counter, setCounter] = useState(5);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    useEffect(() => {
        setTimeout(() => {
            history.push('/cart')
        }, 5000)
    }, [])


    return (
        <>
            <div className="confirmed-order">
                <img className="err-img" style={{ height: '144px', width: "207px" }} src={ERRORICON} alt="error" />
                <h1 className="text-2xl font-bold mt-16 mb-6">Something went wrong</h1>
                <p>You will be redirected in {counter}s..</p>
            </div>
        </>
    )
}

export default Error
