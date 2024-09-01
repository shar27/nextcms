import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../components/assets/logo/lomelogo.jpg";
import Newsletter from "../components/Newsletter";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-black  font-bold text-center cursor-pointer mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-4">
        
      
         
          <p className="text-2xl lg:mt-10  p-10 lg:p-0 ">Web Design High Wycombe</p>
     
        <ul className="leading-10 p-10 lg:p-0">
          <li className="text-2xl list-none  font-bold font-serif ">
            Subscribe
          </li>
          <p className="w-full max-w-lg text-lg  ">
            Subscribe to our newsletter to stay in touch with the latest
          </p>
          {/* <input className='w-full p-2 rounded-sm' placeholder='Email*' />
          <input className='w-full p-2 rounded-sm bg-customBlue  font-bold mt-5'  type='submit' /> */}
          <Newsletter />
        </ul>

        <ul className="font-serif p-10 lg:p-0 lg:mt-10">
          <Link href="#">
            <li className="text-xl list-none text-black  font-bold">
              Web Design High Wycombe
              
            </li>
           
            
            <li className=" text-lg list-none text-black">📞 0333 360 6113</li>
            <li className=" text-lg list-none text-black">
              📧 hello@webdesignhighwycombe.co.uk
            </li>
          </Link>
        </ul>
      </div>

      <ul className="py-2 flex justify-evenly  ">
        <li className="p-2 list-none">
          <Link href="#" className="text-black ">
            Privacy Policy
          </Link>
        </li>
        <li className="p-2 list-none">
          <Link href="#" className="text-black ">
            @ Copyright {currentYear}
          </Link>
        </li>
        <li className="p-2 list-none">
          <Link href="/Terms" className="text-black ">
            Terms and conditions
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
