import React, { useContext } from 'react';
import EmojiContext from './EmojiContext';

function Emoji() {
  const { isHappy, toggleMood } = useContext(EmojiContext);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>{isHappy ? '😊' : '😢'}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
