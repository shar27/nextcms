import React from 'react'
import {Nav, ContactForm, Footer, lome} from '../components/Imports.js'
import Head from 'next/head'
import Gif from '../components/assets/gif/res-designs.gif'
import Image from 'next/image'
import { useState } from 'react'

function Services() {
 
  const [isShow, setIsNotShowing] = useState(false)
  
  const toggleSection = () => [
    setIsNotShowing(!isShow)
  ]
  
  
  return (
    <div>
      <Head>
        <title>Marketing Agency </title>
        <meta name="description" content="London Marketing Agency & Websites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <div className="bg-black grid grid-cols-1 lg:grid-cols-2 w-full h-screen p-0 lg:p-20">
        
      <div className="flex flex-col p-4">
          <h3 className="text-3xl lg:text-9xl font-bold  text-white rounded mb-5">
           <span className='font-outline-2 text-black'> OUR </span><br/> SERVICES.
          </h3>
        <p className='text-xl lg:text-2xl text-white leading-10'>
        We execute effective strategies that drive traffic, engagement and lead conversion across the web: 
        from websites, organic search, paid media and social advertising to email marketing and display campaigns.
        </p>
        </div>
        <div>
        <Image
          className="w-full h-64 lg:h-96"
          src={Gif}
          width={300}
          height={500}
        />
  </div>
       
      </div>

<div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-0 lg:gap-72 bg-white text-black">
      <div className="">
        <h3 className="text-2xl lg:text-3xl font-bold">Technology</h3>

        <p className="text-xl lg:text-2xl leading-10">
          We are a dynamic and inclusive collective of digital aficionados. Our
          tightly-knit team is swiftly expanding, honing expertise in
          cutting-edge development and digital marketing trends. With a wealth
          of experience, we craft impactful digital solutions that deliver
          tangible results. 
          
        </p>
      </div>
      <div className='font-bold p-0 lg:p-10 leading-10'>
       
          <button onClick={toggleSection} className='border-b-2 w-full text-left'>Websites 
          {isShow ? '-' : '  +  '}
          </button>
          {isShow && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>Here is some more information that you can show or hide.</p>
          <p>You can add more content here as needed.</p>
        </div>
      )}
          <br/>
          <button onClick={toggleSection} className='border-b-2 w-full text-left'>Marketing 
          {isShow ? '-' : '  +  '}
          </button>
          {isShow && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>Here is some more information that you can show or hide.</p>
          <p>You can add more content here as needed.</p>
        </div>
      )}
          <br/>
          <button onClick={toggleSection} className='border-b-2 w-full text-left'>Analytics 
          {isShow ? '-' : '  +  '}
          </button>
          {isShow && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>Here is some more information that you can show or hide.</p>
          <p>You can add more content here as needed.</p>
        </div>
      )}
          <br/>
          <button onClick={toggleSection} className='border-b-2 w-full text-left'>Hosting 
          {isShow ? '-' : '  +  '}
          </button>
          {isShow && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>Here is some more information that you can show or hide.</p>
          <p>You can add more content here as needed.</p>
        </div>
      )}
       
      </div>
      </div>


      <section className="flex justify-center">
      <ContactForm/>
     
      </section>
      <Footer/>
    </div>
  )
}

export default Services