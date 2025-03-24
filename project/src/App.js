import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { FaReact, FaGithub, FaCode } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      // Изменим заголовок
      <Typography variant="h4" component="h1" gutterBottom>
        Обновленный React проект с Material-UI
      </Typography>
        <div style={{ fontSize: '2rem', display: 'flex', gap: '20px', justifyContent: 'center', margin: '20px 0' }}>
          <FaReact />
          <FaGithub />
          <FaCode />
        </div>
        <Button variant="contained" color="primary">
          Нажми меня
        </Button>
        <p>Использование пакета иконок React Icons и Material-UI</p>
      </Container>
    </div>
  );
}

export default App;