export default function getRandomFigure(arg) {

  const FIGURES = {

    J:[[0,0,1], 
       [0,0,1], 
       [0,1,1]],

    L:[[2,0,0], 
       [2,0,0],
       [2,2,0]],

    O:[[3,3], 
       [3,3]],

    S:[[0,0,0],
       [0,4,4], 
       [4,4,0]],

    Z:[[0,0,0],
       [5,5,0],
       [0,5,5]],

    I:[[0,6,0,0],
       [0,6,0,0],
       [0,6,0,0], 
       [0,6,0,0]],

    T:[[0,0,0], 
       [7,7,7], 
       [0,7,0]],

  }

  if(!arg)
    return FIGURES[Object.keys(FIGURES)[Math.ceil(Math.random()*7)]];
  else
    return FIGURES[arg];
}

