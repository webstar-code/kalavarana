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
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';


const dummyData = [
    {
        title: 'Ganesh Painting',
        mrp: 5.99,
        id: 123,
        picUrl: PAINTING2,
    },
    {
        title: 'Ganesh Painting',
        mrp: 5.99,
        id: 123,
        picUrl: PAINTING2,
    },
    {
        title: 'Ganesh Painting',
        mrp: 5.99,
        id: 123,
        picUrl: PAINTING2,
    },
    {
        title: 'Ganesh Painting',
        mrp: 5.99,
        id: 123,
        picUrl: PAINTING2,
    },
]


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
                <div className="wish-list">
                    <h1 className="text-primary flex items-center justify-start md:hidden text-2xl font-medium">
                        <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
                        Wishlist</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-3">
                        {
                            // product.map((pro) => (
                            //     <PaintingCard product={pro} key={pro.id} />
                            // ))
                            dummyData.map((pro) => (
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
