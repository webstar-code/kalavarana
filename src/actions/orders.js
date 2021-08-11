import { db } from "../firebase"
import {history} from '../history'
import { PLACE_ORDER } from "./types"

export const placeOrder=(data)=>async(dispatch,getState)=>{
    const cart = getState().cart
    cart.map((itm,i)=>{
        db.orders.add({...data,color:itm.color,title:itm.title,quanity:itm.quanity,size:itm.size,price:itm.price,productId:itm.productId,userId:itm.userId,coustomText:itm.coustomText,placedAt:db.getCurrentTimeStamp()})
        .then(()=>{
            dispatch({type:PLACE_ORDER,payload:data})
            console.log('order saved successfully')
        })
    })
    
    history.push('/order-confirmed')
}