import React, { useEffect, useState } from 'react';
import Header from '../Header';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { PAINTING1 } from '../../assetsKalavarna';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import PaintingCard from '../cards/PaintingCard'
import { db, firestore } from '../../firebase';
import { useParams } from 'react-router-dom'
import '../../styles/dresess.css';
import Footer from '../Footer';

const dummyData = [
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
	{
		picUrl: PAINTING1,
		name: "Tanjore Painting",
		mrp: '$5.99',
	},
]

const SubCategory = () => {
	const subCategoryName = useParams().sub_category;

	const [products, setProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	// console.log(sortedProducts);
	// console.log(filteredProducts);
	// console.log(products);
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
		console.log("fetch");
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


	const SortUtil = (type) => {
		switch (type) {
			case 'Featured':
				setSortedProducts(products.filter((e) => e.isFeatured == true));
				setFilteredProducts([]);
				return;
			case 'Alphabetically, A-Z':
				setSortedProducts(products.sort((a, b) => a.name < b.name ? -1 : 1))
				setFilteredProducts([]);
				return;
			case 'Alphabetically, Z-A':
				setSortedProducts(products.sort((a, b) => a.name < b.name ? 1 : -1))
				setFilteredProducts([]);
				return;
			case 'Price , Low to High':
				setSortedProducts(products.sort((a, b) => a.discountedMrp < b.discountedMrp ? -1 : 1))
				setFilteredProducts([]);
				return;
			case 'Price, High to Low':
				setSortedProducts(products.sort((a, b) => a.discountedMrp < b.discountedMrp ? 1 : -1))
				setFilteredProducts([]);
				return;
		}
	}

	return (

		<div className="w-full flex flex-col mt-20 md:mt-36">
			<div className="w-full bg-primary flex items-center justify-center mb-10" style={{ height: '256px' }}>
				<h1 className="text-white text-2xl md:text-5xl uppercase">{subCategoryName}</h1>
			</div>
			<div className="w-full md:w-4/5 px-6 md:px-0 mx-auto ">
				<div className="w-full flex justify-between py-5">
					<div className="flex">
						<div className="px-1" onClick={handleFullScreen}><ViewComfyIcon className={`view-icon ${fullScreen && 'active'}`} /></div>
						<div className="px-1" onClick={handleHalfScreen}><ViewModuleIcon className={`view-icon large ${halfScreen && 'active'}`} /></div>
					</div>
					<div className="flex">
						<p className="cursor-pointer px-1 relative" onClick={handleFilter}>Filter<ArrowDropDownIcon className={`filter-btn ${filter && 'rotate-180'}`} />
							{filter && (<div className={`inline-table absolute top-6 right-0 z-10 bg-white text-right py-2 shadow-lg w-28 h-0 transition-all ${filter && 'h-auto'}`}>
								{filters.map((item, i) => (
									<p className="px-4 py-2 whitespace-nowrap" onClick={() => SortUtil(item.name)} key={i}>{item.name}</p>
								))}
							</div>)}
						</p>
						<p className="cursor-pointer px-1 relative" onClick={handleSort}>Sort <ArrowDropDownIcon className={`sort-btn ${sort && 'rotate-180'}`} />
							{sort && (<div className={`inline-table absolute top-6 right-0 z-10 bg-white text-right py-2 shadow-lg w-28 h-0 transition-all ${sort && 'h-auto'}`}>
								{sorts.map((item, i) => (
									<p className="px-4 py-2 whitespace-nowrap" onClick={() => SortUtil(item.name)} key={i}>{item.name}</p>
								))}
							</div>)}
						</p>
					</div>
				</div>
				<div className={`w-full grid ${halfScreen && 'grid-cols-1 md:grid-cols-2'} ${fullScreen && 'grid-cols-2 xl:grid-cols-4'} gap-2 gap-y-6 mt-4 mb-12 `}>
					{/* {products.map((product, i) => (
						<Card product={product} key={i} />
					))} */}
					{sortedProducts === false  ?
						sortedProducts.map((product) => (<div className="max-w-sm">
							<PaintingCard product={product} key={product.id} />
						</div>))
						: filteredProducts === false  ?
							filteredProducts.map((product) => (<div className="max-w-sm">
								<PaintingCard product={product} key={product.id} />
							</div>))
							:
							products.map((product, i) => (
								<div className="max-w-sm">
									<PaintingCard product={product} key={i} />
								</div>
							))
					}

					{/* 
					{dummyData.map((product, i) => (
						<div className="max-w-sm">
							<PaintingCard product={product} key={i} />
						</div>
					))} */}
				</div>
			</div>
			<Footer />
		</div>

	)
}


export default SubCategory;