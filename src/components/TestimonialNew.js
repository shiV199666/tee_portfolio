import React, { useState } from 'react';

// intersection observer hook
import { useInView } from 'react-intersection-observer';
import Writer from '../assets/work/writer.jpg';

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
            position: 'Customer',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
        },
        {
            image: Writer,
            name: 'Anne Smith',
            position: 'Customer',
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
        }
    ]);
  return (
    <section className='section' id='testimonial' ref={ref}>
        <div className='container mx-auto'>
            <div className='testi'>
                <div className='head'>
                    <h3 className='text-[55px] font-bold leading-[0.8] mb-2 lg:text-[40px]'>Testimonials.</h3>
                    <p>See what people are saying</p>
                </div>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, ]}
                loop={true}
                autoHeight={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
               
                            {
                                testimonialData.map((testimonial, i) => (
                                    <SwiperSlide key={i}>
                                        <div className='wrapper'>
                                            <div className='thumbnail'>
                                                <img src={testimonial.image} alt=''/>
                                            </div>
                                            <div className='aside'>
                                                <p>{testimonial.message}</p>
                                                <div className='name'>
                                                    <h4>{testimonial.name}</h4>
                                                    <p>{testimonial.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                    
                </Swiper>
            </div>
        </div>
    </section>
    
  );
};

export default TestimonialNew;
