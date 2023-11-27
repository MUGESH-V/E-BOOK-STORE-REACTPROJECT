
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Card, CardMedia } from '@mui/material';

const Sample = () => {
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);

  const bookDetails = {
    title: 'React',
    author: 'George Orwell',
    price: '$19.99',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698914043i/201319987.jpg',
    paymentFormImageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698914043i/201319987.jpg',
  };

  const offerDetails = {
    discount: '10%',
    freeShipping: true,
  };

  const handlePayment = () => {
    console.log('Processing payment...');
  };

  return (
    <div>
      <Card>
        <CardMedia component="img" height="400" width="50px" image={bookDetails.imageUrl} alt={bookDetails.title} />
      </Card>
      <center>
        <br></br><br></br>
        <h1>SRM BOOK-STORE</h1>
        <Typography variant="subtitle1">Author: {bookDetails.author}</Typography>
        <Typography variant="subtitle1">Price: {bookDetails.price}</Typography>

        <Button variant="contained" color="primary" onClick={() => setIsPaymentFormOpen(true)}>
          Proceed to Payment
        </Button>
      </center>
      <Dialog open={isPaymentFormOpen} onClose={() => setIsPaymentFormOpen(false)}>
        <DialogTitle>Payment Details</DialogTitle>
        <DialogContent>
          <Card>
            <CardMedia component="img" height="200" image={bookDetails.paymentFormImageUrl} alt={bookDetails.title} />
          </Card>
          <Typography variant="h6">Book Details</Typography>
          <Typography variant="subtitle1">Title: {bookDetails.title}</Typography>
          <Typography variant="subtitle1">Author: {bookDetails.author}</Typography>
          <Typography variant="subtitle1">Price: {bookDetails.price}</Typography>

          <Typography variant="h6">Offers</Typography>
          <Typography>
            {offerDetails.discount && `Discount: ${offerDetails.discount}`}
          </Typography>
          <Typography>
            {offerDetails.freeShipping && 'Free Shipping Available'}
          </Typography>

          <TextField label="Card Number" fullWidth margin="normal" />
          <TextField label="Expiration Date" fullWidth margin="normal" />
          <TextField label="CVV" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPaymentFormOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePayment} color="primary">
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sample;
