import React from 'react'
import logoBlack from '../assets/img/ana-logo-black.png'
import {AiFillInstagram,AiFillYoutube,AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-black w-full px-32 py-16 flex justify-between">
            <div className="flex flex-col h-full justify-between">
                 <img src={logoBlack} alt="ANA" className="mb-24" />
                 <div className=" h-1/2 flex items-center justify-evenly text-white text-xl">
                 <FaFacebookF/>
                  <AiFillInstagram/>
                  <AiFillYoutube/>
                  <AiOutlineTwitter/>
                 </div>
            </div>
            <div className="footer-items flex h-full text-white">
                <div className="flex flex-col h-full justify-evenly">
                   <h3 className="text-xl font-bold">INFORMATION</h3>
                   <p>Account</p>
                   <p>Our Brand</p>
                   <p>Careers</p>
                   <p>Become An Ambassador</p>
                   <p>Blog</p>
                   <p>Terms and Service</p>
                   <p>Privacy Policy</p>
                </div>
                <div className="ml-10 flex flex-col h-full justify-evenly">
                <h3 className="text-xl font-bold">CUSTOMER CARE</h3>
                   <p>Support & FAQ</p>
                   <p>Shipping & Returns</p>
                   <p>Size Guide</p>
                </div> 
            </div>
        </footer>
    )
}

export default Footer
