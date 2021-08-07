import React ,{useEffect,useState}from 'react'
import {firestore,db} from '../../firebase'
import Card from './CardDesign1'
import model from '../../assets/img/sample-model-1.png'
const Cards = ({bannerTitle,collection,featuredCollection,colors}) => {
   const [products,setProducts]=useState([])
   console.log(collection)
    useEffect(()=>{
   firestore.collection('spring-oasis-product').get()
   .then((snapshot)=>{
    const documents = snapshot.docs.map(doc => doc.data())
    setProducts(documents)
    console.log(products)
   })
    },[])

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
                    products.map((product)=>(
                        <Card
                        key={product?.productId}
                        id={product?.productId}
                        img={product.imageUrl}
                        title={product?.title}
                        price={`$ ${product?.price}`}
                        originalPrice={`$ ${product.originalPrice}`}
                        hascolors={colors?true:false}
                        />
                    ))
                }
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
