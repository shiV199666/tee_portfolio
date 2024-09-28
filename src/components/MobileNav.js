import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Socials from './Socials';

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    }
  }
}
 
const MobileNav = ({isHeaderChange}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (<nav className={`${'text-[#ffffff] xl:hidden'}`}>
    {/* nav open button */}
    <div  onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>
    {/* menu */}
    <motion.div
    variants={menuVariants}
    initial='hidden'
    animate={openMenu ? 'show' : ''}
    className='bg-white shadow-2xl w-full absolute top-0 right-0 h-screen z-20'>
      {/* icon */}
      <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose />
      </div>
      {/* menu list */}
      <div className='h-full w-full flex flex-col justify-center items-center gap-y-8'>
        <ul className='gap-y-8 text-primary font-primary font-semibold italic text-4xl justify-center items-center flex flex-col mb-auto flex-grow'>
          <li>
            <Link  to='home'
              activeClass='active'
              smooth={true}
              spy={true}
              onClick={() => setOpenMenu(false)}
              offset={-30}>Home</Link>
          </li>
          <li>
            <Link to='shorts'
              activeClass='active'
              smooth={true}
              spy={true}
              onClick={() => setOpenMenu(false)}
              offset={-30} >Shorts</Link>
          </li>
          <li>
            <Link to='work'
              activeClass='active'
              smooth={true}
              spy={true}
              onClick={() => setOpenMenu(false)}
              offset={-30} >Work</Link>
          </li>
          <li>
            <Link to='about'
              activeClass='active'
              smooth={true}
              spy={true}
              onClick={() => setOpenMenu(false)}
              offset={-30} >About</Link>
          </li>
          <li>
            <Link to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              onClick={() => setOpenMenu(false)}
              offset={5000} >Contact</Link>
          </li>
        </ul>
        <div className='flex text-black mb-[-1rem] text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <Socials></Socials>
        </div>
        <div className='flex text-black mb-[-1rem] text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <span>gautammonangi@gmail.com</span>
        </div>
        <div className='flex text-black mb-[2rem] text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <span>+7204023529</span>
        </div>
      </div>
      
    </motion.div>
  </nav>);
};

export default MobileNav;
