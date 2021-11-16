import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase'
import PaintingCard from './PaintingCard'
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PAINTING1 } from '../../assets';
import Msg from '../notification/Msg'
import Scroller from '../Scroller';


const dummyData = [
	{
		name: "GAnesh",
		picUrl: PAINTING1,
		totalMrp: 123
	},
	{
		name: "GAnesh1",
		picUrl: PAINTING1,
		totalMrp: 123
	},
	{
		name: "GAnesh2",
		picUrl: PAINTING1,
		totalMrp: 123
	},
	{
		name: "GAnesh3",
		picUrl: PAINTING1,
		totalMrp: 123
	},
	{
		name: "GAnesh4",
		picUrl: PAINTING1,
		totalMrp: 123
	},
	{
		name: "GAnesh5",
		picUrl: PAINTING1,
		totalMrp: 123
	},
	{
		name: "GAnesh",
		picUrl: PAINTING1,
		totalMrp: 123
	}

]

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
		paritialVisibilityGutter: 0
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
		paritialVisibilityGutter: 0
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		paritialVisibilityGutter: 70
	}
};

const Cards = ({ collection }) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let items = [];
		firestore.collection('PRODUCTS').where("isFeatured", "==", "true").get().then((querySnapshot) => {
			setProducts(querySnapshot.docs.map((item) => item.data()));
			setLoading(false);
		})
		// firestore.collection('PRODUCTS').get().then((snapshot) => {
		// 	let p = snapshot.docs;

		// 	snapshot.docs.map((doc) => {
		// 		if (doc.data().isFeatured === true) {
		// 			items.push(doc.data());
		// 		}
		// 	})
		// }).then(() => {
		// 	console.log(items);
		// 	setProducts(items);
		// }).catch((err) => {
		// 	console.log(err);
		// })
	}, [])




	return (
		<div className="w-full md:w-4/5  mx-auto flex flex-col justify-start">
			<Msg />

			<div className="flex items-end justify-between p-6 md:p-10 ">
				<div className="flex">
					<h1 className="text-xl md:text-3xl font-bold pb-2 uppercase text-primary">{collection}</h1>
				</div>
				<Link to="/featured">
					<div className="w-28 h-12 flex items-center justify-center px-3 py-1 md:p-3  border-2 border-black text-md uppercase">VIEW ALL</div>
				</Link>
			</div>

			{products.length > 0 ?
				<Scroller>
					{/* <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-4"> */}
					{products.map((product) => (
						<div className="w-64 flex-none mx-5 text-center" key={product.id}>
							<PaintingCard product={product} key={product.id} />
						</div>
					))}
				</Scroller>
				: loading ?
					<LoadingSpinner /> :
					<h1 className="h-64 flex items-center justify-center text-gray-400 text-2xl">No featured products available</h1>
			}

		</div >
	)
}

export default Cards
