import React from 'react'
import Image from 'next/image'


function Nav() {
  return (
    <nav className='flex justify-around z-50 absolute text-black bg-white w-full p-2'>
        <ul className='flex  lg:justify-around gap-5 lg:gap-10 text-xs 
         md:text-lg lg:text-2xl  font-bold cursor-pointer '>
            <li className='list-none mt-5 lg:mt-10'><a>Home</a></li>
            <li className='list-none mt-5 lg:mt-10'><a href='#about'>About</a></li>
            <li className='list-none '><Image className=''
            src="/assets/Logo.png" width={150} height={100} /> </li>
            <li className='list-none mt-5 lg:mt-10'><a href='#services'>Services</a></li>
            <li className='list-none mt-5 lg:mt-10'><a href='#Bikes'>Bikes</a></li>
            <li className='list-none mt-5 lg:mt-10'><a href='#contact'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Nav