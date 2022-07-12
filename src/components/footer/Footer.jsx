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
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com' target='_blank'><FaFacebookF /></a>
        <a href='https://www.linkedin.com/in/swapnil-sh' target='_blank'><FiLinkedin /></a>
        <a href='https://twitter.com/SwapnilSharma18' target='_blank'><IoLogoTwitter /></a>
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