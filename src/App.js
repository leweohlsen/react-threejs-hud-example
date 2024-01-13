import React, { useState } from 'react';
import './App.css';
import ThreeScene from './ThreeScene';
import ScoreHUD from './ScoreHUD';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <ThreeScene />
      <ScoreHUD score={score} />
    </div>
  );
}

export default App;
