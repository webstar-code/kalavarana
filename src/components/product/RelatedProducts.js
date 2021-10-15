import React from 'react'
import DressCard from '../cards/DressCard'
import { PAINTING3 } from '../../assetsKalavarna'
const RelatedProducts = () => {
    return (
        <div className="related-products">
            <div className="related-title">
                <h1>Related Paintings</h1>
                <button className="related-btn uppercase">VIEW ALL</button>
            </div>
        <div className="dress-cards dress-card-overfolow">
        <DressCard  name="Balaji Painting" price="Rs 5.59" 
                    originalPrice="Rs 5.5" imageUrl={PAINTING3} overflow/>
        <DressCard  name="Balaji Painting" price="Rs 5.59" 
                    originalPrice="Rs 5.5" imageUrl={PAINTING3} overflow/>
        <DressCard  name="Balaji Painting" price="Rs 5.59" 
                    originalPrice="Rs 5.5" imageUrl={PAINTING3} overflow/>
        <DressCard  name="Balaji Painting" price="Rs 5.59" 
                    originalPrice="Rs 5.5" imageUrl={PAINTING3} overflow/>
        </div>
        </div>
    )
}

export default RelatedProducts
