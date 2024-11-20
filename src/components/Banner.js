import React from 'react';
// images
import Image from '../assets/neo-photo.png';
// import Scroll from '../assets/scroll.png';
// icons
// import { FaDribbble, FaTwitter  , FaInstagram , FaYoutube } from 'react-icons/fa';
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
    <section className='sectionHome h-full' id='home' >
      <div className='flex flex-col homepage-image h-full'>
        
        <div className='container mx-auto'>
        <div className='gap-y-8 lg:flex flex-col lg:gap-x-40 pt-[7%]'>
          <div className='relative'>
          {/* <motion.div className='absolute max-w-[50%] lg:max-w-[400px] mx-auto neo-image-box neo-a-tag-beige h-[400px] lg:ml-auto lg:mr-10'>
          </motion.div> */}
            <div className='absolute inset-0 flex items-center justify-center mx-auto max-w-[50%] neo-a-tag-green lg:max-w-[50%] h-[650px] neo-image-box neo-a-tag-beige lg:ml-auto lg:mr-[-16.5rem]'>
              {/* <span className='text-4xl font-bold text-white lg:ml-auto lg:mr-10'>Overlay Text</span> */}
            </div>
            <img className='max-w-[50%] relative lg:max-w-[50%] mx-auto lg:ml-auto lg:mr-[-16.5rem]' src={Image} alt=''/>
          </div>
          
          <motion.div className='absolute text-[230px] items-baseline flex leading-[0.8]'>
            <span className='uppercase font-bold text-shadow shadow-black text-[#F1ECE8] font-primary '>Tiara TURNER</span>
          </motion.div>
          <motion.div className='absolute items-baseline mt-[26rem] pl-[30px] max-w-lg mx-auto lg:text-[20px] lg:mx-0 desc'>
            <p className='font-bold text-shadow text-black font-primary'>Sample description</p>
          </motion.div>
          <motion.div className='absolute items-baseline mt-[30rem] pl-[30px] max-w-lg mx-auto lg:text-[20px] lg:mx-0 desc2'>
            <p className='font-bold text-shadow text-black font-primary'>Sample description testing 2</p>
          </motion.div>
          <motion.div className='absolute items-baseline mt-[35rem] pl-[30px] max-w-lg mx-auto lg:text-[20px] lg:mx-0 desc3'>
          <p className='font-bold text-shadow text-black font-primary'>Sample</p>
          </motion.div>
          {/* <motion.div className='absolute text-[150px] items-baseline flex leading-[2.5] pl-[8%]'>
            <span className='uppercase font-bold text-shadow shadow-black text-[#eeeeee] specialtext'>Turner</span>
          </motion.div> */}
          {/* <motion.div className='absolute text-[20px] items-baseline flex'>
            <span  className='uppercase font-bold text-shadow shadow-black text-[#a7f047]'> Writer / Musician / Actor / Model</span>
          </motion.div> */}
        </div>
        
      </div>
      {/* <motion.div className='slidingTextContainer absolute z-[-1]' variants={sliderVariants} initial="initial" animate="animate">
              Writer Musician Actor
        </motion.div> */}
      {/* <div>
        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden"
             whileInView={'show'} viewport={{once:false, amount: 0.7}} className='pl-20 text-[55px] font-bold leading-[1] lg:text-[200px] items-start'>
            <span className='text-[#5E24CA]'>TIARA</span>
            </motion.h1>
        </div> */}
        
      </div>
      {/* <footer className=' neo-a-tag-green text-white'>
        <div className='flex flex-col content-between mx-auto text-center'>
        Writer Musician Actor
        </div>
      </footer> */}
      
    </section>
  );
};

export default Banner;
