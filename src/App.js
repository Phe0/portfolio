import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav.js'
import Triangle from './components/Triangle/Triangle'

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <div className="App__usable">
        <Triangle width="80" rotation="65" color="38177D" x='20' y='3'/>
      </div>
    </div>
  );
}

export default App;
