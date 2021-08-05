import React from 'react'
import Card from './CardDesign1'
import model from '../../assets/img/sample-model-1.png'
const Cards = ({bannerTitle,featuredCollection,colors}) => {

    const data=[
        {
            img:model,
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:model,
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
    ]
    return (
        <div className="w-full p-10 flex flex-col justify-start">
            {featuredCollection&&(<p className="text-xs">FEATURED COLLECTION</p>)}
            <div className="flex items-center justify-between">
                <h1 className="text-xl">{bannerTitle}</h1>
                <div className="p-3 border-2 border-black text-md">SHOP THE COLLECTION</div>
            </div>
            <div className=" grid grid-flow-row-dense grid-cols-4 items-center justify-evenly pt-3 mt-4">
                { 
                data.map((product,i)=>(
                    <Card
                    key={i}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    originalPrice={product.orignalPrice}
                    hascolors={colors?true:false}
                    />
                )) 
                }
            </div>
        </div>
    )
}

export default Cards
