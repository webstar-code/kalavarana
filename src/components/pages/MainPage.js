import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Header from '../Header'
import Banner from '../Banner'
import Cards from '../cards/Cards'
import Cards2 from '../cards/Cards2'
import banner1 from '../../assetsKalavarna/images/5.png'
import banner2 from '../../assetsKalavarna/images/3.png'

// import banner2 from '../../assets/img/banner-2.png'
import banner3 from '../../assets/img/banner-3.png'
import banner4 from '../../assets/img/banner-4.png'
import Feautred from '../Feautred'
import Footer from '../Footer'
import '../../styles/home.css'
const MainPage = () => {
   return (
      <>
         <Header />
         <div className="w-full h-screen mb-12" style={{ marginBottom: '20px' }}>
            {/* <Banner 
           img={banner1}
            height="512px"
            /> */}
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ByH9LuSILxU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Cards
               collection="Featured Paintings"
               colors />
            <Banner
               img={banner2}
               height="512px"
            />

            {/* <Cards2 /> */}
            {/* <Feautred /> */}
            <Footer />
         </div>
      </>
   )
}

export default MainPage
