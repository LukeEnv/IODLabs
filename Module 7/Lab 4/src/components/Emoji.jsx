import React, { useState } from 'react';

function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>{isHappy ? '😊' : '😢'}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
