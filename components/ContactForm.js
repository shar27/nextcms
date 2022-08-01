import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {
  const form = useRef();
  const [text, setText] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();


    // process.env.YOUR_TEMPLATE_ID
    emailjs.sendForm('service_h1h55e6', 'template_20q0qxs', form.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setText('Thank you, your email has been received')
      }, (error) => {
          console.log(error.text);
      });
  };  

  return (
   

    <form className='border border-2 border-black h-xxl3 lg:h-96 
    
    w-full lg:w-2/5  text-center mt-10  p-5' ref={form} onSubmit={sendEmail}>
      <p className='text-xl text-red-500 font-bold p-2'>{text}</p>
      <section>
      <label className='font-bold p-5'>Name</label>
      <input className='w-80 border-2 border-black  rounded-sm mb-5' type="text" name="user_name" />
      </section>
      <section>
      <label className='font-bold p-5'>Email</label>
      <input className='w-80 border-2 border-black  rounded-sm' type="email" name="user_email" />
      </section>
      <section>
      <label className='font-bold p-2'>Message</label>
      <textarea className='w-80 border-2 border-black mt-5 h-32' name="message" />
      </section>
      <section className='pt-5'>
      <input className='w-44 p-4 bg-red-500 text-white font-bold rounded-sm cursor-pointer' type="submit" value="Send" />
      </section>
    </form>
   
  );
};