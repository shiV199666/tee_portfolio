import React, { useRef, useState } from 'react';
// motion
import { motion, useInView } from 'framer-motion';
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
    <section className='py-16 lg:section' id='contact' ref={ref}>
      <motion.div className='container mx-auto' variants={variants} initial='initial' whileInView="animate">
        <motion.div className='flex flex-col lg:flex-row' variants={variants}>
          { /* text */ }
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden"
          whileInView={'show'} viewport={{once: false, amount: 0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br/> together!
              </h2>
              <div className='item'>
                <h2>Email</h2>
                <span>tee@gmail.com</span>
              </div>
              <div className='item'>
                <h2>Address</h2>
                <span>Koramangala</span>
              </div>
              <div className='item'>
                <h2>Phone</h2>
                <span>8965235555</span>
              </div>
            </div>
          </motion.div>
          
        <motion.form ref={formRef} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6'
            variants={fadeIn('left', 0.3)} initial="hidden"
            whileInView={'show'} viewport={{once: false, amount: 0.3}}
            onSubmit={sendEmail}
            >
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
              <textarea className='bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all
                resize-none mb-12'
                name='message'
                placeholder='Your message'
                // onChange={handleMessageChange}
                >
              </textarea>
              <button className='btn btn-lg'>Send message</button>
              {error && "Error"}
              {success && "Success"}
          </motion.form>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Contact;
