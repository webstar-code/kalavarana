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
        db.users.doc(props.user.id).collection('WISHLIST').get().then((snapshot) => {
            setProduct(snapshot.docs.map(e => db.formatedDoc(e)))
        })
    }, [props.userId])
    return (
        <>
            <Header />
            <div className="profile-page">
                <ProfileNavigation />
                <div className="wish-list px-10">
                    <h1 className="profile-title orders-title">Wish List</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-3">
                        {
                            product.map((pro) => (
                                <PaintingCard product={pro} key={pro.id} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user?.user }
}

export default connect(mapStateToProps)(WhisList)
