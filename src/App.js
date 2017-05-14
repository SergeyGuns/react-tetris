import React, { Component } from 'react';
import Tetris from './components/Tetris'
import './App.css';
import Actions from './components/Tetris/Actions'
import Model from './components/Tetris/Model'

const ComposeTetris = Component =>
  class extends Component {
    constructor(){
      super()
      this.actions = Actions
    }
    componentDidMount(){
      document.addEventListener('keypress', this.keyHandler)
    }
    keyHandler(event) {

      const KEY = event.key.toUpperCase()
    
      console.log(KEY)

      const KEY_BIND = {
    
        'D' : console.log('moveRight'),
        'A' : console.log('moveLeft'),
        'S' : console.log('moveDown')
    
      }
      if(KEY_BIND[KEY])
        this.setState({matrix: KEY_BIND[KEY](this.props.model.matrix)});

    }
    render(){
      return (
        <Component
          {...this.props}
        />
      )
    }
  }

const ComposedTetris = ComposeTetris(Tetris)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComposedTetris model={Model}/>
      </div>
    );
  }
}

export default App;
