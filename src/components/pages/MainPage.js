import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Header from '../Header'
import Banner from '../Banner'
import Cards from '../cards/Cards'
import Cards2 from '../cards/Cards2'
import banner1 from '../../assets/img/banner-1.png'
import banner2 from '../../assets/img/banner-2.png'
import banner3 from '../../assets/img/banner-3.png'
import banner4 from '../../assets/img/banner-4.png'
import Feautred from '../Feautred'
import Footer from '../Footer'
import '../../styles/home.css'
const MainPage = () => {
    return (
        <>
        <Header/>
        <div className="w-full h-screen mb-12" style={{marginBottom:'20px'}}>
           <Banner img={banner1}/>
           <Cards bannerTitle="SPRING OASIS"
           collection="spring-oasis-product"
            featuredCollection colors/>
           <Banner
           img={banner2}

           text="ALL THE VERITIES OF HIJABS YOU NEED"
           />
           <Cards bannerTitle="HIJAB SALE" />
           <Banner
           img={banner3}

           text="ALL THE VERITIES OF HIJABS YOU NEED"
           />
           <Cards bannerTitle="BRAND1" />
           <Banner
           img={banner4}

           text="ALL THE VERITIES OF HIJABS YOU NEED"
           />
        <Cards2/>
        <Feautred/>
        <Footer/>
        </div>
       </> 
    )
}

export default MainPage
