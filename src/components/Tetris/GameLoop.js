import getFigure from './Figures'
console.log(getFigure())
export default function GameLoop (matrix) {
    console.log('GameLoop Step')
    let toDrop = false;
    let toFreez = 0;
    function check() {
      for(let Y = matrix.length-1; Y >= 0; Y--) {
        for(let X = matrix[Y].length-1; X >= 0; X--) {

          if( matrix[Y+1] && matrix[Y+1][X] === 0 && matrix[Y][X] !== 9) {
            toDrop = true;
          }
          if ( matrix[Y+1] && 
               matrix[Y+1][X] === 9 && 
               matrix[Y][X] !== 9 && 
               matrix[Y][X] !== 0 ) {

            toFreez = matrix[Y][X];
          
          }
          if ( matrix[Y][X] !== 9 && 
               matrix[Y][X] !== 0 &&
               matrix[Y+1] === undefined ) {
          
            toFreez = matrix[Y][X];
          
          }
        }
      }
      toFreez && freezing(toFreez)
      toDrop && dropin()
    }

    function freezing(num) {
      for(let Y = matrix.length-1; Y >= 0; Y--) {
        for(let X = matrix[Y].length-1; X >= 0; X--) {
          if(matrix[Y][X] === num) {
            matrix[Y][X] = 9
          }
        }
      }
      toFreez = 0;
      addFigures()
    }

    function addFigures() {
      let newFigure = getFigure()
      
      for(let Y = 0,len = matrix.length - 1; Y < len; Y++) {
  
        for(let X = 0, len = matrix[Y].length - 1; X < len; X++) {
          if(newFigure[Y] && newFigure[Y][X])
            matrix[Y][X] = newFigure[Y][X]
        }
      }
    }

    function dropin() {

      for(let Y = matrix.length-1; Y >= 0; Y--) {
        for(let X = matrix[Y].length-1; X >= 0; X--) {

          if( matrix[Y+1] && matrix[Y+1][X] === 0 && matrix[Y][X] !== 9) {
            matrix[Y+1][X] = matrix[Y][X]
            matrix[Y][X] = 0
          }
        }
      }
      toDrop = false;
    }
    check()




    return matrix;
}

