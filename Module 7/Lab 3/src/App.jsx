import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting';
import BigCats from './BigCats';
import Emoji, { EmojiProvider } from './EmojiContext';
import BitcoinRates from '../Lab 2/src/BitcoinRates';

function App() {
  const [count, setCount] = useState(0)

  return (
    <EmojiProvider>
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <Greeting name="John">This is a custom greeting message.</Greeting>
        <BigCats />
        <Emoji />
        <BitcoinRates />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </EmojiProvider>
  )
}

export default App
