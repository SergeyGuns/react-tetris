const MOVE_LEFT = function (matrix) {
  
  let canMove = true;

  function moveLeft() {
    if( canMove === false ) return;   
    for(let Y = 0,len = matrix.length - 1; Y < len; Y++) {
  
      for(let X = 0, len = matrix[Y].length - 1; X < len; X++) {
        if(matrix[Y][X-1] === 0 && matrix[Y][X] !== 9 && matrix[Y][X]) {
          matrix[Y][X-1] = matrix[Y][X];
          matrix[Y][X] = 0;
        }

      }

    }
    canMove = true;
  }

  for(let Y = matrix.length - 1; Y >= 0; Y--) {
  
    for(let X = matrix[Y].length - 1; X >= 0; X--) {
    
      if(   matrix[Y][X] !== 9 && matrix[Y][X] ){

          if(  matrix[Y][X-1] === undefined ||
            matrix[Y][X-1] === 9) {

            canMove = false ;
          }
      }


    }
  }
  moveLeft()
  return matrix;
}

const MOVE_RIGHT = function (matrix) {
  
  let canMove = true;

  function moveRight() {
    if( canMove === false ) return;   
    for(let Y = matrix.length - 1; Y >= 0; Y--) {
  
      for(let X = matrix[Y].length - 1; X >= 0; X--) {
        if(matrix[Y][X+1] === 0 && matrix[Y][X] !== 9 && matrix[Y][X]) {
          matrix[Y][X+1] = matrix[Y][X];
          matrix[Y][X] = 0;
        }

      }

    }
    canMove = true;
  }

  for(let Y = matrix.length - 1; Y >= 0; Y--) {
  
    for(let X = matrix[Y].length - 1; X >= 0; X--) {
    
      if(   matrix[Y][X] !== 9 && matrix[Y][X] !== 0 ){

          if(  matrix[Y][X+1] === undefined ||
               matrix[Y][X+1] === 9) {

            canMove = false ;
          }
      }


    }
  }
  moveRight()
  return matrix;
}
//const MOVE_DOWN;
//const PAUSE_TOOGLE;
export { MOVE_LEFT, MOVE_RIGHT }
