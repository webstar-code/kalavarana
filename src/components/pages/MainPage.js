import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Banner from '../Banner'
import Cards from '../cards/Cards'
import banner2 from '../../assetsKalavarna/images/3.png'
import Footer from '../Footer'
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader'
import SubCatProducts from '../SubCategoryCards';
import '../../styles/home.css'
import { firestore } from '../../firebase'
import { Link } from 'react-router-dom'

const dummyData = [
   {
      picUrl: banner2,
      name: 'Ganesh Painting',
   },
   {
      picUrl: banner2,
      name: 'Balaji Painting',
   },
   {
      picUrl: banner2,
      name: 'Trimuti Painting',
   },
   {
      picUrl: banner2,
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
      console.log("Ad");
      new YouTubeToHtml5();
   }, []);
   return (
      <>
         <div className="w-full h-screen mb-12" style={{ marginBottom: '20px' }}>
            <div className="relative flex items-center justify-center">
               <video
                  autoPlay
                  loop
                  muted
                  data-yt2html5="https://youtu.be/xeXcCxvjVfA"
                  className="w-full h-96 md:w-full md:h-full mt-20 md:mt-36 object-cover"
               ></video>
               <h1 className="absolute text-4xl md:text-8xl ml-auto mt-auto z-10 text-white font-semibold text-center md:-mt-20 select-none leading-relaxed">Home for<br />Tanjore Paintings</h1>
            </div>

            <Cards
               collection="Featured Paintings"
               colors />
            <Banner
               img={banner2}
               height="512px"
            />

      
            <div className="flex p-6 flex-col-reverse md:flex-col items-center justify-center my-32">
               <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  {subcats.length > 0 && subcats.map((subcat) => (
                     <div className="max-w-xs relative bg-white flex flex-col items-center justify-between p-2 border border-primary border-opacity-50">
                        <img src={subcat.picUrl} className="w-full" />
                        <div className="flex flex-col p-1 md:p-2 md:px-1 mb-2 md:mb-4 text-black">
                           <h3 className="text-md my-2 md:text-2xl text-primary font-medium py-1">{subcat.name}</h3>
                           {/* <Link to={`/category/${subcat.category.name}/${subcat.name}`}> */}
                           <button className="w-24 md:w-32 text-sm md:text-base py-1 px-2 bg-transparent border border-primary uppercase">View aLL</button>
                           {/* </Link> */}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

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


            <Footer />
         </div>
      </>
   )
}

export default MainPage
