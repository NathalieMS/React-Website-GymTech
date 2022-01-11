import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages';
import LoginPage from './components/pages/login';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<LoginPage/>} />

        </Routes>
    </Router>
  );
}

export default App;
