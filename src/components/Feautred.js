import React from 'react'
import modelRow from '../assets/img/model-row.png'
const Feautred = () => {
    return (
        <div className="feautred-area bg-gray-100 flex flex-col w-full p-32">
            <div className="flex items-center justify-between">
                <div>
                <h1 className="text-xl">@ANAFashion</h1>
                <p className="text-sm">TAG US FOR A CHANCE TO BE FEATURED</p>
                </div>
                <div className="p-2 border-2 border-black text-md">Follow US</div>
            </div>
            <div className="flex justify-evenly flex-wrap">
               <img src={modelRow} alt="model" className="my-3" />
               <img src={modelRow} alt="model" className="my-3" />
            </div>
        </div>
    )
}

export default Feautred
