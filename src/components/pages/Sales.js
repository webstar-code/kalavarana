import React, { useEffect, useState } from 'react';
import PaintingCard from '../cards/PaintingCard'
import { db, firestore } from '../../firebase';
import '../../styles/dresess.css';
import LoadingSpinner from '../LoadingSpinner';
import { banner1, banner2, banner3, PAINTING3 } from '../../assets'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
                <Carousel
                    autoPlay
                    interval={4000}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    infiniteLoop
                >
                    <div className="w-full h-56 md:h-full object-cover">
                        <img src={banner1} className="w-full h-full object-cover object-left" />
                    </div>
                    <div className="w-full h-56 md:h-full object-cover">
                        <img src={banner2} className="w-full h-full object-cover object-left" />
                    </div>
                    <div className="w-full h-56 md:h-full object-cover">
                        <img src={banner3} className="w-full h-full object-cover object-left" />
                    </div>
                </Carousel>
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
                                <h1 className="h-64 flex items-center justify-center text-gray-400 text-2xl">No products here</h1>
                                : null
                    }
                </div>
            </div>
        </>

    )
}


export default Sales;
