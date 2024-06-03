import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/assets/logo/logo.svg'
import Newsletter from '../components/Newsletter'

function Footer() {
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full  bg-black font-bold text-center cursor-pointer mt-20'>
        <div className='grid grid-cols-1 lg:grid-cols-3  py-4'>
        <ul className=''>
          <Link href="#">
          <Image
          src={logo}
          width="150"
          height="150"
          className='w-full max-w-md h-32'
          />
          </Link>
          <p className='text-2xl text-white'>Leading Online Marketing Expert</p>
        </ul>
        <ul className='leading-10 p-10 lg:p-0'>
          
            <li className='text-2xl list-none text-white font-bold font-serif '>Subscribe</li>
          <p className='w-full max-w-lg text-lg text-white '>Subscribe to our newsletter to stay in touch with the latest</p>
          {/* <input className='w-full p-2 rounded-sm' placeholder='Email*' />
          <input className='w-full p-2 rounded-sm bg-customBlue text-white font-bold mt-5'  type='submit' /> */}
          <Newsletter/>
       
        </ul>
        
        <ul className='font-serif p-10 lg:p-0'>
          <Link href="#">
            <li className='text-2xl list-none text-white font-bold'>LOME Websites</li>
          <li className='text-white text-lg list-none'>220, The Old Dairy</li>
           <li className='text-white text-lg list-none'>Stapleton House</li>
            <li className='text-white text-lg list-none'>110-122 Clifton St,</li>
             <li className='text-white text-lg list-none'>London EC2A 4HT</li>
             <li className='text-white text-lg list-none'>hello@lome.co.uk</li>
             
          </Link>
        </ul>
       
        </div>
        
        
        <ul className='py-2 flex justify-evenly  '>
       
        
        <li className='p-2'><Link href="#" className=''>Privacy Policy</Link></li>
        <li className='p-2'><Link href="#" className=''>@ Copyright {currentYear}</Link></li>
        <li className='p-2'><Link href="#" className=''>Terms and conditions</Link></li>
        </ul>
        
    </footer>
  )
}

export default Footer