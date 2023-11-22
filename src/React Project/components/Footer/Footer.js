import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2196F3', padding: '20px', marginTop: 'auto' }}>
      <Container>
        <Grid container justifyContent="center">
          <Typography variant="body2" color="textSecondary" style={{ color: '#fff', margin: '0 10px' }}>
            <Link href="#" color="inherit">
              @2023 NowEbook Private Limited
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: '#fff', margin: '0 10px' }}>
            <Link href="#" color="inherit">
              Terms of Use
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: '#fff', margin: '0 10px' }}>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
