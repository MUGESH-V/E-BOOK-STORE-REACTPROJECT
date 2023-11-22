import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container style={{ marginTop: '20px', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Your app icon or logo here */}
        <Typography variant="h2" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}> NowEbook</Typography>
      </div>

      <Typography variant="body1">
        Welcome to Your E-Book Store, where the world of literature meets the convenience of the digital age. We are passionate about bringing the joy of reading to your fingertips. Explore our vast collection of e-books spanning various genres, from timeless classics to contemporary bestsellers. Our user-friendly platform offers a seamless and enjoyable shopping experience, allowing you to discover, purchase, and enjoy your favorite books with just a few clicks. Dive into a virtual library that caters to every taste and preference. At Your E-Book Store, we believe in the power of knowledge and the endless possibilities that a good book can unlock. Join us in the journey of literary exploration and elevate your reading experience.
      </Typography>

      {/* Add more information about your app */}
    </Container>
  );
};

export default AboutPage;
