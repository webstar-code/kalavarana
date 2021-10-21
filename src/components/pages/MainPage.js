import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Header from '../Header'
import Banner from '../Banner'
import Cards from '../cards/Cards'
import banner2 from '../../assetsKalavarna/images/3.png'
import Footer from '../Footer'
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader'
import SubCatProducts from '../SubCategoryCards';
import '../../styles/home.css'
import { firestore } from '../../firebase'

const MainPage = () => {
   const [subcats, setSubCats] = useState([]);

   useEffect(() => {
      firestore.collection('SUB-CATAGORIES').get().then((snapshot) => {
         console.log(snapshot.docs.map((doc) => doc.data()))
         setSubCats(snapshot.docs.map((doc) => doc.data()))
      }).catch((err) => console.log(err))
   }, []);   
   new YouTubeToHtml5();

   useEffect(() => {
      console.log("Ad");
      new YouTubeToHtml5();
   });
   return (
      <>
         <div className="w-full h-screen mb-12" style={{ marginBottom: '20px' }}>
            <div className="relative flex items-center justify-center">
               <video
                  autoPlay
                  controls
                  loop
                  muted
                  data-yt2html5="https://youtu.be/xeXcCxvjVfA"
                  className="w-full h-96 md:w-full md:h-full mt-20 md:mt-36 object-cover"
               ></video>
               {/* <h1 className="absolute text-4xl md:text-8xl ml-auto mt-auto z-10 text-white font-semibold text-center md:-mt-20 select-none leading-relaxed">Home for<br />Tanjore Paintings</h1> */}
            </div>

            <Cards
               collection="Featured Paintings"
               colors />
            <Banner
               img={banner2}
               height="512px"
            />

            {subcats.length > 0 && subcats.map((subcat) => (
               <SubCatProducts subcat={subcat} />
            ))}
            <Footer />
         </div>
      </>
   )
}

export default MainPage
