import React, { useEffect, useState } from 'react';
import Header from './Header';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { PAINTING1 } from '../assetsKalavarna';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import PaintingCard from './cards/PaintingCard'
import { db, firestore } from '../firebase';
import { useParams } from 'react-router-dom'

const Card = ({ product }) => {

    return (
        // <Link to={`/products/${id}`}>
        <div className="w-full">
            <div className="relative w-full">
                {/* <img src={product.imgurl} alt="" className="w-full" /> */}
                <img src={PAINTING1} alt="" className="w-full" />

                <div className="absolute top-0 right-0 m-4 bg-gray-200 p-1">ON SALE</div>
            </div>
            <div className="flex justify-between items-start p-1">
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-medium pb-3">{product.title}</h3>
                    <div className="price">
                        <p className="text-sm font-medium">{product.price}</p>
                        <p>{product.orignalPrice}</p>
                    </div>
                </div>
                <div className="">
                    <BookmarkBorderIcon />
                </div>
            </div>
        </div>
        // </Link>

    )
}

const producst = [
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
    {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    }, {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    }, {
        imgurl: PAINTING1,
        title: "Ganesh Painting",
        price: '$5.99',
        orignalPrice: '$5.99'
    },
]

const SubCategory = () => {
    const subCategoryName = useParams().sub_category;

    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState(false)
    const [filter, setFilter] = useState(false);
    const [fullScreen, setFullScreen] = useState(true)
    const [halfScreen, setHalfScreen] = useState(false)
    const handleFullScreen = () => {
        setFullScreen(true)
        setHalfScreen(false)
    }
    const handleHalfScreen = () => {
        setHalfScreen(true)
        setFullScreen(false)
    }
    const handleSort = () => {
        setSort(!sort)
        setFilter(false)
    }

    const handleFilter = () => {
        setSort(false)
        setFilter(!filter)
    }

    useEffect(() => {
        let items = [];
        firestore.collection('PRODUCTS').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let x = doc.data();
                x.subcategories.map((e) => {
                    // console.log(e.name, subcat.name)
                    if (e.name === subCategoryName) {
                        items.push(x);
                    }
                })
            })
            setProducts(items);
        })
    }, []);

    const sorts = [
        { name: 'Featured' },
        { name: 'Best Selling' },
        { name: 'Alphabetically, A-Z' },
        { name: 'Alphabetically, Z-A' },
        { name: 'Price , Low to High' },
        { name: 'Price, High to Low' },
        { name: 'Date, Old to New' }
    ]

    const filters = [
        { name: 'Product' },
        { name: 'Product' },
        { name: 'Product' },
        { name: 'Product' },
        { name: 'Product' },
        { name: 'Product' },
    ]

    let currURL = window.location.pathname;
    const cat = currURL.substring(currURL.lastIndexOf('/') + 1).replace("_", " ");

    return (

        <div className="w-full flex flex-col mt-20 md:mt-36">
            <Header />
            <div className="w-full bg-primary flex items-center justify-center mb-10" style={{ height: '256px' }}>
                <h1 className="text-white text-2xl md:text-5xl uppercase">{cat}</h1>
            </div>
            <div className="w-full md:w-4/5 px-6 md:px-0 mx-auto ">

                <div className="w-full flex justify-between py-5">
                    <div className="flex">
                        <div className="px-1" onClick={handleFullScreen}><ViewComfyIcon className={`view-icon ${fullScreen && 'active'}`} /></div>
                        <div className="px-1" onClick={handleHalfScreen}><ViewModuleIcon className={`view-icon large ${halfScreen && 'active'}`} /></div>
                    </div>
                    <div className="flex">
                        <p className="cursor-pointer px-1 relative" onClick={handleFilter}>Filter<ArrowDropDownIcon className={`filter-btn ${filter && 'rotate-180'}`} />
                            {filter && (<div className={`absolute top-6 right-0 z-10 bg-white shadow-lg w-28 h-0 transition-all ${filter && 'h-auto'}`}>
                                {filters.map((item, i) => (
                                    <p className="p-2" key={i}>{item.name}</p>
                                ))}
                            </div>)}
                        </p>
                        <p className="cursor-pointer px-1" onClick={handleSort}>Sort <ArrowDropDownIcon className={`sort-btn ${sort && 'rotate-180'}`} />
                            {sort && (<div className="sort">
                                {sorts.map((item, i) => (
                                    <p key={i}>{item.name}</p>
                                ))}
                            </div>)}
                        </p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                    {products.map((product, i) => (
                        <Card product={product} key={i} />
                    ))}
                </div>
            </div>
        </div>

    )
}


export default SubCategory;