import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase'
import PaintingCard from './PaintingCard'
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner'

const Cards = ({ collection }) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true);
	const maxCards = 4;

	useEffect(() => {
		let items = [];
		firestore.collection('PRODUCTS').get().then((snapshot) => {
			let p = snapshot.docs;
			for (let i = 0; i < p.length; i++) {
				if (p[i].data().isFeatured === true) {
					items.push(p[i].data());
				}
				if (items.length >= maxCards) {
					break;
				}
			}
			// snapshot.docs.map((doc) => {
			// 	if (doc.data().isFeatured === true) {
			// 		items.push(doc.data());
			// 	}
			// })
		}).then(() => {
			console.log(items);
			setProducts(items);
		}).catch((err) => {
			console.log(err);
		})
	}, [])

	return (
		<div className="w-full md:w-4/5 mx-auto p-6 md:p-10 flex flex-col justify-start">
			<div className="flex items-end justify-between">
				<div className="flex">
					<h1 className="text-2xl md:text-3xl font-bold pb-2">{collection}</h1>
				</div>
				<Link to="/featured">
					<div className="shop-btn-1 px-3 py-1 md:p-3  border-2 border-black text-md uppercase">VIEW ALL</div>
				</Link>
			</div>

			<div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">

				{
				  products.length > 0 ? products.map((product) => (
						// <div className="w-32 xl:w-64 md:w-48 max-w-xs mx-4">
						<div className="max-w-sm">

							<PaintingCard product={product} key={product.id} />
						</div>
					))
					: 
					<LoadingSpinner />
				}
			</div >
		</div >
	)
}

export default Cards
