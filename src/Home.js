import "./styles/home.scss"
import termita1 from "./images/termita1.png"
import termita2 from "./images/termita2.png"
import termita3 from "./images/termita3.png"
import termita4 from "./images/termita4.png"
import vector46 from "./images/vector46.png"

function Home() {
  return (
    <>
      <div className="hero">
        <div className="content-hero">
          <div className="info-hero">
             <div className="titles">
               <h1 className="text1">Confort Control Plagas</h1>
               <p className="text2">Fumigación Profesional contra Termitas en Monterrey</p>
              </div>
          </div>
          <p className="text3">Las termitas causan más daños a viviendas y negocios que muchas otras plagas, generando pérdidas significativas año tras año. Comprometen seriamente la integridad de tus inmuebles y bienes.</p>
          <button className="btn-primary">Agendar cotización</button>
        </div>

      </div>

      <div className="resourse-termita">
           <img src={vector46}/>
      </div>
      
    </>
  );
}

export default Home;

