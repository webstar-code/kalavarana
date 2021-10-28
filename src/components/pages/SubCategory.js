import React, { useEffect, useState } from 'react';
import { PAINTING1 } from '../../assetsKalavarna';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import PaintingCard from '../cards/PaintingCard'
import { db, firestore } from '../../firebase';
import { useParams } from 'react-router-dom'
import '../../styles/dresess.css';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';

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
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// console.log(sortedProducts);
	// console.log(filteredProducts);
	console.log(products);
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
		setLoading(true);
		setProducts([]);
		setSortedProducts([]);
		setFilteredProducts([]);
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
			return items
		}).then((items) => {
			// console.log(items);
			setProducts(items);
			setLoading(false);
		})
	}, [subCategoryName]);

	const sorts = [
		{ name: 'Featured' },
		// { name: 'Best Selling' },
		{ name: 'Alphabetically, A-Z' },
		{ name: 'Alphabetically, Z-A' },
		{ name: 'Price , Low to High' },
		{ name: 'Price, High to Low' },
	]

	const filters = products.map((product) => {
		return {
			name: `Dimension: ${product.width} x ${product.height}`,
			width: product.width,
			height: product.height
		};
	});


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

	const FilterUtil = (type) => {
		let items = [];
		products.map((product) => {
			if (product.width === type.width && product.height === type.height) {
				items.push(product);
			}
		})
		setSortedProducts([]);
		setFilteredProducts(items);
	}

	return (

		<div className="w-full flex flex-col mt-20 md:mt-36">
			<div className="w-full bg-primary flex items-center justify-center mb-10" style={{ height: '512px' }}>
				<h1 className="text-white text-2xl md:text-5xl uppercase">{subCategoryName}</h1>
			</div>
			<div className="relative w-full md:w-4/5 px-6 md:px-0 mx-auto ">
				<div className="w-full flex justify-between py-5">
					<div className="flex">
						<div className="px-1" onClick={handleFullScreen}><ViewComfyIcon className={`view-icon ${fullScreen && 'active'}`} /></div>
						<div className="px-1" onClick={handleHalfScreen}><ViewModuleIcon className={`view-icon large ${halfScreen && 'active'}`} /></div>
					</div>
					<div className="flex">
						<p className="cursor-pointer px-1 relative" onClick={handleFilter}>Filter<ArrowDropDownIcon className={`filter-btn ${filter && 'rotate-180'}`} />
							{filter && (<div className={`inline-table absolute top-6 right-0 z-10 bg-white text-right py-2 shadow-lg w-28 h-0 transition-all ${filter && 'h-auto'}`}>
								{filters.map((item, i) => (
									<p className="px-4 py-2 whitespace-nowrap" onClick={() => FilterUtil(item)} key={i}>{item.name}</p>
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
				{products.length > 0 ?
					<div className={`w-full grid ${halfScreen && 'grid-cols-1 md:grid-cols-2'} ${fullScreen && 'grid-cols-2 xl:grid-cols-4'} gap-2 gap-y-6 mt-4 mb-12 `}>

						{sortedProducts.length > 0 ?
							sortedProducts.map((product) => (<div className="max-w-sm">
								<PaintingCard product={product} key={product.id} />
							</div>))
							: filteredProducts.length > 0 ?
								filteredProducts.map((product) => (<div className="max-w-sm">
									<PaintingCard product={product} key={product.id} />
								</div>))
								:
								products.length > 0 ?
									products.map((product, i) => (
										<div className="max-w-sm">
											<PaintingCard product={product} key={i} />
										</div>
									)) : loading ?
										<LoadingSpinner />
										: products.length <= 0 ?
											<h1 className="h-64 flex items-center justify-center text-gray-400 text-2xl md:text-5xl">No products here</h1>
											: null
						}


						{/* 
					{dummyData.map((product, i) => (
						<div className="max-w-sm">
							<PaintingCard product={product} key={i} />
						</div>
					))} */}
					</div> :
					loading ?
						<LoadingSpinner />
						: products.length <= 0 ?
							<h1 className="h-64 flex items-center justify-center text-gray-400 text-2xl md:text-5xl">No products here</h1>
							: null}
			</div>
			<Footer />
		</div>

	)
}


export default SubCategory;