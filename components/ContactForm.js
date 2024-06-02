import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs () {
  const form = useRef();
  const [text, setText] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();


    // process.env.YOUR_TEMPLATE_ID
    emailjs.sendForm('service_39bg1xq', 'template_pju0m5e', form.current, '_zvfCNAUf1DOGw6zi')
      .then((result) => {
          console.log(result.text);
          setText('Thank you, your email has been received!')
      }, (error) => {
          console.log(error.text);
      });
  };  

  return (
   
<div className='container max-w-xl p-2 lg:p-20'>
    
    <h3 className='text-3xl lg:text-5xl text-black font-bold text-center'>Get in touch</h3>
    <form className='p-2 lg:p-5 
     text-center mt-10 ' ref={form} onSubmit={sendEmail}>
      <p className='text-xl text-red-500 font-bold p-2'>{text}</p>
      
      <label className='font-bold'>Name </label>
      <input className='w-full border-b-2   mb-5' type="text" name="user_name" />
      <br/>
      
      <label className='font-bold'>Email </label>
      <input className='w-full border-b-2 mb-5 ' type="email" name="user_email" />
      <br/>
      <label className='font-bold'>Message </label>
      <textarea className='w-full h-52  border-b-2 mb-5' 
      name="message" />
      <br/>
      <div className='mt-auto'>
      <input className='w-full p-4 bg-customBlue text-white font-bold  cursor-pointer' 
      type="submit" value="Send" />
      </div>
    </form>
    </div>
  );
};