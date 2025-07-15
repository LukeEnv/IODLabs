import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import BitcoinRates from './components/BitcoinRates';
import { EmojiProvider } from './context/EmojiContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <EmojiProvider>
      <Router>
        <nav style={{ display: 'flex', gap: '10px', padding: '10px', background: '#f0f0f0' }}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/bitcoin-rates">Bitcoin Rates</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bitcoin-rates" element={<BitcoinRates />} />
        </Routes>
      </Router>
    </EmojiProvider>
  );
}

export default App;
