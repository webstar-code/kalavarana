import React from 'react'
import WarningIcon from '@material-ui/icons/Warning';

const CancelPrompt = ({ setShowModal, callback, message }) => {

    return (
        <>
            <div className="delete-modal" onClick={() => setShowModal(false)}>
                <div className="bg-white flex flex-col justify-center items-center p-8" onClick={(e) => e.stopPropagation()} >
                    <WarningIcon className="text-red-500" />
                    <h1 className="py-3 text-center" style={{ maxWidth: '350px', minWidth: '320px' }}>{message}</h1>
                    <div className="w-full flex items-center justify-evenly mt-4">
                        <button onClick={() => setShowModal(false)} className="border border-primary text-primary px-4 py-2 w-36">cancel</button>
                        <button onClick={() => callback()} className="bg-red-500 text-white px-4 py-2 w-36">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CancelPrompt
