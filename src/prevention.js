import "./styles/prevention.scss"
import arrowCita from "./images/arrowCita.png"

function Prevention(){
    return(
        <>
         <div className="prevention">
            <div className="content">
                <h1>La prevención es tu mejor aliada</h1>
                <p>Programa tu inspección anual de termitas con Confort Control Plagas y mantén tu hogar seguro y protegido.</p>
            </div>

            <button>Programar cita <img src={arrowCita}/></button>
         </div>
        </>
    )
}

export default Prevention