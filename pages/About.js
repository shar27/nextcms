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
        <meta
          name="description"
          content="Web Design High Wycombe"
        />
        <meta name="description" content="Looking for expert web design in High Wycombe? Our local web development company specializes in responsive and ecommerce web design tailored to small businesses. Enhance your online presence with our professional website designers and digital marketing services. 
        Get in touch for SEO services in High Wycombe to boost your visibility and drive traffic to your site."></meta>

<meta property="og:description" content="High Wycombe web design agency offers comprehensive web development and SEO services. Our specialists provide custom web design for local businesses, ensuring a responsive, user-friendly experience. Partner with us for expert digital marketing, local SEO, and ecommerce solutions. 
Contact us today to elevate your online strategy and achieve your business goals."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader/>
      <Nav />

      <div className="relative w-full h-screen  opacity-75 z-0">
        <Image
          className="absolute top-0 left-0 w-full h-screen lg:h-full"
          src={lome}
          width={300}
          height={500}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 h-screen">
          <h3 className="text-3xl lg:text-5xl font-bold bg-black text-white p-4 rounded mb-5">
            Our Story.
          </h3>

          <button className="bg-customBlue text-white rounded-sm w-48 lg:w-32 p-2 text-xl">
            Get in touch
          </button>
        </div>
      </div>

<div className="w-full bg-black text-white font-bold">
      <div className="flex flex-col p-10">
        <h3 className="text-2xl lg:text-3xl text-center mb-10">Experts in our fields</h3>

        <p className="text-xl lg:text-2xl leading-10 text-center">
          We are a dynamic and inclusive collective of digital aficionados. Our
          tightly-knit team is swiftly expanding, honing expertise in
          cutting-edge development and digital marketing trends. With a wealth
          of experience, we craft impactful digital solutions that deliver
          tangible results. 
          
          <br/>
          <br/>
          Partnering with brands and organizations globally,
          we specialize in developing digital products and innovative marketing
          strategies that align with their business objectives. 
          
          <br/>
          <br/>
          Need a visually
          stunning, high-performing website or digital campaign? Seeking to
          elevate your online presence and captivate your audience? Let us
          propel your brand forward, ensuring heightened visibility, enhanced
          engagement, and increased sales. Together, we can turn your digital
          aspirations into reality.
        </p>
      </div>
      </div>
      <section className="flex justify-center">
      <ContactForm/>
     
      </section>
      <Footer/>
    </div>
  );
}

export default About;
