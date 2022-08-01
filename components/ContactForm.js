import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // process.env.YOUR_TEMPLATE_ID
    emailjs.sendForm('service_h1h55e6', 'template_3g4ntfs', form.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };  

  return (
    <form className='border border-2 border-black h-xxl2 lg:h-96 
    w-full lg:w-2/5  text-center mt-5  p-5' ref={form} onSubmit={sendEmail}>
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