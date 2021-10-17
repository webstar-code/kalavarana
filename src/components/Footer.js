import React from 'react'
import logo from '../assetsKalavarna/logos/blue_bg_logo.png';
import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className="w-full  bg-primary">
            <footer className="w-full md:w-4/5 mx-auto px-32 py-8 flex justify-between items-center ">
                <div className="flex flex-col h-full items-center">
                    <img src={logo} alt="KALAVARNA" className="w-32 h-24 md:w-52 md:h-36 mb-6" />
                    <div className="w-full flex items-center justify-evenly text-white text-xl mb-24">
                        <FaFacebookF />
                        <AiFillInstagram />
                        <AiFillYoutube />
                        <AiOutlineTwitter />
                    </div>
                    <p className="text-sm text-white">Designed and developed by<a className="underline text-sm px-1" href="https://flexxited.com/">flexxited</a></p>
                </div>
                <div className="mt-10 md:mt-0 flex h-full text-white">
                    <div className="flex flex-col h-full justify-evenly">
                        <h3 className="text-sm font-medium md:text-xl md:font-bold">INFORMATION</h3>
                        <Link to="/profile"><p className="font-normal py-2">Account</p></Link>
                        <Link to="/blog"><p className="font-normal py-2">Blog</p></Link>
                        <Link to="/terms"><p className="font-normal py-2">Terms and Service</p></Link>
                        <Link to="privacy-policy"><p className="font-normal py-2">Privacy Policy</p></Link>
                    </div>
                    <div className="ml-10 flex flex-col h-full justify-evenly">
                        <h3 className="text-sm font-medium md:text-xl md:font-bold">CUSTOMER CARE</h3>
                        <Link to="/connect"><p className="font-normal py-2">Support & FAQ</p></Link>
                        <p className="font-normal py-2">Shipping & Returns</p>
                    </div>
                </div>
                {/* <div className="footer-icons-2 h-1/2 flex items-center justify-evenly text-white text-xl">
                 <FaFacebookF className="foote-icon"/>
                  <AiFillInstagram className="foote-icon"/>
                  <AiFillYoutube className="foote-icon"/>
                  <AiOutlineTwitter className="foote-icon"/>
                 </div> */}
            </footer>
        </div>

    )
}

export default Footer
