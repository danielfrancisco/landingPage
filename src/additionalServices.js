import "./styles/additionalServices.scss"
import arrowAdditional from "./images/arrowAdditional.png"
import carousel from "./images/carousel.png"
import notepad from "./images/notepad.png"

function AdditionalServices(){
    return(
        <>
          <div className="wrapper-services">
            <div className="content">
                <h1>Servicios adicionales para una protección total</h1>
                <p>Además de nuestra especialidad en termitas, ofrecemos:</p>
            </div>

            <div className="carousel-services">
                <div className="content">
                    <h2>Fumigación de Plagas</h2>
                    <p>Fumigación contra roedores, cucarachas, chinches, pulgas, hormigas, moscas y mosquitos.</p>
                    <button>
                    Programar cita
                    <img src={arrowAdditional}/>
                    </button>
                </div>

                <div className="carousel">
                    <img src={carousel}/>
                </div>
            </div>

            <div>

            </div>

             <div className="cta-banner">
                <div className="frame241">
                    <img src={notepad}/>
                    <div className="frame57">
                        <h1>Pólizas de fumigación</h1>
                        <p>Pólizas de fumigación con opciones mensuales, bimestrales y semestrales para una protección continua y sin preocupaciones.</p>
                    </div>
                </div>
                <button className="frame242">
                   Programar cita
                   <img src={arrowAdditional}/>
                </button>
             </div>
          </div>
        </>
    )
}

export default AdditionalServices;