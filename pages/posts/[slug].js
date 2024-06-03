import { client } from '../../contentful';
import { fetchBlogPosts } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const blogPosts = await fetchBlogPosts();
 
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
  const { title, content, author, published } = post.fields;

  console.log(title);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className='text-5xl text-center p-5'>{title}</h1>
      
      <Image 
      className=''
         width={300}
         height={100}
        
          src={'https:' + post.fields.featured.fields.file.url}
          />
          
      <div className='p-5 container leading-9 font-sans flex flex-col mt-auto '>{documentToReactComponents(content)}</div>

        <div className='font-bold p-5 text-2xl'>{author}</div>
        <div className='font-bold p-5 text-2xl'>{published.slice(0,10)}</div>
    </div>
  );
}
