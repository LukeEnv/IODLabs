import React, { createContext, useState } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
}

export default EmojiContext;
