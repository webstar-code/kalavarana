import React from 'react'
import WarningIcon from '@material-ui/icons/Warning';

const CancelPrompt = ({ setShowModal, callback }) => {

    return (
        <>
            (<div className="delete-modal" onClick={() => setShowModal(false)}>
                <div className="innerModal" onClick={(e) => e.stopPropagation()}>
                    <WarningIcon className="text-red-500" />
                    <h1 className="py-3">Are you sure you want remove the item from your cart?</h1>
                    <div className="w-full flex items-center justify-evenly mt-4">
                    <button onClick={() => setShowModal(false)} className="border border-primary text-primary px-4 py-2 w-36">cancel</button>
                    <button onClick={() => callback()} className="bg-red-500 text-white px-4 py-2 w-36">Delete</button>
                    </div>
                </div>
            </div>)
        </>
    )
}

export default CancelPrompt
