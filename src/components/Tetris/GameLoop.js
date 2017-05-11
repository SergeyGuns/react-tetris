export default function GameLoop (matrix) {
    console.log('GameLoop Step')
    matrix.map((row,indexY,arr)=>{
      row.map((el,indexX)=>{
        if(matrix[indexY+1] && matrix[indexY+1][indexX] ) {
          matrix[indexY+1][indexX] = el
          matrix[indexY][indexX] = 0
        }
      })
    })
    return matrix;
}

