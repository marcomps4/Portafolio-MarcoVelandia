import React from 'react';
import './testimonials.css';
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {

  const data = [
    {
      avatar: Avatar1,
      name: "Jhoana Garzón",
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa? Fugit qui molestiae velit aperiam mollitia quod consectetur, non eius quaerat aliquid, neque reiciendis illum cupiditate culpa impedit officiis voluptate.'
    },
    {
      avatar: Avatar2,
      name: "Carlos Romero",
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa? Fugit qui molestiae velit aperiam mollitia quod consectetur, non eius quaerat aliquid, neque reiciendis illum cupiditate culpa impedit officiis voluptate.'
    },
    {
      avatar: Avatar3,
      name: "Wilson Montenegro",
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa? Fugit qui molestiae velit aperiam mollitia quod consectetur, non eius quaerat aliquid, neque reiciendis illum cupiditate culpa impedit officiis voluptate.'
    },
    {
      avatar: Avatar4,
      name: "Karen Aguilar",
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa? Fugit qui molestiae velit aperiam mollitia quod consectetur, non eius quaerat aliquid, neque reiciendis illum cupiditate culpa impedit officiis voluptate.'
    },
  ]
  return (
    <section id='testimonials'>
      <h2>Testimonios</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      >
       {
        data.map(({avatar,name,review}, index) =>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt='Avatar uno'/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        }
        )
       }

        
      </Swiper>
    </section>
  )
}

export default Testimonials