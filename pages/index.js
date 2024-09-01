import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//components
import {
  Nav,
  ContactForm,
  Footer,
  whatsapp,
  TopHeader,
  css,
  bootstrap,
  tailwind,
  javascript,
  react,
  wordpress,
  wix,
  nextjs,
} from "../components/Imports";
import google from "../components/assets/google.png";

//blogposts
import { fetchBlogPosts } from "../lib/contentful";

//svg
import research from "../components/svg/research.svg";
import design from "../components/svg/design.svg";
import develop from "../components/svg/develop.svg";
import marketing from "../components/svg/marketing.svg";

//whatsapp widget

export const getStaticProps = async () => {
  const blogPosts = await fetchBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export default function Home({ blogPosts }) {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" font-serif bg-white text-black">
      <Head>
        <title>High Wycombe Web Design</title>
      </Head>
      <TopHeader />
      <Nav />

      <div className="relative  h-screen text-black overflow-hidden">
        <div className="absolute inset-o"></div>

        <div className="relative z-0 flex flex-col justify-center items-center h-full text-center -top-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-0 lg:mb-10 ">
            Web Design High Wycombe
            <br />
            Leading Online Marketing Experts
          </h1>
          <p className="text-xl text-black mb-6">
            Bringing your dreams one step closer.
          </p>
          <Link href="/#contact">
            <button className="bg-customBlue text-white p-3 w-44 font-bold text-lg animate-bounce  ">
              Get a free quote
            </button>
          </Link>
        </div>
      </div>

      <Link href="https://wa.me/447907772626">
        <Image
          className="cursor-pointer fixed bottom-2 right-10 lg:right-12 z-100 w-16 h-16 "
          src={whatsapp}
          width={50}
          height={50}
        />
      </Link>

      <div
        className="grid grid-cols-4 lg:grid-cols-8 
        absolute -bottom-72 md:-bottom-72 lg:-bottom-40 left-0 w-full
         text-black 
 gap-4 lg:gap-0
 z-100 
p-5 font-bold
"
      >
        <div>
          <Image alt="wordpress" src={wordpress} width={150} height={150} />
        </div>
        <div>
          <Image alt="javascript" src={javascript} width={100} height={100} />
        </div>
        <div>
          <Image
            className="mt-0 lg:-mt-5"
            alt="css"
            src={css}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image alt="react" src={react} width={100} height={100} />
        </div>
        <div>
          <Image
            className="bg-white"
            alt="wix"
            src={wix}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image alt="bootstrap" src={bootstrap} width={100} height={100} />
        </div>
        <div>
          <Image
            className="bg-white"
            alt="nextjs"
            src={nextjs}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image alt="tailwind" src={tailwind} width={100} height={100} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4  text-black mt-10 lg:mt-0 ">
        <div className="leading-10 font-bold p-8 lg:p-16 col-span-2">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mt-5">
            Inspiring change.
          </h3>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mt-5">
            Results orientated.
          </h3>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mt-5 text-nowrap">
            Best in house team (no-outsourcing).
          </h3>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mt-5">
            We bring your vision to life.
          </h3>
          <h4 className="text-lg mt-5">
            LOME is a High Wycombe Web design agency. We guarantee results
            across three key business areas: web design & build, social media &
            digital marketing
          </h4>

          <section className="flex items-center mt-5">
            <Link href="/About" className="flex items-center">
              <span className="mr-2 text-xl ">About us</span>{" "}
              <svg
                className="animate-pulse"
                width="71"
                height="13"
                viewBox="0 0 71 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.1228 11.6296L64.4943 13L71 6.5L64.4943 0L63.1228 1.37036L67.2869 5.53086H0V7.46914H67.2869L63.1228 11.6296Z"
                  fill="#EAF765"
                ></path>
              </svg>
            </Link>
          </section>
        </div>
        {/* col 2 */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-center justify-center md:justify-self-center lg:justify-self-end"></div>
      </div>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-transparent text-black p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      <div className="p-5 lg:p-20 mt-20 lg:mt-auto">
        <h3 className="text-2xl lg:text-4xl text-black text-center font-bold ">
          Our Process
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  p-5 bg-white text-black">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl lg:text-3xl mb-5">Step 1 - Research phase</h2>

          <p className="text-xl lg:text-2xl leading-loose ">
            We conduct a thorough market analysis to understand your industry,
            competitors, and target audience. This includes identifying the
            needs, preferences, and behaviors of your potential customers, as
            well as spotting current market trends and opportunities for your
            business to capitalize on.
          </p>
        </div>
        <div className="flex flex-col justify-self-end">
          <Image
            src={research}
            alt="Research Illustration"
            width={736}
            height={462}
            className="w-full max-w-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white text-black p-5">
        <h2 className="text-2xl lg:text-3xl mb-5 block lg:hidden">
          Step 2 - Design phase
        </h2>
        <div className="flex flex-col justify-self-start">
          <Image
            src={design}
            alt="design-phase"
            width={500}
            height={500}
            className="w-full max-w-lg"
          />
        </div>
        <div className="w-full max-w-lg">
          <h2 className="text-2xl lg:text-3xl mb-5 hidden lg:block">
            Step 2 - Design phase
          </h2>

          <p className="text-xl lg:text-2xl leading-loose ">
            Next, we move to the design phase. Our team crafts unique and
            visually appealing design concepts that resonate with your brand. We
            focus on ensuring seamless navigation and an engaging user
            experience, making sure your website looks stunning on all devices,
            from desktops to mobiles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 bg-white text-black">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl lg:text-3xl mb-5 ">Step 3 - Develop phase</h2>
          <p className="text-xl lg:text-2xl leading-loose ">
            In the development stage, we build a robust, fast, and secure
            website tailored to your specifications. We integrate easy-to-use
            content management systems for effortless updates and implement best
            practices for SEO optimization to enhance your search engine
            visibility.
          </p>
        </div>
        <div className="flex flex-col justify-self-end">
          <Image
            src={develop}
            alt="develop"
            width={500}
            height={500}
            className="w-full max-w-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 bg-white text-black">
        <div className="flex flex-col justify-self-start">
          <h2 className="text-2xl lg:text-3xl mb-5 block lg:hidden">
            Step 4 - Execute strategy
          </h2>
          <Image
            alt="marketing"
            src={marketing}
            width={500}
            height={500}
            className="w-full max-w-lg"
          />
        </div>

        <div className="w-full max-w-lg">
          <h2 className="text-3xl mb-5 hidden lg:block">
            Step 4 - Execute strategy
          </h2>

          <p className="text-xl lg:text-2xl leading-loose ">
            Finally, we execute a comprehensive marketing strategy. We develop a
            detailed campaign plan to drive traffic and conversions,
            strategically placing ads across various platforms to maximize reach
            and engagement. Our team continuously monitors and adjusts campaigns
            to ensure optimal results, ensuring your business achieves its
            marketing goals.
          </p>
        </div>
      </div>

      <h3
        id="casestudies"
        className="text-3xl lg:text-5xl text-center font-bold p-5 bg-white text-black"
      >
        Case studies
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-20 bg-white text-black">
        {blogPosts.map((post) => (
          <div className="shadow-lg p-10 flex flex-col" key={post.sys.id}>
            <h2 className="text-xl lg:text-3xl font-bold text-black p-2 leading-10 uppercase text-center">
              {post.fields.title}
            </h2>
            <Image
              width={500}
              height={300}
              alt={"https:" + post.fields.featured.fields.file.url}
              src={"https:" + post.fields.featured.fields.file.url}
            />

            <div className="mt-auto p-5">
              <Link href={`/posts/${post.fields.slug}`}>
                <button className="border border-black text-black p-2 rounded-sm w-full h-12">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <section id="contact" className="flex justify-center">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
