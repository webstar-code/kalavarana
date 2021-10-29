import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db, firestore } from '../../firebase';
import { useParams } from 'react-router-dom'
import Footer from '../Footer';
import SubCatProducts from '../SubCategoryCards';
import Msg from '../notification/Msg'
import LoadingSpinner from '../LoadingSpinner';

const Category = () => {
    const categoryName = useParams().category;
    const [categoryInfo, setCategoryInfo] = useState({});
    const [subCats, setSubCats] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setCategoryInfo({});
        // setSubCats([]);
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
        setLoading(true);
        let items = [];
        firestore.collection('SUB-CATAGORIES').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let x = doc.data();
                if (x.category.name === categoryName) {
                    items.push(x);
                }
            })
            setSubCats(items);
            setLoading(false);
        })
    }, [categoryInfo]);
    // console.log(categoryInfo)
    // console.log(subCats);

    return (
        <>
        <Msg />
            <div className="w-full flex flex-col mt-20 md:mt-36">
                <div className="w-full bg-primary flex items-center justify-center" style={{ height: '512px' }}>
                    <h1 className="text-white text-2xl md:text-5xl uppercase">{categoryInfo.name}</h1>
                    {/* <img src={categoryInfo.picUrl} /> */}
                </div>
                {subCats.length > 0 ? subCats.map((item) => (
                    <SubCatProducts subcat={item} key={item.name} />
                ))
                    :
                    loading ?
                        <LoadingSpinner />
                        : subCats.length <= 0 ?
                            <h1 className="h-64 flex items-center justify-center text-gray-400 text-5xl">No items in this category</h1>
                            : null}
            </div>
            <Footer />
        </>
    )
}

export default Category;