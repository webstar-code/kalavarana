import React from 'react'
import '../../styles/about.css'
import Header from '../Header'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
            <div className="about-section">
                {/* <div className="about-img">

                </div> */}
                <div className="about-text">
                    <h1 className="text-3xl text-primary font-bold">About US</h1>
                    <p>A classical form of art which had developed in 16th Century Tanjore (Thanjavur) during the reign of the Marathas, this form of painting is the most popular in the southern regions of India. Embedded with semi-precious stones, exquisite glass pieces, and pearls, they add a multi-dimensional effect, further adding to their magnificence.

                        Kalavarana has been set up by the professional Tanjore painting experts providing uniqueness in the diverse field of making Thanjavur paintings.

                        The Art form draws its inspiration from 1600 A.D. where resources are chiefly inscribed through classical dance and music, cultures and traditions of the Indian Heritage, and quintessential composition of rich and vivid spectrums.

                        The impact of the paintings are not only seen during the brightest lights but also in the darkest rooms due to the embossing work on the canvas. The Artists turns out a repertoire of paintings on different subjects and distinct qualities depending upon the Patron’s visions, urgency, influence and financial audacity.</p>
                </div>
                <div className="about-text">
                    <h1 className="text-3xl text-primary font-bold">Our Company</h1>
                    <p>We not only deal with patrons but also provide justice to the divine work and make it possible to stand exclusively in the society. Our Handmade designs are depicted to touch the roots of the rich heritage of India. Providing assurance of implementing visions of the customer as well as putting our creativity into the canvas is the only motive of the company. It is not just an economic trade for us, but a zeal and commitment for the Art form. The Indian Art has been taken forward by us to protect and cherish what our roots had offered. It is said that the Indian culture is the most diverse and rich in its form and through Tanjore paintings, its distinctively been recognized in the whole world. The exquisite customized paintings will not only look impeccable on your wall but also are the best souvenirs for festive occasions.</p>
                </div>

                <div className="about-text">
                    <h1 className="text-3xl text-primary font-bold">Our Team</h1>

                    <p>Art is magical, but it’s not magic. It is the process of an Artist tirelessly creating the best that he can and bring it into life. The professionals are keenly investing their efforts in the making of each and every painting to give you the best of all.</p>
                </div>
                {/* <h1 className="text-3xl text-primary font-bold py-7 t">Interested?</h1> */}
                {/* <div className="about-text">
                    <h1 className="text-4xl text-primary font-bold py-7">Shop From Our Collection</h1>
                    <p className="">We have a wide range of paintings to choose from,
                        find the one most suitable at an affordable price.</p>
                        <Link to="/">Go Shop</Link>
                </div> */}


            </div>
            <Footer />
        </>
    )
}

export default About
