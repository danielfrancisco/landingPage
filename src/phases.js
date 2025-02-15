import "./styles/phases.scss"
import cardPhase1 from "./images/cardPhase1.png"
import cardPhase2 from "./images/cardPhase2.png"
import cardPhase3 from "./images/cardPhase3.png"
import cardPhase4 from "./images/cardPhase4.png"

function Phases(){
    return(
        <>
          <div className="wrapper-phase">
            <div className="content">
                <h1>Nuestro proceso en simples 4 pasos efectivo</h1>
                <p>En Confort Control Plagas, te ofrecemos una solución completa para erradicar termitas y proteger tu hogar de futuras infestaciones:</p>
            </div>

            <div className="phases">
              <div className="cardPhase">
                <img src={cardPhase1}/>
              </div>

              <div className="cardPhase">
                <img src={cardPhase2}/>
              </div>

              <div className="cardPhase">
                <img src={cardPhase3}/>
              </div>

              <div className="cardPhase">
                <img src={cardPhase4}/>
              </div>
            </div>

  </div>

          
        </>
    )
}

export default Phases;