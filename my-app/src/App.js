import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './components/Login'; // Ensure this matches the file name
import Dashboard from './components/Dashboard';
import TicTacToe from './components/TicTacToe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import '/Users/sohampathak/Desktop/MIT/FSD/FSDMINI/my-app/src/components/About.css';
import About from './components/About';
import ProtectedRoute from './ProtectedRoute';

function App() {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    function handleLogin() {
        setIsLoggedIn(true); // Logic for login
      }

    return (
    <UserProvider>
      <Router>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/TicTacToe" 
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <TicTacToe />
          </ProtectedRoute>
        } 
      />
    <Route 
        path="/about" 
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <About />
          </ProtectedRoute>
        } 
      />
    </Routes>
      </Router>

    </UserProvider>

    
  );
}

export default App;

