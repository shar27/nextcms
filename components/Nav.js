import { useState } from "react";

import Image from 'next/image'
import logo from '../components/assets/logo/logo.svg'

function Nav() {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  
  return (
    <div className="flex items-center justify-between border-b border-white  bg-black z-100">
      <a href="/">
        <Image  src={logo} alt="logo" width={150} height={150} className="w-full max-w-md " />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
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
                className="h-8 w-8 text-gray-600"
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
            justify-between min-h-[250px] ">
              <li className="list-none border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-white" href="/About">About</a>
              </li>
             
              <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-white" href="/Services">Services</a>
              </li>
              <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-white" href="#casestudies">Case Studies</a>
              </li>
              <li className="list-none text-white border-b border-gray-400 my-8 uppercase">
                <a className="list-none text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden lg:flex justify-between text-xl ">
          <li className="list-none p-2">
            <a href="/about">About</a>
          </li>
          <li className="list-none p-2">
            <a href="/Services">Services</a>
          </li>
          <li className="list-none p-2">
            <a href="#casestudies">Work</a>
          </li>
        
          <li className="list-none p-2">
            <a href="#contact">Contact</a>
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