import React from 'react';
import './App.scss';
import Sidenav from './components/Sidenav/Sidenav.js'
import Triangle from './components/Triangle/Triangle'
import ExpandableModal from './components/ExpandableModal/ExpandableModal'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


function App() {
  return (
    <>
    <meta name="theme-color" content="#38177D" />
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
                  <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                </div>
              </ExpandableModal>
            </ParallaxLayer>
        </Parallax>
      </div>
    </div>
    </>
  );
}

export default App;
