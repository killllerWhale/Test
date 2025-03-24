import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          React с Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Нажми меня
        </Button>
      </Container>
    </div>
  );
}

export default App;