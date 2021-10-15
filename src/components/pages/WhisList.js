import React from 'react'
import ProfileNavigation from '../profile/ProfileNavigation'
import Header from '../Header'
import { connect } from 'react-redux'
import DressCard from '../cards/DressCard';
import '../../styles/wishlist.css';
import { db } from '../../firebase'
import { useEffect } from 'react';
import { useState } from 'react';
import { PAINTING2 } from '../../assetsKalavarna';
import PaintingCard from '../cards/PaintingCard';


const dummyData = {
    title: 'Ganesh Painting',
    price: 5.99,
    originalPrice: 7.99,
    id: 123,
    imageUrl: PAINTING2,
    key: 123
}


const WhisList = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        db.wishlist.where('userId', '==', props?.userId)
            .get()
            .then((sanpShot) => {
                console.log(sanpShot.docs.map(db.formatedDoc))
                setProduct(sanpShot.docs.map(db.formatedDoc))
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.userId])
    return (
        <>
            <Header />
            <div className="profile-page">
                <ProfileNavigation />
                <div className="wish-list">
                    <h1 className="profile-title orders-title">Wish List</h1>
                    {/* {
                        product.map((pro, i) => (
                            <DressCard
                                name={pro?.title}
                                price={pro?.price}
                                originalPrice={pro?.originalPrice}
                                id={pro?.productId}
                                imageUrl={pro?.imageUrl}
                                key={pro?.productId}
                            />
                        ))
                    } */}
                    <PaintingCard
                        name={dummyData.title}
                        price={dummyData.price}
                        originalPrice={dummyData.originalPrice}
                        id={dummyData.productId}
                        imageUrl={dummyData.imageUrl}
                        key={dummyData.productId}
                    />

                    <PaintingCard
                        name={dummyData.title}
                        price={dummyData.price}
                        originalPrice={dummyData.originalPrice}
                        id={dummyData.productId}
                        imageUrl={dummyData.imageUrl}
                        key={dummyData.productId}
                    />



                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { userId: state.user?.user?.userId }
}

export default connect(mapStateToProps)(WhisList)
