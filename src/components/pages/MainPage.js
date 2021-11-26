import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Banner from '../Banner'
import Cards from '../cards/Cards'
import { banner1, banner2, banner3, PAINTING3 } from '../../assets'
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader'
import '../../styles/home.css'
import { firestore } from '../../firebase'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const dummyData = [
   {
      picUrl: PAINTING3,
      name: 'Ganesh Painting',
   },
   {
      picUrl: PAINTING3,
      name: 'Balaji Painting',
   },
   {
      picUrl: PAINTING3,
      name: 'Trimuti Painting',
   },
   {
      picUrl: PAINTING3,
      name: 'Chakra Painting',
   },


]


const MainPage = () => {
   const [subcats, setSubCats] = useState([]);

   useEffect(() => {
      firestore.collection('SUB-CATAGORIES').get().then((snapshot) => {
         console.log(snapshot.docs.map((doc) => doc.data()))
         setSubCats(snapshot.docs.map((doc) => doc.data()))
      }).catch((err) => console.log(err))
   }, []);
   // new YouTubeToHtml5();

   useEffect(() => {
      new YouTubeToHtml5();
   }, []);
   return (
      <>
         <div className="w-full mb-12" style={{ marginBottom: '20px' }}>
            <div className="relative flex items-center justify-center">
               <video
                  autoPlay
                  loop
                  muted
                  data-yt2html5="https://youtu.be/xeXcCxvjVfA"
                  className="w-full h-96 md:w-full md:h-full mt-20 md:mt-36 object-cover"
               ></video>
               <h1 className="absolute font-newYork text-4xl md:text-8xl ml-auto mt-auto z-10 text-white text-center md:-mt-20 select-none leading-relaxed">Arts Emporium</h1>
            </div>

            <Cards
               collection="Featured Paintings"
               colors />
            <Carousel
               autoPlay
               interval={4000}
               showArrows={false}
               showStatus={false}
               showThumbs={false}
               showIndicators={false}
               infiniteLoop
            >
               <div className="w-full h-56 md:h-full object-cover">
                  <img src={banner1} className="w-full h-full object-cover object-left" />
               </div>
               <div className="w-full h-56 md:h-full object-cover">
                  <img src={banner2} className="w-full h-full object-cover object-left" />
               </div>
               <div className="w-full h-56 md:h-full object-cover">
                  <img src={banner3} className="w-full h-full object-cover object-left" />
               </div>
            </Carousel>
            {/* <Banner
               img={banner1}
               height="512px"
               text="Lorem ipsum dolor sit amet"
               styles="text-white"
            /> */}


            <div className="flex p-6 flex-col-reverse md:flex-col items-center justify-center my-32">
               <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  {subcats.length > 0 && subcats.map((subcat) => (
                     <div className="max-w-xs relative bg-white flex flex-col items-start justify-between p-2 border border-primary border-opacity-50">
                        <img src={subcat.picUrl} className="w-full" />
                        <div className="flex flex-col p-1 md:p-2 md:px-1 mb-2 md:mb-4 text-black">
                           <h3 className="text-md my-2 md:text-2xl text-primary font-medium py-1">{subcat.name}</h3>
                           <Link to={`/category/${subcat.category.name}/${subcat.name}`}>
                              <button className="w-24 md:w-32 text-sm md:text-base py-1 px-2 bg-transparent border border-primary uppercase">View aLL</button>
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <Carousel
               autoPlay
               interval={4000}
               showArrows={false}
               showStatus={false}
               showThumbs={false}
               showIndicators={false}
               infiniteLoop
            >
               <div className="w-full h-56 md:h-full object-cover">
                  <img src={banner1} className="w-full h-full object-cover object-left" />
               </div>
               <div className="w-full h-56 md:h-full object-cover">
                  <img src={banner2} className="w-full h-full object-cover object-left" />
               </div>
               <div className="w-full h-56 md:h-full object-cover">
                  <img src={banner3} className="w-full h-full object-cover object-left" />
               </div>
            </Carousel>
            {/* <Banner
               img={banner2}
               height="512px"
               text="Lorem ipsum dolor sit amet"
               styles="text-primary"
            /> */}

            {/* <div className="w-full bg-gray-100">
               <div className="bg-gray-100 md:w-4/5 mx-auto p-6 md:p-32 flex flex-col justify-start">
                  <div className="flex items-center justify-between">
                     <div className="">
                        <h1 className="text-3xl text-primary font-bold">@kalavarana</h1>
                     </div>
                     <a href="https://instagram.com/kalavarana?utm_medium=copy_link" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                        <button className="px-2 py-1 md:p-2 border-2 border-primary text-primary text-md">Follow US</button>
                     </a>
                  </div>
                  <div className="grid py-6 mx-auto grid-cols-3 md:grid-cols-3 place-items-center">

                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                     <img src={banner2} className="w-64 p-0 md:p-2" alt="" />
                  </div>
               </div>
            </div> */}


         </div>
      </>
   )
}

export default MainPage
