import React from 'react'
import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
    Nav,
    ContactForm,
    Footer,
    
    TopHeader
    
  } from "../components/Imports";

  import { fetchSeoPosts } from "../lib/contentful";
  
  
  export const getStaticProps = async () => {
    const seoPosts = await fetchSeoPosts();
  console.log(seoPosts);
    return {
      props: {
        seoPosts,
      },
    };
  };

function Blog({seoPosts}) {
  return (
    <div>
        <TopHeader/>
        <Nav/>
        <h3
        id="casestudies"
        className="text-3xl lg:text-5xl text-center font-bold p-5 bg-white text-black"
      >
        Blog Posts
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-20 bg-white text-black">
        {seoPosts.map((seo) => (
          <div className="shadow-lg p-10 flex flex-col" key={seo.sys.id}>
            <h2 className="text-xl lg:text-3xl font-bold text-black p-2 leading-10 uppercase text-center">
              {seo.fields.title}
            </h2>
            <Image
              width={500}
              height={300}
              alt={"https:" + seo.fields.featured.fields.file.url}
              src={"https:" + seo.fields.featured.fields.file.url}
            />

            <div className="mt-auto p-5">
              <Link href={`/seo-content/${seo.fields.slug}`}>
                <button className="border border-black text-black p-2 rounded-sm w-full h-12">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Blog