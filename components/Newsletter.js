import { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/subscribe', { email });
      setMessage('Subscribed successfully!');
    } catch (error) {
      setMessage('Subscription failed. Please try again.');
    }
  };

  return (
    <div className='flex flex-col mt-auto'>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className='w-full rounded-sm border border-grey-300 p-2 h-12'
        />
        <button className='border border-white w-full p-2 mt-auto animate-pulse text-white text-lg' type="submit">Subscribe</button>
      </form>
      {message && <p className='text-red-500 text-lg font-bold p-2'>{message}</p>}
    </div>
  );
};

export default NewsletterForm;
