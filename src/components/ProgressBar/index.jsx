import React, { useState } from 'react';
import './progressBar.scss'; // Import CSS file for styling

const ProgressBarComponent = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '1') {
      decreaseProgressBar();
    } else if (value === '2') {
      increaseProgressBar();
    }
  };

  const increaseProgressBar = () => {
    setProgress(100);
  };

  const decreaseProgressBar = () => {
    setProgress(0);
  };

  return (
    <div className="progress-container">
      <button className="button" onClick={() => handleButtonClick('1')}>1</button>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <button className="button" onClick={() => handleButtonClick('2')}>2</button>
    </div>
  );
};

export default ProgressBarComponent;
