
import { Button } from '@chakra-ui/react';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={ChatPage} />
    </div>
  );
}

export default App;
