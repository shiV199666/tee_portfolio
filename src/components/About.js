import React from 'react';
// countup
import Countup from 'react-countup';
import Image from '../assets/about_tee.png';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section h-full' id='about' ref={ref}>
      
      <div className='mx-[5%] rounded-2xl neo-a-tag-orange w-full'>
      <div className="top-[-3] h-[100%] w-[100%] flex justify-center items-center ml-[17%]">
        <div className='about-title'>
          <div className='w-[100%] h-[100%] text-[160px]'>
            <span className='text-[#ffffff]'>WHO</span>
          </div>
          <div className='w-[100%] h-[100%] text-[120px]'>
            <span>AM I?</span>
          </div>
        </div>
      </div>
      <div class="absolute top-[81%] flex w-full left-[-13%] justify-end items-center">
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5135 9.17047L32.5 3.13043L34.4865 9.17047C37.8081 19.2703 45.7297 27.1919 55.8295 30.5135L61.8696 32.5L55.8295 34.4865C45.7297 37.8081 37.8081 45.7297 34.4865 55.8295L32.5 61.8696L30.5135 55.8295C27.1919 45.7297 19.2703 37.8081 9.17047 34.4865L3.13043 32.5L9.17047 30.5135C19.2703 27.1919 27.1919 19.2703 30.5135 9.17047Z" fill="#FFE66D" stroke="#050F0F" stroke-width=".2rem"></path>
        </svg>
      </div>
      <div className='relative left-[-1%]'>
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5135 9.17047L32.5 3.13043L34.4865 9.17047C37.8081 19.2703 45.7297 27.1919 55.8295 30.5135L61.8696 32.5L55.8295 34.4865C45.7297 37.8081 37.8081 45.7297 34.4865 55.8295L32.5 61.8696L30.5135 55.8295C27.1919 45.7297 19.2703 37.8081 9.17047 34.4865L3.13043 32.5L9.17047 30.5135C19.2703 27.1919 27.1919 19.2703 30.5135 9.17047Z" fill="#FFE66D" stroke="#050F0F" stroke-width=".2rem"></path>
        </svg>
      </div>
        {/* <div className='text-center mb-8'>
          <h1 className='text-[80px] font-bold leading-[1]'>ABOUT ME</h1>
        </div> */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-y-0 items-center gap-y-0'>
        { /* text */ }
          <motion.div 
          variants={fadeIn('left', 0.5)} initial="hidden"
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <div className=''>
              {/* <img className='max-w-[150%] mx-auto lg:ml-auto' src={Image} alt=''/> */}
            </div>
          </motion.div>
          { /* text */ }
          <motion.div 
          variants={fadeIn('left', 0.5)} initial="hidden"
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 py-[5%]'>
            <h2 className='text-[13px] font-extrabold leading-[1]  mb-9 lg:text-[52px] text-black'>
              Hi, <br/> I'm Tiara!
            </h2>
            {/* <h3 className='h3 mb-4'>I'm a Freelancer</h3> */}
            {/* <div className='text-[]'>
              <div className='about-me text-[#F1ECE8]'>
                <div className='text-about-me'>First example text <span className='text-[#DCF88C]'>line</span></div>
                <div className='text-about-me'><span className='text-[#DCF88C]'>Second</span> example line</div>
                <div className='text-about-me'>Third text line</div>
                <div className='text-about-me'>Fourth <span className='text-[#DCF88C]'>line</span></div>
              </div>
            </div> */}
            <div className='pr-[30%] text-[18px] font-extrabold leading-[1.3] text-black'>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
           
            <div className=''>
              {/* <button className='about-button'>Lets Connect</button> */}
            </div>
          </motion.div>
          { /* stats */ }
          {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary mb-2 text-[#e07a5f]'>
                {inView ? <Countup start={0} end={13} duration={3} /> : 
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary mb-2 text-[#e07a5f]'>
                {inView ? <Countup start={0} end={15} duration={3} /> : 
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
