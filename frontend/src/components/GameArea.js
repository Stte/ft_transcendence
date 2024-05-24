import React from 'react';
import './GameArea.css';

const GameArea = () => {
  return (
    <div className="game-area">
      <div className="paddle left-paddle"></div>
      <div className="paddle right-paddle"></div>
      <div className="ball"></div>
    </div>
  );
};

export default GameArea;
