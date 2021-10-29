import React, { useEffect, useState } from 'react'
import { PAINTING1, PAINTING3 } from '../../assetsKalavarna'
import { firestore } from '../../firebase';
import PaintingCard from '../cards/PaintingCard';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoadingSpinner from '../LoadingSpinner'
import Msg from '../notification/Msg'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        paritialVisibilityGutter: 0
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        paritialVisibilityGutter: 0
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 70
    }
};


const RelatedProducts = (props) => {
    const [products, setProducts] = useState(new Set());
    const maxCards = 8;
    // console.log(props);

    useEffect(() => {
        props.subcats.map((subcat) => {
            let items = new Set();
            let arr = [];
            firestore.collection('PRODUCTS').get().then((querySnapshot) => {
                let p = querySnapshot.docs;
                for (let i = 0; i < p.length; i++) {
                    let x = p[i].data();

                    x.subcategories.map((e) => {
                        // console.log(e.name, subcat.name)
                        // console.log(e.name, subcat.name)
                        if (e.name === subcat.name) {
                            items.add(x);
                        }
                    })
                    if (items.size >= maxCards) {
                        break;
                    }
                }
                // console.log(items)/
                items.forEach((i) => {
                    arr.push(i);
                })
                setProducts(arr);
            })
        })
    }, []);

    // console.log(products);

    return (
        <>
            <Msg />

            <div className="related-products mb-12">
                <div className="related-title">
                    <h1 className="my-4">Related Paintings</h1>
                    <Link to={`/category/${props.category[0].name}`}>
                        <button className="related-btn uppercase">VIEW ALL</button>
                    </Link>
                </div>
                <div className="w-full md:w-4/5 mx-auto flex flex-col justify-start">

                    {products.length > 0 ?
                        <Carousel
                            partialVisbile
                            itemClass="image-item"
                            responsive={responsive}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {products.map((product) => (
                                <div className="w-64 mx-5" >
                                    <PaintingCard product={product} />
                                </div>
                            ))}
                        </Carousel>
                        : <LoadingSpinner />}

                    {/* <div className="dress-cards dress-cards-overflow">
                    {products.length > 0 && products.map((product) => (
                        <div className="w-64 flex-none mx-5"  key={product.id}>
                            <PaintingCard product={product} />
                        </div>
                    ))}
                </div> */}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts
