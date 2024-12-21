import React from 'react';
// images
import Image from '../assets/neo-photo.png';
import piano from '../assets/piano-home.png';
// import Scroll from '../assets/scroll.png';
// icons

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
    <section className='sectionHome homepage-image h-full' id='home' >
      <div className='flex flex-col h-full mx-[8%] '>
        
        <div className='relative mx-[3%]'>
        <div className='gap-y-20 lg:flex flex-col lg:gap-x-40 pt-[10rem]'>
          
        
          <div className='flex flex-row justify-centre'>
            <motion.div className='text-[12vw] items-baseline flex leading-[0.8] z-[1] flex-1'>
              
              <div className='flex flex-col  ml-[-7%] leading-[0.85]'>
                <div className='flex flex-1'>
                  <span className=' text-[10vw] name-text '>TIARA</span>
                </div>
                <div className='flex flex-1'>
                  <span className=' text-[8vw] name-text title-text'>TURNER</span>
                </div>
              </div>
              
              
            </motion.div>
            
              <div className='z-0 flex-1'>
              
                {/* <div className='flex items-center justify-end mx-auto max-w-[90%] neo-a-tag-green h-[80%] neo-image-box neo-a-tag-beige lg:ml-auto'>
                  <img className='max-w-[100%] mx-auto lg:ml-auto' src={Image} alt=''/>
                </div> */}
                {/* <motion.div className='absolute items-baseline pl-[30px] max-w-lg mx-auto lg:text-[20px] lg:mx-0 desc'>
                  <p className='font-bold text-shadow text-black font-primary'>Sample description</p>
                </motion.div>
                <motion.div className='absolute items-baseline pl-[30px] max-w-lg mx-auto lg:text-[20px] lg:mx-0 desc2'>
                  <p className='font-bold text-shadow text-black font-primary'>Sample description testing 2</p>
                </motion.div>
                <motion.div className='absolute items-baseline pl-[30px] max-w-lg mx-auto lg:text-[20px] lg:mx-0 desc3'>
                <p className='font-bold text-shadow text-black font-primary'>Sample</p>
                </motion.div> */}
            </div>
          </div>
          <div className='flex flex-col'>
                <div className='items-baseline flex flex-col  gap-y-4'>
                  <div className='max-w-lg'>
                    <p className='text-[20px] font-normal text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  </div>
                  <div className='flex justify-center items-center text-[25px] font-normal gap-x-4'>
                    <button className='max-w-lg btn btn-lg'>
                      See Work
                    </button>
                    <a>
                      Contact Me
                    </a>
                    <img src="https://cdn.prod.website-files.com/638daee1c52f5465fc5159eb/638e0e841af23899cf38c3c6_Vector%2032.svg"/>
                  </div>
                  
                </div>
              </div>
          {/* <div className='absolute z-20 flex justify-center items-end top-[3rem] left-[63rem]'>
            
                <h1 class="animate-pop-in justify-center flex items-center">
                <div className='absolute z-30 h-[100%] justify-center items-center top-[32%] text-black text-[25px] font-Coconat font-extrabold'>
                  Hi! How are you?
                </div>
                  <svg width="450" height="150" viewBox="0 0 574 335" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" transform="scale(-1, 1)">
                    <path d="m410.748 286.523 35.166 45.332 35.167-45.332h89.79V45.814H62.494v240.709h348.254Z" fill="#000" stroke="#000" stroke-width="4.326" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="m395.521 266.663 35.167 45.332 35.167-45.332h89.789l.001-240.708H44.107v240.708h351.414Z" fill="#FFEA80" stroke="#000" stroke-width="4.326" stroke-linecap="round" stroke-linejoin="round"></path>
                    
                  </svg>
                </h1>
              </div> */}
          
         
          
          {/* <motion.div className='absolute text-[150px] items-baseline flex leading-[2.5] pl-[8%]'>
            <span className='uppercase font-bold text-shadow shadow-black text-[#eeeeee] specialtext'>Turner</span>
          </motion.div> */}
          {/* <motion.div className='absolute text-[20px] items-baseline flex'>
            <span  className='uppercase font-bold text-shadow shadow-black text-[#a7f047]'> Writer / Musician / Actor / Model</span>
          </motion.div> */}
        </div>
        
      </div>
      {/* <motion.div className='slidingTextContainer absolute z-[-1]' variants={sliderVariants} initial="initial" animate="animate">
              Writer Pianist Actor Singer
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
      {/* <div className='absolute top-0 piano-home'>
        <img src={piano} ></img>
      </div> */}
      
    </section>
  );
};

export default Banner;
