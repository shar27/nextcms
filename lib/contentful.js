// lib/contentful.js
import { client } from '../contentful';

export const fetchBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'blogPost',
  });
  return response.items;
};
