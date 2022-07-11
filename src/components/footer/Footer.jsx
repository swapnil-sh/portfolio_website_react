import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiLinkedin} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Swapnil Sharma</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#testimonials'>testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://linkedin.com'><FiLinkedin /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy;
          Swapnil Sharma 
        </small>
      </div>
    </footer>
  )
}

export default Footer