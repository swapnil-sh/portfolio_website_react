import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Rohan Das',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
  {
    avatar: AVTR2,
    name: 'Sahil Kalyani',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
  {
    avatar: AVTR3,
    name: 'Manasa Maragiri',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur iste pariatur ab quos nemo molestiae rem et recusandae placeat! Obcaecati suscipit culpa eligendi at! Nemo iure cupiditate laudantium pariatur.'
  },
  {
    avatar: AVTR4,
    name: 'ABhishek Lal',
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