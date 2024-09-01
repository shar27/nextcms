import { useState } from "react";

import Image from 'next/image'
// import logo from '../components/assets/logo/lomelogo.svg'
import logo from '../components/assets/logo/lomelogo.jpg'



function Nav() {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  
  return (
    <div className="flex items-center justify-between border-b border-white  bg-white  z-100">
      <a href="/">
        <Image  src={logo} alt="logo" width={100} height={100} className="w-full max-w-md " />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 bg-black text-black"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN list-none flex flex-col items-center 
            justify-between min-h-[250px] bg-white w-full ">
              <li className="list-none border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-black" href="/About">About</a>
              </li>
             
              <li className="list-none text-black border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-black" href="/Services">Services</a>
              </li>
              <li className="list-none text-black border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-black" href="/#casestudies">Case Studies</a>
              </li>
              <li className="list-none text-black border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-black" href="/Blog">Blog</a>
              </li>
              <li className="list-none text-black border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-black" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden lg:flex justify-between text-xl ">
          <li className="list-none p-2">
            <a className="text-black" href="/About">About</a>
          </li>
          <li className="list-none p-2">
            <a className="text-black" href="/Services">Services</a>
          </li>
          <li className="list-none p-2">
            <a className="text-black" href="/#casestudies">Work</a>
          </li>
          <li className="list-none p-2">
                <a className="text-black" href="/Blog">Blog</a>
              </li>
          <li className="list-none p-2">
            <a className="text-black" href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        color:black;
        z-index: 11;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    
    </div>
  )
}

export default Nav