import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App" >
      <Route path="/" exact component={Main}/>
      <Route path="/about" exact component={About}/>
      <Route path="/experience" exact component={Experience}/>
      <Route path="/projects" exact component={Projects}/>
      <Route path="/skills" exact component={Skills}/>
    </div>
  )
}

export default App;
