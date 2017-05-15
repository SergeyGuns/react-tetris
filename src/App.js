import React, { Component } from 'react';
import Tetris from './components/Tetris'
import './App.css';
import Actions from './components/Tetris/Actions'
import Model from './components/Tetris/Model'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tetris model={Model} actions={Actions}/>
      </div>
    );
  }
}

export default App;
