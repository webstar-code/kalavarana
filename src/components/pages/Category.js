import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { PAINTING1 } from '../../assetsKalavarna';
import { Link } from 'react-router-dom';
import { db, firestore } from '../../firebase';
import { useParams } from 'react-router-dom'
import PaintingCard from '../cards/PaintingCard'
import Footer from '../Footer';
import SubCatProducts from '../SubCategoryCards';

const Category = () => {
    const categoryName = useParams().category;
    const [categoryInfo, setCategoryInfo] = useState({});
    const [subCats, setSubCats] = useState([]);

    // get a cat with the given name
    useEffect(() => {
        setCategoryInfo({});
        firestore.collection('CATAGORIES').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.data().name, categoryName);
                if (doc.data().name === categoryName) {
                    setCategoryInfo(db.formatedDoc(doc));
                    return;
                }
            })
            return;
        })
    }, [categoryName]);


    // get sub-cats
    useEffect(() => {
        let items = [];
        firestore.collection('SUB-CATAGORIES').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let x = doc.data();
                if (x.category.name === categoryName) {
                    items.push(x);
                }
            })
            setSubCats(items);
        })
    }, [categoryInfo]);

    return (
        <>
            <div className="w-full flex flex-col mt-20 md:mt-36">
                <div className="w-full bg-primary flex items-center justify-center" style={{ height: '512px' }}>
                    <h1 className="text-white text-2xl md:text-5xl uppercase">{categoryInfo.name}</h1>
                    {/* <img src={categoryInfo.picUrl} /> */}
                </div>
                {subCats.map((item) => (
                    <SubCatProducts subcat={item} />
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Category;