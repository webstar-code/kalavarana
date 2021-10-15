import React from 'react'
import logo from '../assetsKalavarna/logos/blue_bg_logo.png';
import {Link} from 'react-router-dom'
import {AiFillInstagram,AiFillYoutube,AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer className="w-full px-32 py-16 flex justify-between items-center" style={{background: '#08263F'}}>
            <div className="flex flex-col h-full">
                 <img src={logo} alt="KALAVARNA" className="mb-6 h-full" />
                 <div className="footer-icons h-1/2 flex items-center justify-evenly text-white text-xl mb-24">
                 <FaFacebookF/>
                  <AiFillInstagram/>
                  <AiFillYoutube/>
                  <AiOutlineTwitter/>
                 </div>
                 <p className="text-sm text-white">Designed and developed by<a className="underline text-sm px-1" href="https://flexxited.com/">flexxited</a></p>
            </div>
            <div className="footer-items flex h-full text-white">
                <div className="flex flex-col h-full justify-evenly">
                   <h3 className="text-xl font-bold">INFORMATION</h3>
                   <Link to="/profile"><p>Account</p></Link>
                   <Link to="/blog"><p>Blog</p></Link>
                   <Link to="/terms"><p>Terms and Service</p></Link>
                   <Link to="privacy-policy"><p>Privacy Policy</p></Link>
                </div>
                <div className="ml-10 flex flex-col h-full justify-evenly">
                <h3 className="text-xl font-bold">CUSTOMER CARE</h3>
                   <Link to="/connect"><p>Support & FAQ</p></Link>
                   <p>Shipping & Returns</p>
                </div> 
            </div>
            <div className="footer-icons-2 h-1/2 flex items-center justify-evenly text-white text-xl">
                 <FaFacebookF className="foote-icon"/>
                  <AiFillInstagram className="foote-icon"/>
                  <AiFillYoutube className="foote-icon"/>
                  <AiOutlineTwitter className="foote-icon"/>
                 </div>
        </footer>
    )
}

export default Footer
