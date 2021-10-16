import React, { useEffect, useState } from 'react';
import Header from './Header';
import { PAINTING1 } from '../assetsKalavarna';
import { Link } from 'react-router-dom';
import { db, firestore } from '../firebase';
import { useParams } from 'react-router-dom'
import PaintingCard from './cards/PaintingCard'
 
const producst = [
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },

]



const SubCat = ({ subcat }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let items = [];
        firestore.collection('PRODUCTS').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let x = doc.data();
                x.subcategories.map((e) => {
                    // console.log(e.name, subcat.name)
                    if (e.name === subcat.name) {
                        items.push(x);
                    }
                })
            })
            setProducts(items);
        })
    }, []);

    // useEffect(() => {
    //     console.log(products);
    // }, [products]);

    return (
        <div className="w-full px-2 md:w-4/5 mx-auto my-16 flex flex-col">
            <div className="bg-primary flex" style={{ height: '256px' }}>
                <h1 className="text-white text-2xl md:text-5xl mt-auto px-8 py-10">{subcat.name}</h1>
            </div>
            <Link to={`${window.location.pathname}/${subcat.name}`} className="ml-auto">
                <button className="ml-auto uppercase border my-8 px-6 py-2 cursor-pointer">view all</button>
            </Link>
            <div className="w-full md:w-4/5 px-6 md:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                {products.map((product, i) => (
                    <PaintingCard product={product} key={i} />
                ))}
            </div>
        </div>
    )
}


const Category = () => {
    const categoryName = useParams().category;
    console.log(categoryName);
    const [categoryInfo, setCategoryInfo] = useState({});
    const [subCats, setSubCats] = useState([]);
    useEffect(() => {
        setCategoryInfo({});
        let found = false;
        firestore.collection('CATAGORIES').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.data().name, categoryName);
                if (doc.data().name === categoryName) {
                    setCategoryInfo(db.formatedDoc(doc));
                    found = true;
                    console.log(found);
                    return;
                }
            })
            return;
        })
        console.log(categoryInfo);
    }, [categoryName]);


    useEffect(() => {
        let items = [];
        firestore.collection('SUB-CATAGORIES').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let x = doc.data();
                if (x.category.name === categoryName) {
                    // console.log(x);
                    items.push(x);
                }
            })
            setSubCats(items);
        })
    }, [categoryInfo]);

    return (
        <div className="w-full flex flex-col mt-20 md:mt-36">
            <Header />
            <div className="w-full bg-primary flex items-center justify-center" style={{ height: '512px' }}>
                <h1 className="text-white text-2xl md:text-5xl uppercase">{categoryInfo.name}</h1>
                <img src={categoryInfo.picUrl}/>
            </div>
            {subCats.map((item) => (
                <SubCat subcat={item} />
            ))}
        </div>
    )
}

export default Category;