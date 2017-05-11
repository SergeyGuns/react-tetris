import React, { Component } from 'react';
import Tetris from './components/Tetris'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tetris/>
      </div>
    );
  }
}

export default App;
