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
  <header className={`${isHeaderChange ? "h-[70px]" : "h-[70px]"} ${'neo-header fixed w-full pl-[30px] lg:pl-[100px] z-30 flex items-center border-b-4 border-white'}`}>
    <div className='flex justify-between items-center w-[100%] h-[100%]'>
      <div className='flex flex-col lg:flex-row items-center w-full justify-between'>
        {/* nav - initially hidden - show on desktop mode */}
        
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to='home'
                // activeClass='neo-a-tag neo-a-tag-beige'
                smooth={true}
                spy={true}
                offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : "text-[#ffffff]"} ${'cursor-pointer text-[20px] font-bold transition'}`}>
            Home
          </Link>
          <Link to='about'
                // activeClass='neo-a-tag neo-a-tag-beige'
                smooth={true}
                spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'cursor-pointer text-[20px] font-bold  transition'}`}>
            About
          </Link>
          <Link to='services'
                // activeClass='neo-a-tag neo-a-tag-beige'
                smooth={true}
                spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'cursor-pointer text-[20px] font-bold  transition'}`}>
            Services
          </Link>
          <Link to='work'
                // activeClass='neo-a-tag neo-a-tag-beige'
                smooth={true}
                spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'cursor-pointer text-[20px] font-bold  transition'}`}>
            Work
          </Link>
          {/* <Link to='Gonna'
                activeClass='neo-a-tag neo-a-tag-beige'
                smooth={true}
                spy={true}
                offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'brutal-btn cursor-pointer text-[16px] font-extrabold transition'}`}>
            Contact
          </Link>  */}
        </nav>
        {/* logo */}
        <Link to='home'
                activeClass=''
                smooth={true}
                spy={true} className={`${'max-w-[170px] cursor-pointer'}`}>
          <img src={Logo} alt='Tiara Turner logo'/>
        </Link> 
        {/* <a href='#' className={`${isHeaderChange ? "" : "video-bg"} ${'max-w-[50px]'}`}>
          <img src={blackLogo} alt='gautammonangifilms logo' loading='lazy'/>
        </a> */}
      </div>
      <div className='lets-connect-header'>
        <div className='text-white text-[23px]'>
          Lets Chat
        </div>
      </div>
    </div>
    
     {/* <MobileNav isHeaderChange={isHeaderChange}/> */}
  </header>
  );
};

export default DefaultHeader;
