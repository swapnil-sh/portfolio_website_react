import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Avatar1.svg'
import AVTR2 from '../../assets/Avatar2.svg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Rohan Das - Tech Mojo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
  {
    avatar: AVTR1,
    name: 'Sahil Kalyani - Amazon',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
  {
    avatar: AVTR2,
    name: 'Manasa Maragiri - Synchron',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
  {
    avatar: AVTR1,
    name: 'Abhishek Lal - Microsoft',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from the people I have worked with</h5>
      <h1>Testimonials</h1>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div key={index} className='client__avatar'>
                  <img src={avatar} alt='' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>   
            )
          })
        } 
      </Swiper>
    </section>
  )
}

export default Testimonials