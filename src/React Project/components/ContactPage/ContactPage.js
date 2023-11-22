import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

const ContactPage = () => {
  return (
    <Container style={{ marginTop: '20px', color: '#fff' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Us</h2>

      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h5" style={{ marginBottom: '10px' }}>Main Office</Typography>
        <Typography variant="body1">
          Address: 123 Main Street, Cityville, Country
          <br />
          Email: office1@example.com
          <br />
          Phone : +91 9876645887
        </Typography>
      </div>

      <Divider style={{ backgroundColor: '#fff', marginBottom: '20px' }} />

      <div>
        <Typography variant="h5" style={{ marginBottom: '10px' }}>Branch Near You</Typography>
        <Typography variant="body1">
          Address: 456 Business Avenue, Townsville, Country
          <br />
          Email: office2@example.com
          <br />
          Phone: +91 9567842356
        </Typography>
      </div>
    </Container>
  );
};

export default ContactPage;
