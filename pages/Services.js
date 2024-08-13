import React from 'react'
import {Nav, ContactForm, Footer, lome, TopHeader} from '../components/Imports.js'
import Head from 'next/head'
import Gif from '../components/assets/gif/res-designs.gif'
import Image from 'next/image'
import { useState } from 'react'

function Services() {
 
  const [divs, setDivs] = useState([
    {
      id: 1,
      title: "Websites",
      content: "We start by understanding your business goals and target audience to create a strategic plan. Our creative team designs a user-friendly and aesthetically pleasing website tailored to your brand. We build your website with the latest technologies, ensuring it is fast, secure, and responsive. Finally, we launch your website and provide ongoing support to keep it running smoothly.",
      isShowing: false,
    },
    {
      id: 2,
      title: "Marketing",
      content: "We start by understanding your business goals and target audience to develop a customized marketing strategy. Our creative team then crafts compelling campaigns and engaging content to capture your audience’s attention. We implement these strategies across multiple channels, ensuring optimal reach and engagement. Finally, we analyze the results and provide detailed reports, continuously refining our approach for maximum effectiveness.",
      isShowing: false,
    },
    {
      id: 3,
      title: "Hosting",
      content: "We start by assessing your website’s requirements to provide tailored hosting solutions that meet your specific needs. Our team then sets up and configures your hosting environment to ensure optimal performance and security. We migrate your website to our servers seamlessly, minimizing downtime and ensuring a smooth transition. Finally, we offer ongoing monitoring and support to keep your website running reliably and efficiently.",
      isShowing: false,
    },
    {
      id: 4,
      title: "Analytics",
      content: "We begin by identifying key performance indicators (KPIs) aligned with your business objectives. Our team then implements robust analytics tools to track website traffic, user behavior, and conversion metrics. We analyze the data collected to gain valuable insights into your audience's preferences and behaviors. Finally, we provide comprehensive reports and recommendations to optimize your marketing efforts and drive continuous improvement.",
      isShowing: false,
    },
    {
      id: 4,
      title: "Cloud Migratrion",
      content: "Switching to the cloud can be of a great benefit financially as upfront capital expenditures can really take a toll on a business, get in touch today to see how we can help",
      isShowing: false,
    },
  ]);

  const toggleDiv = (id) => {
    setDivs((prevDivs) =>
      prevDivs.map((div) =>
        div.id === id ? { ...div, isShowing: !div.isShowing } : div
      )
    );
  };
  
  return (
    <div className=''>
      <Head>
        <title>Web Design High Wycombe </title>
        
   
      </Head>
      <TopHeader/>
      <Nav />

      <div className="bg-black grid grid-cols-1 lg:grid-cols-2 w-full h-screen p-0 lg:p-20">
        
      <div className="flex flex-col p-4">
          <h1 className="text-3xl lg:text-9xl font-bold  text-white rounded mb-5">
           <span className='font-outline-2 text-black'> OUR </span><br/> SERVICES.
          </h1>
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
          alt='our-services'
        />
  </div>
       
      </div>
      <h3 className="text-3xl lg:text-7xl font-bold bg-black text-white text-center">Technology</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 
p-10 lg:p-20 gap-0 lg:gap-72 bg-black text-white">
      <div className="">
      

        <p className="text-xl lg:text-2xl leading-10">
          We are a dynamic and inclusive collective of digital aficionados. Our
          tightly-knit team is swiftly expanding, honing expertise in
          cutting-edge development and digital marketing trends. With a wealth
          of experience, we craft impactful digital solutions that deliver
          tangible results. 
          
        </p>
      </div>

<div className='p-5 leading-10'>
      {divs.map(({ id, title, content, isShowing }) => (
        <div key={id}>
          <button
            onClick={() => toggleDiv(id)}
            className='border-b-2 w-full text-left'
          >
            {title}
            {isShowing ? '-' : ' + '}
          </button>
          {isShowing && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <p>{content}</p>
              <p>You can add more content here as needed.</p>
            </div>
          )}
        </div>
      ))}
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