import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './React Project/components/NavBar/NavBar';
import HomePage from './React Project/components/HomePage/HomePage';
import AboutPage from './React Project/components/AboutPage/AboutPage';
import ContactPage from './React Project/components/ContactPage/ContactPage';
import Footer from './React Project/components/Footer/Footer';
import './styles.css';


const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="background-image">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
