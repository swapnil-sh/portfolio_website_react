import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaGuitar} from 'react-icons/fa'

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
              <h5>Engineer</h5>
              <small>3+ years</small>
            </article>

            <article className='about__card'>
              <FaGuitar  className='about__icon'/>
              <h5>Musician</h5>
              <small>Guitar/Synth/Vocal</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Mentor</h5>
              <small>Growverse</small>
            </article>
          </div>

          <p>
              I'm a Software Engineer with currently 3 years of experience in the industry working as a Backend Engineer.
              I'm always up for a game of table tennis and I love talking about tech/sports/music/webseries/life!
              I actively participate in activities organized by dev communities and I'm also currently a Mentor at Growverse.
              Apart from being a coder, I'm try to evolve as a good musician as well. I play guitar, keyboard and also currently learning vocals.
              Cheers!
          </p>

            <a href='#contact' className='btn btn-primary'>Let's connect!</a>
          

        </div>
      </div>
    </section>
  )
}

export default About