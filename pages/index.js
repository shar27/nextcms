import Head from "next/head";
import { createClient } from "contentful";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import Nav from "../components/Nav";

export const getStaticProps = async () => {
    // Create a Contentful client
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    // Fetch blog posts from Contentful using the client
    const response = await client.getEntries({
      content_type: 'blogPost'
    });

    const blogPosts = response.items;

    return {
      props: {
        blogPosts
      }
    };
 
};



export default function Home({
  blogPosts
}) {
  return (
    <div>
      <Head>
        <title>Marketing Agency </title>
        <meta
          name="description"
          content="Get the best value on used motorcycles and enjoy the 
      thrill of riding the motorcycle of your choice without the high cost of ownership."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <div>
      {
      blogPosts.map((post) => (
        <div key={post.sys.id}>
          <Image 
          width={300}
          height={300}
          src={'https:' + post.fields.featured.fields.file.url}
          />
          <h2>{post.fields.title}</h2>
      
        </div>
      ))}

      {console.log(blogPosts)}
    </div>

        <ContactForm />
      
      <Footer />
    </div>
  );
}
