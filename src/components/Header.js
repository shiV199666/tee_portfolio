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
  <header className={`${isHeaderChange ? "h-[85px]" : "h-[85px]"} ${'neo-header fixed w-full pl-[30px] lg:pl-[100px] z-30 flex items-center border-b-4 border-black'}`}>
    <div className='flex justify-between items-center w-[100%] h-[100%]'>
      <div className='flex flex-col lg:flex-row items-center w-full justify-between'>
        {/* nav - initially hidden - show on desktop mode */}
        
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to='home'
                activeClass=''
                smooth={true}
                spy={true}
                offset={-30} className={`${isHeaderChange ? "text-[#ffffff]" : "text-[#ffffff]"} ${'brutal-btn cursor-pointer text-[16px] font-extrabold transition'}`}>
            Work
          </Link>
          <Link to='Everything'
                activeClass='neo-a-tag neo-a-tag-beige'
                smooth={true}
                spy={true} className={`${isHeaderChange ? "text-[#ffffff]" : " text-[#ffffff]"} ${'brutal-btn cursor-pointer text-[16px] font-extrabold  transition'}`}>
            Services
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
        <div className='lets-connect-header'>
          Lets Chat
        </div>
      </div>
    </div>
    
     {/* <MobileNav isHeaderChange={isHeaderChange}/> */}
  </header>
  );
};

export default DefaultHeader;
