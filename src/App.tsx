import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftWing from './components/landing-blocks/LeftWing';
import RightWing from './components/landing-blocks/RightWing';
import Block01 from './components/landing-blocks/Block01';
import Block02 from './components/landing-blocks/Block02';
import Block03 from './components/landing-blocks/Block03';
import Block04 from './components/landing-blocks/Block04';
import Block05 from './components/landing-blocks/Block05';
import Block06 from './components/landing-blocks/Block06';
import Block07 from './components/landing-blocks/Block07';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LeftWing></LeftWing>
      <RightWing></RightWing>
      <Block01></Block01>
      <Block02></Block02>
      <Block03></Block03>
      <Block04></Block04>
      <Block05></Block05>
      <Block06></Block06>
      <Block07></Block07>
      <Footer></Footer>
    </div>
  );
}

export default App;
