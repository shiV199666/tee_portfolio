import React, { useState } from 'react';

import { GiGrandPiano } from "react-icons/gi";
import Piano from '../assets/piano.png'
import Writer from '../assets/writer.png'
import Acting from '../assets/acting.png'
import Singing from '../assets/singing.png'
import { FaPenNib } from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";


const Services = () => {
  const [cards] = useState([
    {
      // icon: <GiGrandPiano className='text-[100px] mb-8 mt-6'/>,
      icon: <img className='w-[50%]' src={Piano}/>,
      bgColor: 'bg-[#FCDD57]',
      title: 'Pianist',
      class: 'service-piano',
      titleColor: 'text-[#F9C01E]',
      text: `My method of teaching is a little unconventional but effective, nonetheless.
      The best analogy I can use is giving students the puzzle pieces without interfering in their process of putting it together.
      There is guidance, but no hand-holding because in my 16 years of learning,
      I've found that the information and technique that has never left my system and been the easiest to turn into muscle memory is that which I've figured out myself using the tools my teachers have equipped me with,
      rather than the machinery they have built for me.`
    },
    {
      // icon: <FaPenNib className='text-[100px]  mb-8 mt-6'/>,
      icon: <img className='w-[50%]' src={Writer}/>,
      title: 'Writer',
      bgColor: 'bg-[#FFB5D0]',
      class: 'service-writer',
      titleColor: 'text-[#FF80AA]',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      // icon: <FaTheaterMasks className='text-[100px]  mb-8 mt-6'/>,
      icon: <img className='w-[50%]' src={Acting}/>,
      title: 'Acting',
      bgColor: 'bg-[#CEF26B]',
      class: 'service-actor',
      titleColor: 'text-[#A6E62D]',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      // icon: <FaTheaterMasks className='text-[100px]  mb-8 mt-6'/>,
      icon: <img className='w-[50%]' src={Singing}/>,
      title: 'Singer',
      bgColor: 'bg-[#A290E6]',
      class: 'service-singing',
      titleColor: 'text-[#6751CF]',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
  ])
  return (
    <section className='section h-full background-service' id='services'>
      <div className='container-service mx-[5%]'>
        <div className='flex flex-col gap-y-3'>
            <h2 className='section-heading'>
              <span className=''>Services</span>
            </h2>
            {/* <span>I take a pride in saying that</span> */}
            
          <div className='flex flex-wrap m-4'>
          <div className='service-block w-layout-grid' > 
            <div className='w-layout-grid services-row'>
              {
                cards.map((card, i) => (
                  <>
                    {
                      i > 1 ? (
                      <div key={i} className=''>
                         <div className={'bg-[#F1ECE8] services-container-box '+ card.class}>
                        {/* {card.icon} */}
                        <h3 className={'text-black' + ' text-[50px] font-extrabold mb-2 '}>{card.title}</h3>
                            <p className='text-[20px] font-bold'>
                              {card.text}
                            </p>
                            <button className='btn btn-lg' href='#'>learn more</button>
                        </div>
                      </div>
                    ) : (
                      <div key={i} className={i === 0 ? 'service-box1' : 'service-box2'}>
                        <div className={'bg-[#F1ECE8] services-container-box '+ card.class}>
                        {/* {card.icon} */}
                          <h3 className={'text-black' + ' text-[50px] font-extrabold mb-2 '}>{card.title}</h3>
                            <p className='font-bold text-[20px]'>
                              {card.text}
                            </p>
                            <button className='btn btn-lg' href='#'>learn more</button>
                        </div>
                      </div>
                    )
                    }
                  </>
                  
                
                ))
              }
            </div>
          </div>
        </div>
        </div>
      </div>     
    </section>
  );
};

export default Services;
