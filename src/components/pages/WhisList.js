import React from 'react'
import ProfileNavigation from '../profile/ProfileNavigation'
import Header from '../Header'
import DressCard from '../cards/DressCard';
import '../../styles/wishlist.css';
const WhisList = () => {
    return (
        <>
        <Header/>
        <div className="profile-page">
            <ProfileNavigation/>
            <div className="wish-list">
              <DressCard 
              name="ESSENTIAL CHIFFON HIJAB - BLACK" price="$5.99" 
              originalPrice="$5.99"
              />
              <DressCard 
              name="ESSENTIAL CHIFFON HIJAB - BLACK" price="$5.99" 
              originalPrice="$5.99"
              />
              <DressCard 
              name="ESSENTIAL CHIFFON HIJAB - BLACK" price="$5.99" 
              originalPrice="$5.99"
              />
              <DressCard 
              name="ESSENTIAL CHIFFON HIJAB - BLACK" price="$5.99" 
              originalPrice="$5.99"
              />
            </div>
        </div>
        </>
    )
}

export default WhisList
