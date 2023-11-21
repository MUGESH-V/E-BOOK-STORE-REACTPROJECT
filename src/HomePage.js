import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '$12.99',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU2nvbkFHxY5iUwUhoXvTRpBLZXO2xUsgag&usqp=CAU',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '$15.99',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlqXLYO3Wkv84uIgYsqJCBiaRfES71dkCrg&usqp=CAU',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: '$14.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: '$11.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: '$13.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '$15.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: '$18.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: '$10.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: '$16.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
];


const HomePage = () => {
  return (
    <Container style={{ marginTop: '20px',marginBottom:'40px', color: '#fff' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Explore Our Catalog</h2>
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card>
              <CardMedia component="img" height="250" image={book.imageUrl} alt={book.title} />
              <CardContent>
                <Typography variant="subtitle1">{book.title}</Typography>
                <Typography variant="caption" color="textSecondary">{`By ${book.author}`}</Typography>
                <Typography variant="body2">{`Price: ${book.price}`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;