import React, { useRef, useState } from 'react';

// intersection observer hook
import { useInView } from 'react-intersection-observer';

import Piano from '../assets/work/piano.jpg';
import Acting from '../assets/work/acting.jpg';
import Writer from '../assets/work/writer.jpg';
import Singer from '../assets/work/singer.jpg';

// motion
import { motion } from 'framer-motion';

import { useScroll, useSpring, useTransform } from 'framer-motion';

const Single = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["end end", "start start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <section className='worksection'>
      <div className='container flex overflow-hidden justify-center h-[100%] items-center mx-auto'>
        <div className='wrapper'>
          <div className='border-2 border-white/50 imageContainer' ref={ref}>
            <img className='group-hover:scale-125 transition-all duration-500' src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{y}}>
            <h2 className='text-[60px] font-semibold mb-2'>{item.title}</h2>
            <p>{item.desc}</p>
            <button className='btn btn-'>See more</button>
          </motion.div>
        </div>
      </div>
    </section>
  ) 
  
}
const Work = () => {

  const [items] = useState([
    {
      id: 1,
      title: 'Pianist',
      img: Piano,
      desc: `Fire can glow,dazzle and even burn`
    },
    {
      id: 2,
      title: 'Acting',
      img: Acting,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 3,
      title: 'Writer',
      img: Writer,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 4,
      title: 'Singer',
      img: Singer,
      desc: `Stair singer...................................
      Ek Duje De Kol (Paas)
      Kaliyan Raatan Chann Te Taare
      Pehla Si Jo Waade
      Hunn Ne Sab Mainu Lagde Laare

      Ajj Hi Gam Naal Pala
      Wagde Naino Hanju Khare
      Fass Gaye Ishq De Gede Wich
      Kaaton Na Hunn Labhan Sahare`
    }
  ]);

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["end end", "start start"]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <section id='work'>
      {/* <div className='container mx-auto'> */}

            <div className='portfolio' ref={ref}>
              <div className='progress'>
                <h2 className='text-[55px] font-bold leading-[0.8] mb-2 lg:text-[40px]'>
                  My <span className='text-[#E7473C]'>Works</span>
                </h2>
                {/* <div className='progressBar'></div> */}
                {/* <motion.div style={{ scaleX }} className="progressBar"></motion.div> */}
              </div>
              
              {items.map( (item, i) => (
                // <p>item.title</p>
                <Single item={item} key={i} />
              ))}
              
            </div>
        {/* </div> */}
    </section>
  );
};

export default Work;
