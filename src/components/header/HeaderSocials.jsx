import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:linkedin.in/swapnil-sh' target="_blank"><BsLinkedin /></a>
        <a href='https:github.com/swapnil-sh' target="_blank"><BsGithub /></a>
        <a href='https:twitter.in/swapnilsharma18' target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials