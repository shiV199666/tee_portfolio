import React, { useState } from 'react';

import { GiGrandPiano } from "react-icons/gi";
import { FaPenNib } from "react-icons/fa6";
import { FaTheaterMasks } from "react-icons/fa";


const Services = () => {
  const [cards] = useState([
    {
      icon: <GiGrandPiano className='text-[50px] mb-6'/>,
      title: 'Pianist',
      text: `My method of teaching is a little unconventional but effective, nonetheless.
      The best analogy I can use is giving students the puzzle pieces without interfering in their process of putting it together.
      There is guidance, but no hand-holding because in my 16 years of learning,
      I've found that the information and technique that has never left my system and been the easiest to turn into muscle memory is that which I've figured out myself using the tools my teachers have equipped me with,
      rather than the machinery they have built for me.`
    },
    {
      icon: <FaPenNib className='text-[50px] mb-6'/>,
      title: 'Writer',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      icon: <FaTheaterMasks className='text-[50px] mb-6'/>,
      title: 'Acting',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    }
  ])
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-3 lg:items-center'>
            <h2 className='text-[55px] font-bold leading-[0.8] mb-4 lg:text-[40px]'>
              My <span className='text-[#E7473C]'>Services</span>
            </h2>
            <span>I take a pride in saying that</span>
          <div className='flex flex-wrap -m-4'>
            {
              cards.map((card, i) => (
                <div key={i} className='services-list p-4 sm:w-1/2 lg:w-1/3'>
                  <div className='h-full rounded-lg overflow-hidden'>
                  {card.icon}
                    <h3 className='text-[30px] font-semibold mb-2'>{card.title}</h3>
                      <p>
                        {card.text}
                      </p>
                      <a className='no-underline colo' href='#'>learn more</a>
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

export default Services;
