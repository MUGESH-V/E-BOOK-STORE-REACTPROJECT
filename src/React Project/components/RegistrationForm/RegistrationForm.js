import React from 'react';
import { DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const RegistrationForm = ({ onClose }) => {
  return (
    <div>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <TextField label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <TextField label="Confirm Password" type="password" variant="outlined" margin="normal" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} color="primary">
          Register
        </Button>
      </DialogActions>
    </div>
  );
};

export default RegistrationForm;
