import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav.js'
import Triangle from './components/Triangle/Triangle'
import ExpandableModal from './components/ExpandableModal/ExpandableModal'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


function App() {
  return (
    <div className="App">
      <Sidenav/>
      <div className="App__usable">
        <Parallax pages={2} scrolling={true}>
            <Triangle/>
            <ParallaxLayer offset={0} speed={0.2}>
              <ExpandableModal>
                <div className="intro-card">
                  <h1 className="intro-card__name">PEDRO FÉO</h1>
                  <h2 className="intro-card__career">SOFTWARE ENGINEER</h2>
                </div>
                <div>
                  
                </div>
              </ExpandableModal>
            </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
