import "./styles/solution.scss"
import termitaSolution from "./images/termitaSolution.png"
import cardSolution1 from "./images/cardSolution1.png"
import cardSolution2 from "./images/cardSolution2.png"
import cardSolution3 from "./images/cardSolution3.png"
import cardSolution4 from "./images/cardSolution4.png"

function Solution() {
    return (
      <>
        <div className="wrapper-solution">
            <div className="content-solution">
                <p>Confort Control Plagas</p>
                <h1>La solución definitiva contra las termitas</h1>
                <p>En Confort Control Plagas, te ofrecemos una solución completa para erradicar termitas y proteger tu hogar de futuras infestaciones:</p>
            </div>

            <div className="card-termita">
                <div className="row-1">
                    <div className="card-solution">
                        <img src={cardSolution1}/>
                    </div>
                    <div className="card-solution">
                        <img src={cardSolution2}/>
                    </div>
                    
                </div>
                <div className="row-1">
                  <div className="card-solution">
                        <img src={cardSolution3}/>
                    </div>
                    <div className="card-solution">
                        <img src={cardSolution4}/>
                    </div>
                </div>
            </div>

            <div className="termitaSolution">
                 <img src={termitaSolution}/>
            </div>
        </div>
      </>
    );
  }
  
  export default Solution;
  