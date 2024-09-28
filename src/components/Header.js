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
  <header className={`${isHeaderChange ? "h-[100px]" : "h-[100px]"} ${'fixed w-full px-[30px] lg:px-[100px] z-30 flex items-center neo-a-tag-beige border-b-4 border-black'}`}>
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
              activeClass=''
              smooth={true}
              spy={true}
              offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : "text-[#ffffff]"} ${'neo-a-tag neo-a-tag-beige cursor-pointer text-[16px] font-extrabold transition'}`}>
          Work
        </Link>
        <Link to='Everything'
              activeClass='neo-a-tag neo-a-tag-beige'
              smooth={true}
              spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'neo-a-tag neo-a-tag-beige cursor-pointer text-[16px] font-extrabold  transition'}`}>
          Services
        </Link>
        <Link to='Gonna'
              activeClass='neo-a-tag neo-a-tag-beige'
              smooth={true}
              spy={true}
              offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'neo-a-tag neo-a-tag-beige cursor-pointer text-[16px] font-extrabold transition'}`}>
          Contact
        </Link> 
      </nav>
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
