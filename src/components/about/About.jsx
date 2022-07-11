import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me!</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
              I'm a Software Engineer with currently 3 years of experience in the industry working as a Backend Engineer.
              I'm always up for a game of table tennis and I love talking about everything and anything!
              Apart from being a coder, I'm a musician as well. I play guitar, keyboard and also currently learning singing.
              I actively participate in activities organized by dev communities and I'm also a Mentor at Growverse.
          </p>

            <a href='#contact' className='btn btn-primary'>Let's connect!</a>
          

        </div>
      </div>
    </section>
  )
}

export default About