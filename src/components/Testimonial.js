import React, { useState } from 'react';

// intersection observer hook
import { useInView } from 'react-intersection-observer';
import Writer from '../assets/avatar.png';

// import Swiper JS
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialNew = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
      })
    // testimonial data
    const [testimonialData] = useState([
        {
            image: Writer,
            name: 'Anne Smith',
            gridArea: 'item1',
            color: 'bg-[#A290E6]',
            position: 'Customer',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
        },
        {
            image: Writer,
            gridArea: 'item2',
            name: 'Anne Smith',
            color: 'bg-[#A290E6]',
            position: 'Customer',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
        },
        {
          image: Writer,
          name: 'Anne Smith',
          gridArea: 'Area',
          color: 'bg-[#A290E6]',
          position: 'Customer',
          message:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
      },
      {
          image: Writer,
          gridArea: 'Area-2',
          name: 'Anne Smith',
          color: 'bg-[#A290E6]',
          position: 'Customer',
          message:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
      },
      {
        image: Writer,
        name: 'Anne Smith',
        gridArea: 'Area',
        color: 'bg-[#A290E6]',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: Writer,
        gridArea: 'Area-2',
        name: 'Anne Smith',
        color: 'bg-[#A290E6]',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
      },
      {
        image: Writer,
        name: 'Anne Smith',
        gridArea: 'Area',
        color: 'bg-[#A290E6]',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
      },
      {
          image: Writer,
          gridArea: 'Area-2',
          name: 'Anne Smith',
          color: 'bg-[#A290E6]',
          position: 'Customer',
          message:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
      },{
        image: Writer,
        name: 'Anne Smith',
        gridArea: 'Area',
        color: 'bg-[#A290E6]',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
        image: Writer,
        gridArea: 'Area-2',
        name: 'Anne Smith',
        color: 'bg-[#A290E6]',
        position: 'Customer',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },{
      image: Writer,
      name: 'Anne Smith',
      gridArea: 'Area',
      color: 'bg-[#A290E6]',
      position: 'Customer',
      message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: Writer,
      gridArea: 'Area-2',
      name: 'Anne Smith',
      color: 'bg-[#A290E6]',
      position: 'Customer',
      message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: Writer,
      gridArea: 'Area-2',
      name: 'Anne Smith',
      color: 'bg-[#A290E6]',
      position: 'Customer',
      message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: Writer,
      gridArea: 'Area-2',
      name: 'Anne Smith',
      color: 'bg-[#A290E6]',
      position: 'Customer',
      message:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    }
        
    ]);
  return (
    <section className='section testimonialsection h-full' id='testimonial' ref={ref}>
        <div className='mx-[3%] h-full w-full'>
          <div className='flex flex-col'>
          <div className='justify-start items-start'>
              <h3 className='testimonial-title'>Feedback That Inspires</h3>
              {/* <p>See what people are saying</p> */}
          </div>
          <div className='testimonies-section'>
          {
                                testimonialData.map((testimonial, i) => (
                                   <div key={i} className={testimonial.color+' testimonies-card item'+(i+1)}>
                                    <div className='w-[100px]'>
                                                <img src={testimonial.image} className='w-[100%]' alt=''/>
                                    </div>
                                    <div className=''>
                                        <p>{testimonial.message}</p>
                                        <div className=''>
                                            {/* <h4>{testimonial.name}</h4> */}
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                   </div>

                                ))
            }
          </div>
          </div>
         
            
        </div>
    </section>
    
  );
};

export default TestimonialNew;
