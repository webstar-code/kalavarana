import React, { useEffect, useState } from 'react';
import PaintingCard from '../cards/PaintingCard'
import { db, firestore } from '../../firebase';
import '../../styles/dresess.css';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';

const Sales = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let items = [];
        firestore.collection('PRODUCTS').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().onSale) {
                    items.push(doc.data());
                }
            })
            setProducts(items);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, []);

    return (
        <>
            <div className="w-full flex flex-col mt-20 md:mt-36">
                <div className="w-full bg-primary flex items-center justify-center mb-10" style={{ height: '512px' }}>
                    <h1 className="text-white text-2xl md:text-5xl uppercase">Sales</h1>
                </div>
                <div className="w-full md:w-4/5 px-6 md:px-0 mx-auto mb-12">
                    {products.length > 0 ?
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">
                            {products.map((product) => (
                                <div className="max-w-sm">
                                    <PaintingCard product={product} key={product.id} />
                                </div>
                            ))}
                        </div>
                        : loading ?
                            <LoadingSpinner />
                            : products.length <= 0 ?
                            <h1 className="h-64 flex items-center justify-center text-gray-400 text-2xl md:text-5xl">No products here</h1>
                                : null
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}


export default Sales;