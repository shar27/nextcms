import { client } from '../../contentful';
import { fetchSeoPosts } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import TopHeader from '../../components/TopHeader';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const getStaticPaths = async () => {
  const seoPosts = await fetchSeoPosts();
 
 
  const paths = seoPosts.map((seo) => ({
    params: { slug: seo.fields.slug },
  }));

  return {
    paths,
    fallback: false, // Can be true or 'blocking' if you want to enable incremental static generation
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  
  const res = await client.getEntries({
    content_type: 'seoBlogs',
    'fields.slug': slug,
    
  });

  return {
    
    props: {
      post: res.items[0],
    },
  };
};

const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc p-5">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol style={{listStyle: 'none !important;'}} className="list-none p-5">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-blue-500 hover:underline">
          {children}
        </a>
      ),
    },
  };


export default function Post({ post }) {
  const { title, body, heading, featured, content } = post.fields;
  





// Function to parse the content and extract the URL
// const extractImageUrl = (content) => {
//   // Loop through the content nodes
//   for (const node of content.content) {
//     // Check if the node type is 'embedded-asset-block'
//     if (node.nodeType === 'embedded-asset-block') {
//       // Extract the URL from the node data
//       return node.data.target.fields.file.url;
//     }
//   }
  // If no embedded asset found, return null or handle accordingly
//   return null;
// };

// Extract the URL from the content
// const imageUrl = extractImageUrl(content);

// console.log(imageUrl);
  return (
    <div>
      <Head>
        <title>{title}</title>
      
      </Head>
      <TopHeader/>
        <Nav/>

      <h1 className='text-5xl text-center p-5 '>{title}</h1>
      <h2 className='text-3xl text-center p-5 '>{heading}</h2>
      
      <div className='relative w-full h-screen'>
      <Image 
        className='object-cover'
        layout='fill'
        src={'https:' + post.fields.featured.fields.file.url + '?w=1600&h=800&fm=jpg&q=80'}
        alt={'https:' + post.fields.featured.fields.file.url}
      />
    </div>
      <div className='p-5 lg:p-20 container leading-8 font-sans flex flex-col mt-auto '>
        {documentToReactComponents(body, renderOptions)}</div>
      <div className='relative w-full h-screen'>
      {/* <Image 
        className='object-cover'
        layout='fill'
        
        alt={'https:' + post.fields.featured.fields.file.url}
          src={'https:' + imageUrl}
          /> */}
      </div>
      <Footer/>
    </div>
  );
}
