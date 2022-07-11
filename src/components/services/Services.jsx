import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h1>Things I do</h1>

      <div className="container services__container">

        <article className='service'>

          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have experience in developing websites from scratch.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can assist in designing backend solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have experience in Java/React/SpringBoot/SQL/Python.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can assist in end to end developement of a web application.</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Mentorship</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reach out to me on topmate.io to connect with me for free.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can guide you on how to prepare for interviews.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can take mock interviews.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I also do resume reviews.</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have recently started creating content on youtube.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I teach Data Structures and algorithms with code examples and multiple approaches.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I keep uploading music videos covering songs which I like the most.</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services