import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='border border-2 border-black h-96 w-2/5  text-center  p-5' ref={form} onSubmit={sendEmail}>
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
      <input className='w-44 p-4 bg-red-500 text-white font-bold rounded-sm' type="submit" value="Send" />
      </section>
    </form>
  );
};