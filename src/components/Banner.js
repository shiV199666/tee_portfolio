import React from 'react';
// images
import Image from '../assets/about.png';
import Scroll from '../assets/scroll.png';
// icons
import { FaDribbble, FaTwitter  , FaInstagram , FaYoutube } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

var sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20
    },
  }
}

const textVariants = {
  hidden: { opacity: 0, y: '-100%' },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  }
};
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[]' id='home' >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden"
             whileInView={'show'} viewport={{once:false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            <span className='text-[#E7473C]'>T</span>IARA  <span className='text-[#E7473C]'>T</span><span>URNER</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden"
             whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-[#F0F0F0] mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Musician',
                  2000,
                  'Actor',
                  2000,
                  'Writer',
                  2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='sapn'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden"
             whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:text-[25px] lg:mx-0'>
              I love frieeeeeessss
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} initial="hidden"
            whileInView={'show'} viewport={{once:false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My portfolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden"
            whileInView={'show'} viewport={{once:false, amount: 0.7}} className='flex mb-8 text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube/>
              </a>
              <a href='#'>
                <FaInstagram/>
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
            </motion.div>
            <motion.div className='flex gap-x-6 max-w-max mx-auto lg:mx-0'
            variants={fadeIn('up', 0.7)} initial="hidden"
            whileInView={'show'} viewport={{once:false, amount: 0.7}}>
              <motion.img 
              variants={textVariants}
              animate="scrollButton"
              src={Scroll}
              alt=""
              />
            </motion.div>
            
          </div>
          {/* Image */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden"
            whileInView={'show'} viewport={{once:false, amount: 0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto mix-blend-lighten'>
            <img src={Image} alt=''/>
          </motion.div>
        </div>
        <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
              Writer Musician Actor
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
