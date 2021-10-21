import React, { useEffect, useState } from 'react';
import Header from '../Header';
import PaintingCard from '../cards/PaintingCard'
import { db, firestore } from '../../firebase';
import '../../styles/dresess.css';
import Footer from '../Footer';

const Sales = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("fetch");
        let items = [];
        firestore.collection('PRODUCTS').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().onSale) {
                    items.push(doc.data());
                }
            })
            setProducts(items);
        })
    }, []);
    return (

        <div className="w-full flex flex-col mt-20 md:mt-36">
            <div className="w-full bg-primary flex items-center justify-center mb-10" style={{ height: '256px' }}>
                <h1 className="text-white text-2xl md:text-5xl uppercase">Sales</h1>
            </div>
            <div className="w-full md:w-4/5 px-6 md:px-0 mx-auto mb-12">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4 place-items-center">
                    {products.map((product) => (
                        <div className="w-32 xl:w-64 md:w-48 max-w-xs">
                            <PaintingCard product={product} key={product.id} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    )
}


export default Sales;