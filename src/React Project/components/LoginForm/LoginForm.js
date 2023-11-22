import React from 'react';
import { DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const LoginForm = ({ onClose }) => {
  return (
    <div>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField label="Username" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} color="primary">
          Login
        </Button>
      </DialogActions>
    </div>
  );
};

export default LoginForm;
