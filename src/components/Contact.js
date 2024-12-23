import React, { useRef, useState } from 'react';
// motion
import { motion, useInView } from 'framer-motion';
import Star from '../assets/shapes/lightning.png';
import { FaDribbble, FaTwitter  , FaInstagram , FaYoutube } from 'react-icons/fa';
// variants
import { fadeIn } from '../variants';
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {

  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_suha4u2",
        "template_1yjqula",
        formRef.current,
        "G-F8nuFyvtHReOkUK"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <section className='py-16 lg:section flex flex-col items-center justify-end' id='contact' ref={ref}>
      <div className='container mx-auto' variants={variants} initial='initial' whileInView="animate">
      <div className='absolute right-[10rem] w-[3%] rotate-12 '>
        <img src={Star} />
      </div>
        <div className='flex flex-col lg:flex-col justify-centre items-center gap-3' variants={variants}>
          { /* text */ }
          <div variants={fadeIn('right', 0.3)} initial="hidden"
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 flex justify-center items-center'>
            <div className=''>
              {/* <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4> */}
              <h2 className='text-[45px] lg:text-[100px] font-extrabold flex flex-col leading-none justify-center mb-12'>
                <span className='tiara-about'>Let's work</span>
               
                <span className='justify-center flex text-[#A290E6]'> together!</span>
              </h2>
              <div className='item text-[#F1ECE8] flex flex-col items-center '>
                <h2>Drop me an email:</h2>
                <span className='text-[30px] font-normal'>tee@gmail.com</span>
              </div>
              {/* <div className='item'>
                <h2>Address</h2>
                <span>Koramangala</span>
              </div>
              <div className='item'>
                <h2>Phone</h2>
                <span>8965235555</span>
              </div> */}
            </div>
          </div>
          
        <form ref={formRef} className='flex-1 rounded-2xl flex flex-col gap-y-6 p-6'
            variants={fadeIn('left', 0.3)} initial="hidden"
            whileInView={'show'} viewport={{once: false, amount: 0.3}}
            onSubmit={sendEmail}
            >
              <div className='flex gap-x-3'>
                <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                  type='text'
                  name='name'
                  placeholder='Your name'
                  // onChange={handleNameChange}
                  >
                </input>
                <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                  type='text'
                  name='email'
                  placeholder='Your email'
                  // onChange={handleEmailChange}
                  >
                  </input>
              </div>
              
              <textarea className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
                resize-none'
                name='message'
                placeholder='Your message'
                // onChange={handleMessageChange}
                >
              </textarea>
              
              {error && "Error"}
              {success && "Success"}
          </form>
          <div>
            <button className='btn btn-lg'>Send message</button>
          </div>
          <div className='flex text-white gap-4 text-[2rem]'>
            <div>
              <FaInstagram/>
            </div>
            <div>
              <FaTwitter/>
            </div>
          </div>
          
          
        </div>
        
      </div>
      {/* <div className='flex gap-x-6 justify-center items-center'>
            <div>
              <button className='btn btn-lg '>Instagram</button>
            </div>
            <div>
              <button className='btn btn-lg'>LinkedIn</button>
            </div>
      </div> */}
      <div className='flex text-[16vw] font-bold text-white justify-center items-center opacity-5 z-[-1]'>
          THANK YOU
      </div>
      
    </section>
  );
};

export default Contact;
