import React from 'react';
import './App.scss';

import GoofyLine from './components/GoofyLine/GoofyLine'
import BubbleNav from './components/BubbleNav/BubbleNav'

function App() {
  return (
    <>
      <meta name="theme-color" content="#38177D" />
      <main className="App">
        <BubbleNav />
        <section className="welcome-area">
          <GoofyLine line="HELLO" priority="1" color="purple" />
          <GoofyLine line="I'm Pedro" priority="2" color="purple" />
          <br />
          <GoofyLine line="software" priority="3" color="orange" />
          <GoofyLine line="engineer" priority="3" color="orange" />
        </section>
      </main>
    </>
  );
}

export default React.memo(App);
