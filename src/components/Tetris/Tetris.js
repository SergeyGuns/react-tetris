import React from 'react'
import GameLoop from './GameLoop'
import Actions from './Actions'
import './Tetris.css'

const color = {
  0: 'transparent',
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'aqua',
  5: 'orange',
  6: 'yellow',
  7: 'purple',
  9: 'gray'
}


class Tetris extends React.Component {
  constructor(props){
    super(props) 
    this.state = {...this.props.model}
    this.gameLoop = GameLoop;
    console.log(this.props);
  }

  componentDidMount() {
    document.addEventListener('keypress', (e)=>this.keyBoardHandler(e))
    document.addEventListener('click', ()=>this.loop())
  }
  
  loop() {
    this.setState({matrix : this.gameLoop(this.state.matrix)})
  }

  keyBoardHandler(event) {

    const KEY = event.key.toUpperCase()
    const { MOVE_LEFT, MOVE_RIGHT } = this.props.actions
    console.log(KEY)

    const actions = {
    
      'D' : ()=>this.setState({matrix: MOVE_RIGHT(this.state.matrix)}),
      'A' : ()=>this.setState({matrix: MOVE_LEFT(this.state.matrix)}),
      'S' : ()=>this.loop()
    
    }
    actions[KEY]()

  }
  render() {
    let { matrix } = this.state 
    return (
      <div className='matrix'>
        {
          matrix.map((row,indexI,arr)=>{
            return <div key={indexI} className='matrix__row'>{
                row.map((col,indexJ)=>{
                  return  <div 
                            key={indexI+''+indexJ} 
                            style={{backgroundColor : color[matrix[indexI][indexJ]] }} 
                            className='matrix__col'>
                          </div>
                      })
                    }
                  </div>
          })
        }
      </div>
    )
  }
}

export default Tetris
