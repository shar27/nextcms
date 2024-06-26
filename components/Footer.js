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
          <p className='text-2xl text-white'>Web Design High Wycombe</p>
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
            <li className='text-xl list-none text-white font-bold'>Web Design High Wycombe <span className='text-xl'>is a trading name</span> </li>
          <li className='text-white text-lg list-none'>Our registered company is SWIFT UK PROPERTY INVESTMENTS LTD</li>
          <li className='text-white text-lg list-none'>Company Number: 15244665</li>
             <li className='text-white text-lg list-none'>📞 0333 360 6113</li>
             <li className='text-white text-lg list-none'>📧 hello@webdesignhighwycombe.co.uk</li>
             
          </Link>
        </ul>
       
        </div>
        
        
        <ul className='py-2 flex justify-evenly  '>
       
        
        <li className='p-2'><Link href="#" className=''>Privacy Policy</Link></li>
        <li className='p-2'><Link href="#" className=''>@ Copyright {currentYear}</Link></li>
      <li className='p-2'><Link href="/Terms" className=''>Terms and conditions</Link></li>
        </ul>
        
    </footer>
  )
}

export default Footer