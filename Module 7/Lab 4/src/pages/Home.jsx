import React from 'react';
import Greeting from '../../Lab 3/src/Greeting';
import Emoji from '../components/Emoji';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Emoji />
      <Greeting name="Visitor">Enjoy your stay!</Greeting>
    </div>
  );
}

export default Home;
