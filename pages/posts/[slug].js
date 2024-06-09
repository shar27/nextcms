import { client } from '../../contentful';
import { fetchBlogPosts } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const getStaticPaths = async () => {
  const blogPosts = await fetchBlogPosts();
  console.log(blogPosts)
 
  const paths = blogPosts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false, // Can be true or 'blocking' if you want to enable incremental static generation
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  
  const res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    
  });

  return {
    
    props: {
      post: res.items[0],
    },
  };
};



export default function Post({ post }) {
  const { title, content } = post.fields;
  





// Function to parse the content and extract the URL
const extractImageUrl = (content) => {
  // Loop through the content nodes
  for (const node of content.content) {
    // Check if the node type is 'embedded-asset-block'
    if (node.nodeType === 'embedded-asset-block') {
      // Extract the URL from the node data
      return node.data.target.fields.file.url;
    }
  }
  // If no embedded asset found, return null or handle accordingly
  return null;
};

// Extract the URL from the content
const imageUrl = extractImageUrl(content);

console.log(imageUrl);
  return (
    <div>
      <Head>
        <title>{title}</title>
      
      </Head>
<Nav/>

      <h1 className='text-5xl text-center p-5 uppercase'>{title}</h1>
      
      <div className='relative w-full h-screen'>
      <Image 
        className='object-cover'
        layout='fill'
        src={'https:' + post.fields.featured.fields.file.url + '?w=1600&h=800&fm=jpg&q=80'}
        alt={'https:' + post.fields.featured.fields.file.url}
      />
    </div>
      <div className='p-5 lg:p-20 container leading-10 font-sans flex flex-col mt-auto '>
        {documentToReactComponents(content)}</div>
      <div className='relative w-full h-screen'>
      <Image 
        className='object-cover'
        layout='fill'
        
        alt={'https:' + post.fields.featured.fields.file.url}
          src={'https:' + imageUrl}
          />
      </div>
      <Footer/>
    </div>
  );
}
