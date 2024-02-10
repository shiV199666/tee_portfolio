import React from 'react';
// countup
import Countup from 'react-countup';
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
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          { /* img */ }
          <motion.div 
          variants={fadeIn('right', 0.3)} initial="hidden"
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          { /* text */ }
          <motion.div 
          variants={fadeIn('left', 0.5)} initial="hidden"
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='text-[55px] font-bold leading-[0.8] mb-4 lg:text-[40px]'>
            About <span className='text-[#E7473C]'>Me</span>
            </h2>
            <h3 className='h3 mb-4'>I'm a Freelancer</h3>
            <p className='mb-6'>
            I'm a passionate artist who started singing before talking and despite teaching for almost a decade now, I identify more as a student than a teacher because when it comes to music, there's always more to learn. I'm keen on studying what each individual student is most receptive too in their own unique process and enabling them in the most efficient and life-long way possible.
            </p>
            { /* stats */ }
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary mb-2 text-[#E7473C]'>
                {inView ? <Countup start={0} end={13} duration={3} /> : 
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary mb-2 text-[#E7473C]'>
                {inView ? <Countup start={0} end={15} duration={3} /> : 
                  null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-sm'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
