import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';


export default function ContactUs () {
  const form = useRef();
  const [text, setText] = useState('')
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setText('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);

    // process.env.YOUR_TEMPLATE_ID
    emailjs.sendForm('service_39bg1xq', 'template_pju0m5e', form.current, '_zvfCNAUf1DOGw6zi')
      .then((result) => {
          console.log(result.text);
          setText('Thank you, your email has been received!')
          setIsSubmitting(false);
          setRecaptchaValue(null);
      }, (error) => {

          console.log(error.text);
          setIsSubmitting(false);
      });
  };  

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };


  return (
   
<div className='container max-w-xl p-2 lg:p-20'>
    
    <h3 className='text-3xl lg:text-5xl text-black font-bold text-center'>Get in touch</h3>
    <form className='p-2 lg:p-5 
     text-center mt-10 ' ref={form} onSubmit={sendEmail}>
      <p className='text-xl text-red-500 font-bold p-2'>{text}</p>
      
      <label className='font-bold'>Name </label>
      <input className='w-full border-b-2   mb-5' required type="text" name="user_name" />
      <br/>
      
      <label className='font-bold'>Email </label>
      <input className='w-full border-b-2 mb-5 ' required type="email" name="user_email" />
      <br/>
      <label className='font-bold'>Message </label>
      <textarea required className='w-full h-52  border-b-2 mb-5' 
      name="message" />
      <br/>
      <div className='mt-5'>
          <ReCAPTCHA
            sitekey="6Lei__cpAAAAAMULu7A30dptnQTV7pJEHhvrpg3t" // Replace with your reCAPTCHA site key
            onChange={handleRecaptchaChange}
          />
        </div>
      <div className='mt-auto'>
      <input className='w-full p-4 bg-customBlue text-white font-bold  cursor-pointer' 
      type="submit" value="Send" />
      </div>
    </form>
    </div>
  );
};