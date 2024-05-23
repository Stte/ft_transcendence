import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import GameArea from './components/GameArea';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <GameArea />
    </div>
  );
}

export default App;
