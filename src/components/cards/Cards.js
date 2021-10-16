import React, { useEffect, useState } from 'react'
import { firestore, db } from '../../firebase'
import Card from './CardDesign1'
import { PAINTING1, PAINTING2 } from '../../assetsKalavarna';
import PaintingCard from './PaintingCard'

const Cards = ({ collection, colors }) => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		let items = [];
		firestore.collection('PRODUCTS').get().then((snapshot) => {
			snapshot.docs.map((doc) => {
				console.log(doc.data().isFeatured);
				if (doc.data().isFeatured === true) {
					items.push(doc.data());
				}
			})
		}).then(() => {
			console.log(items);
			setProducts(items);
		})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	const data = [
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
	return (
		<div className="cards-1-area w-full p-10 flex flex-col justify-start">
			<div className="collection-header flex items-end justify-between">
				<div className="flex">
					<h1 className="text-2xl font-bold">{collection}</h1>
				</div>
				<div className="shop-btn-1 p-3 border-2 border-black text-md uppercase">VIEW ALL</div>
				{/* <div className="shop-btn-2  p-3 border-2 border-black text-md">SHOP</div> */}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4">
				{
					// data.map((product) => (
					// 	<div className="md:w-64 w-48 max-w-xs">
					// 		<PaintingCard product={product} key={product.id} />
					// 	</div>
					// ))
					products.map((product) => (
						<div className="md:w-64 w-48 max-w-xs">
							<PaintingCard product={product} key={product.id} />
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Cards
