import React from 'react';

const ScoreHUD = ({ score }) => {
  return (
    <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', fontSize: '24px' }}>
      Score: {score}
    </div>
  );
};

export default ScoreHUD;
