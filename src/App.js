import React from 'react';
import './styles/global.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
