export default function GameLoop (matrix) {
    console.log('GameLoop Step')
    function freezing(num) {

      for(let Y = matrix.length-1; Y >= 0; Y--) {
        for(let X = matrix[Y].length-1; X >= 0; X--) {
          if(matrix[Y][X] === num) {
            matrix[Y][X] = 9
          }
        }
      }

    }
    for(let Y = matrix.length-1; Y >= 0; Y--) {
      for(let X = matrix[Y].length-1; X >= 0; X--) {

        if( matrix[Y+1] && matrix[Y+1][X] === 0 && matrix[Y][X] !== 9) {
          matrix[Y+1][X] = matrix[Y][X]
          matrix[Y][X] = 0
        }
        if ( matrix[Y+1] && matrix[Y+1][X] === 9 && matrix[Y][X] !== 0 ) {
          freezing(matrix[Y][X])
        }

      }
    }



    return matrix;
}

