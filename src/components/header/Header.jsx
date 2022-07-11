import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pf.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World! I'm</h5>
        <h1>Swapnil Sharma</h1>
        <h5 className='text-light'>Backend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt='' className='me-image'/>
        </div>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down!</a>
    </header>
  )
}

export default Header