import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ContactForm, Footer, Nav, lome, TopHeader } from "../components/Imports";



function About() {
  return (
    <div>
      <Head>
      <title>High Wycombe Web Design</title>
   
        
      </Head>
      <TopHeader/>
      <Nav />

      <div className="relative w-full h-screen  opacity-75 z-0">
        <Image
          className="absolute top-0 left-0 w-full h-screen lg:h-full"
          alt="about"
          src={lome}
          width={300}
          height={500}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 h-screen">
          <h1 className="text-3xl lg:text-5xl font-bold bg-black text-white p-4 rounded mb-5">
            Our Story.
          </h1>

          <button className="bg-customBlue text-white rounded-sm w-48 lg:w-32 p-2 text-xl">
            Get in touch
          </button>
        </div>
      </div>

<div className="w-full bg-black text-white font-bold">
      <div className="flex flex-col p-10">
        <h3 className="text-2xl lg:text-3xl text-center mb-10">Experts In Our Fields</h3>

        <p className="text-xl lg:text-2xl leading-10 text-center">
        We are an experienced web development team specializing in large government contracts, handling millions of traffic per month. With a keen eye for detail 
        and a focus on improving customer journeys, we craft impactful digital solutions that deliver tangible results. 
          
          <br/>
          <br/>
          Partnering with brands and organizations globally,
          we specialize in developing digital products and innovative marketing
          strategies that align with their business objectives. 
          
          <br/>
          <br/>
          As a trusted developer working in one of the top 4 consulting firms globally, I specialize in collaborating with brands and organizations worldwide. With the ability to work with any technology stack, I focus on developing digital products and innovative marketing 
          strategies tailored to align with your business objectives and deliver the results you need.
        
        <br/>
        <br/>
        Are you ready to bring your digital dreams to life? I'm here to make it happen. With my expertise in handling large government contracts and optimizing customer journeys, I'll transform your online presence into a powerhouse. Let's collaborate and 
        elevate your web design in High Wycombe and beyond. Reach out today, and let's turn your vision into reality!
        </p>
        
      </div>
      </div>
     
      <ContactForm/>
     
     
      <Footer/>
    </div>
  );
}

export default About;
