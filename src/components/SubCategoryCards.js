import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import PaintingCard from './cards/PaintingCard'
import LoadingSpinner from './LoadingSpinner'

const SubCat = ({ subcat, banner = true }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const maxCards = 8;

    useEffect(() => {
        let items = [];
        setLoading(true)
        firestore.collection('PRODUCTS').get().then((querySnapshot) => {
            let p = querySnapshot.docs;
            for (let i = 0; i < p.length; i++) {
                let x = p[i].data();
                x.subcategories.map((e) => {
                    if (e.name === subcat.name) {
                        items.push(x);
                    }
                })
                if (items.length >= maxCards) {
                    break;
                }
            }
            setProducts(items);
            setLoading(false);
        })
    }, [subcat]);

    // useEffect(() => {
    // console.log(products);
    // }, [products]);

    return (
        <>
            <div className="w-full px-2 md:w-4/5 mx-auto my-16 flex flex-col">
                {banner &&
                    <div className="bg-primary flex" style={{ height: '256px' }}>
                        <h1 className="text-white text-2xl md:text-5xl mt-auto px-8 py-10">{subcat.name}</h1>
                    </div>
                }
                {
                    products.length > 0 ?
                        <div className="flex p-6 flex-col-reverse md:flex-col items-center justify-center">
                            <Link to={`${window.location.pathname}/${subcat.name}`} className="ml-auto">
                                <button className="ml-auto mr-4 md:mr-0 uppercase border border-black my-8 px-6 py-2 cursor-pointer">view all</button>
                            </Link>
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">
                                {products.map((product) => (
                                    <div className="max-w-sm">
                                        <PaintingCard product={product} key={product.id} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        loading ?
                            <LoadingSpinner />
                            : products.length <= 0 ?
                                <h1 className="h-64 flex items-center justify-center text-gray-400 text-5xl">No products here</h1>
                                : null}
            </div>
        </>
    )
}


export default SubCat;