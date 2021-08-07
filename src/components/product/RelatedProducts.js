import React from 'react'
import DressCard from '../cards/DressCard'
const RelatedProducts = () => {
    return (
        <div className="related-products">
            <div className="related-title">
                <h1>Related Products</h1>
                <button className="related-btn">SHOP THE COLLECTION</button>
            </div>
        <div className="dress-cards">
        <DressCard  name="ESSENTIAL CHIFFON HIJAB - BLACK" price="Rs 5.59" 
                    originalPrice="Rs 5.5"/>
        <DressCard  name="ESSENTIAL CHIFFON HIJAB - BLACK" price="Rs 5.59" 
                    originalPrice="Rs 5.5"/>
        <DressCard  name="ESSENTIAL CHIFFON HIJAB - BLACK" price="Rs 5.59" 
                    originalPrice="Rs 5.5"/>
        <DressCard  name="ESSENTIAL CHIFFON HIJAB - BLACK" price="Rs 5.59" 
                    originalPrice="Rs 5.5"/>
        </div>
        </div>
    )
}

export default RelatedProducts
