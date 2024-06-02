// pages/api/subscribe.js
import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const response = await axios.post('https://api.mailerlite.com/api/v2/subscribers', {
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
        },
      });

      res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Subscription failed. Please try again.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
