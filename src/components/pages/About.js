import React from 'react'
import '../../styles/about.css'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
            <div className="w-4/5 md:w-3/5 mx-auto mt-20 md:mt-36 flex flex-col items-center justify-center mb-12">
                {/* <div className="about-img">

                </div> */}
                <div className="flex flex-col w-full items-start justify-start">
                    <h1 className="text-3xl text-primary font-bold py-7 w-full border-b border-black">About US</h1>
                    <p className="text-gray-600 py-7 w-full leading-loose">A classical form of art which had developed in 16th Century Tanjore (Thanjavur) during the reign of the Marathas, this form of painting is the most popular in the southern regions of India. Embedded with semi-precious stones, exquisite glass pieces, and pearls, they add a multi-dimensional effect, further adding to their magnificence.

                        Kalavarana has been set up by the professional Tanjore painting experts providing uniqueness in the diverse field of making Thanjavur paintings.

                        The Art form draws its inspiration from 1600 A.D. where resources are chiefly inscribed through classical dance and music, cultures and traditions of the Indian Heritage, and quintessential composition of rich and vivid spectrums.

                        The impact of the paintings are not only seen during the brightest lights but also in the darkest rooms due to the embossing work on the canvas. The Artists turns out a repertoire of paintings on different subjects and distinct qualities depending upon the Patron’s visions, urgency, influence and financial audacity.</p>
                </div>
                <div className="flex flex-col w-full items-start justify-start">
                    <h1 className="text-3xl text-primary font-bold py-7 w-full border-b border-black">Our Company</h1>
                    <p className="text-gray-600 leading-loose py-7 w-full">We not only deal with patrons but also provide justice to the divine work and make it possible to stand exclusively in the society. Our Handmade designs are depicted to touch the roots of the rich heritage of India. Providing assurance of implementing visions of the customer as well as putting our creativity into the canvas is the only motive of the company. It is not just an economic trade for us, but a zeal and commitment for the Art form. The Indian Art has been taken forward by us to protect and cherish what our roots had offered. It is said that the Indian culture is the most diverse and rich in its form and through Tanjore paintings, its distinctively been recognized in the whole world. The exquisite customized paintings will not only look impeccable on your wall but also are the best souvenirs for festive occasions.</p>
                </div>

                <div className="flex flex-col w-full items-start justify-start">
                    <h1 className="text-3xl text-primary font-bold py-7 w-full border-b border-black">Our Team</h1>

                    <p className="text-gray-600 leading-loose py-7 w-full">Art is magical, but it’s not magic. It is the process of an Artist tirelessly creating the best that he can and bring it into life. The professionals are keenly investing their efforts in the making of each and every painting to give you the best of all.</p>
                </div>
                <div className="flex flex-col w-full items-start justify-start">
                    <h1 className="text-3xl text-primary font-bold py-7 w-full border-b border-black">Interested?</h1>
                    <h1 className="text-3xl text-primary font-bold py-7 w-full border-b border-black">Shop From Our Collection</h1>
                    <p className="text-gray-600 leading-loose py-7 w-full md:w-96">We have a wide range of paintings to choose from,
                        find the one most suitable at an affordable price.</p>
                    <Link to="/" className="text-blue-600 underline">Go Shop</Link>
                </div>


            </div>
        </>
    )
}

export default About
