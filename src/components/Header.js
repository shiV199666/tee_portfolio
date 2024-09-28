import React, { useEffect, useRef } from 'react';
// import components
import Logo from '../assets/logo.svg';
// import MobileNav from './MobileNav';

// import Link
import { Link } from 'react-scroll';

const DefaultHeader = ({isHeaderChange}) => {
  const preloadedImage = useRef();

useEffect(() => {
    preloadedImage.current = new Image();
    preloadedImage.current.src = Logo;
}, []);
  return (
  <header className={`${isHeaderChange ? "h-[100px]" : "h-[100px]"} ${'fixed w-full px-[30px] lg:px-[100px] z-30 flex items-center'}`}>
    <div className='flex flex-col lg:flex-row items-center w-full justify-between'>
      {/* nav - initially hidden - show on desktop mode */}
      <Link to='home'
              activeClass=''
              smooth={true}
              spy={true} className={`${'max-w-[170px] cursor-pointer'}`}>
        <img src={Logo} alt='Tiara Turner logo'/>
      </Link> 
      <nav className='hidden lg:flex gap-x-12 font-semibold'>
        <Link to='home'
              // activeClass='active'
              smooth={true}
              spy={true}
              offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : "text-[#5E24CA]"} ${'cursor-pointer text-[16px]  transition'}`}>
          Teeeee
        </Link>
        <Link to='Everything'
              // activeClass='active'
              smooth={true}
              spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-primary"} ${'cursor-pointer text-[16px]  transition'}`}>
          Everything's
        </Link>
        <Link to='Gonna'
              // activeClass='active'
              smooth={true}
              spy={true}
              offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : " text-primary"} ${'cursor-pointer text-[16px]  transition'}`}>
          Gonna
        </Link>
        <Link to='Be'
              // activeClass='active'
              smooth={true}
              spy={true}
              offset={-30}  className={`${isHeaderChange ? "text-[#ffffff]" : " text-primary"} ${'cursor-pointer text-[16px]  transition'}`}>
          Be
        </Link>
        <Link to='Amazingggggg'
              // activeClass='active'
              smooth={true}
              spy={true}
              offset={5000}  className={`${isHeaderChange ? "text-[#ffffff]" : " text-primary"} ${'cursor-pointer text-[16px]  transition'}`}>
          Amazingggggg
        </Link>
      </nav>
      <Link to='home'
              activeClass=''
              smooth={true}
              spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#62FFCD]"} ${'cursor-pointer text-[25px]  transition'}`}>
        <a href='' target=''>Let's Work Together</a>
      </Link> 
      {/* logo */}
      
      {/* <a href='#' className={`${isHeaderChange ? "" : "video-bg"} ${'max-w-[50px]'}`}>
        <img src={blackLogo} alt='gautammonangifilms logo' loading='lazy'/>
      </a> */}
    </div>
     {/* <MobileNav isHeaderChange={isHeaderChange}/> */}
  </header>
  );
};

export default DefaultHeader;
