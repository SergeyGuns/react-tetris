import React from 'react'
import GameLoop from './GameLoop'
import './Tetris.css'
const initState = [
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,9,0,0,0,0,0,0,0,0],
  [0,9,9,0,0,0,0,0,0,0],
  [0,9,9,0,0,9,9,9,0,0],
  [9,9,9,9,9,9,9,9,9,0]
]

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
  constructor({matrix = initState}){
    super()
    this.state = {
      matrix: initState,
    }
    this.gameLoop = GameLoop
  }

  componentDidMount() {
    document.addEventListener('click', this.loop())
  }
  
  loop() {
    console.log(1)
    this.setState({matrix : this.gameLoop(this.state.matrix)})
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