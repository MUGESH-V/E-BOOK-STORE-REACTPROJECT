import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '$20',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU2nvbkFHxY5iUwUhoXvTRpBLZXO2xUsgag&usqp=CAU',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '$25',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlqXLYO3Wkv84uIgYsqJCBiaRfES71dkCrg&usqp=CAU',
  },
  {
    id: 3,
    title: 'React',
    author: 'George Orwell',
    price: '$19',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698914043i/201319987.jpg',
  },
  {
    id: 4,
    title: 'Python Programming',
    author: 'J.D. Salinger',
    price: '$20',
    imageUrl: 'https://m.media-amazon.com/images/I/419zUFm+c0L.jpg',
  },
  {
    id: 5,
    title: 'Horrors of the Earth',
    author: 'Jane Austen',
    price: '$29',
    imageUrl: 'https://m.media-amazon.com/images/I/51HmDzZYODS.jpg',
  },
  {
    id: 6,
    title: 'Wings Of Fire',
    author: 'Harper Lee',
    price: '$25',
    imageUrl: 'https://i.pinimg.com/474x/14/4e/47/144e47c797f89aa47bfb65e0eab7bba3.jpg',
  },
  {
    id: 7,
    title: 'A History Of Violence',
    author: 'J.R.R. Tolkien',
    price: '$10',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81SmO4uK0jL.AC_UL210_SR210,210.jpg',
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: '$18',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5d253c231b7b3d000152f204/1636959802830-AW7JAWUJGCXXUYVIZC3J/Pride_and_Prejudice_Cover-Amazon-Front__77495.1569338564.386.513.jpg',
  },
  {
    id: 9,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: '$22',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/6186200c6b828336568b8269/d952956b-2571-4149-b1c1-e131127f9c65/07.jpg',
  },
];

const HomePage = () => {
  const handleBuyClick = (book) => {
    console.log(`Buy clicked for ${book.title}`);
  };

  return (
    <Container style={{ marginTop: '20px', marginBottom: '40px', color: '#fff' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Explore Our Books</h2>
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card>
              <CardMedia component="img" height="250" image={book.imageUrl} alt={book.title} />
              <CardContent>
                <Typography variant="subtitle1">{book.title}</Typography>
                <Typography variant="caption" color="textSecondary">{`By ${book.author}`}</Typography>
                <Typography variant="body2">{`Price: ${book.price}`}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleBuyClick(book)}>
                 Buy & Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
