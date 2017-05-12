FIGURES = {
  J : `001 
       001 
       011`,

  L : `200 
       200
       220`,

  O : `33 
       33`,

  S : `000 
       044 
       440`,

  Z : `000 
       550 
       055`,

  I : `0600
       0600
       0600 
       0600`,

  T : `000 
       777 
       070`,

}

class Figures {
  constructor({figures = FIGURES})
  getRandomFigure() { 
    return figures[['J','L','O','S','Z','I','T'][Math.ceil(Math.random()*7)]]
  }
}

export default Figures