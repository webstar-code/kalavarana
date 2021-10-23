import React from 'react'
import ProfileNavigation from '../profile/ProfileNavigation'
import Header from '../Header'
import { connect } from 'react-redux'
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
    // const [product, setProduct] = useState([])
    // useEffect(() => {
    //     db.users.doc(props.user.id).collection('WISHLIST').get().then((snapshot) => {
    //         setProduct(snapshot.docs.map(e => db.formatedDoc(e)))
    //     })
    // }, [props.userId])
    return (
        <>
            <div className="profile-page">
                <ProfileNavigation />
                <div className="w-full md:w-3/5 py-12 px-6 md:px-12 flex flex-col justify-center ml-auto ">
                    <h1 className="text-primary flex items-center justify-start mb-3 md:mb-0 md:hidden text-2xl font-medium">
                        <span className="pr-2"><Link to={'/profile-and-details'}><KeyboardBackspaceIcon /></Link></span>
                        Wishlist</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {
                            props.wishlist.length > 0 ? props.wishlist.map((pro) => (
                                <PaintingCard product={pro} key={pro.id} />
                            ))
                            :
                            <h1>No items in wishlist</h1>
                            // dummyData.map((pro) => (
                            //     <PaintingCard product={pro} key={pro.id} />
                            // ))

                        }

                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { 
        user: state.user?.user,
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps)(WhisList)
