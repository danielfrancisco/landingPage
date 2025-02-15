import "./styles/cita.scss"
import arrowCita from "./images/arrowCita.png"
import barraCita1 from "./images/barraCita1.png"
import barraCita2 from "./images/barraCita2.png"

function Cita() {
  return (
    <>
      <div className="wrapper-cta">
      
        <div className="imageCta">
         <div className="contentCta">
            <div className="infoCta">
                <h1>Si detectas alguno de estos indicios, es vital actuar de inmediato.</h1>
                <p>Las termitas pueden comprometer la estructura de tu hogar en cuestión de meses.
               </p>
            </div>
           <button>Programar cita <img src={arrowCita}/></button>
         </div>
        </div>
        <img className="barracta-1" src={barraCita1}/>  
        <img className="barracta-2" src={barraCita2}/>  
      </div>
    </>
  );
}

export default Cita;

