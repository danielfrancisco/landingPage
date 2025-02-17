import "./styles/Impact.scss"
import ImpactCasa from "./images/ImpactCasa.png"
import elipse2 from "./images/elipse2.png"
import elipse3 from "./images/elipse3.png"
import elipse4 from "./images/elipse4.png"
import chevron from "./images/chevron.png"

function Impact() {
  return (
    <>
      <div className='wrapper-impact'>
        <div className="content-impact">
            <img src={ImpactCasa}/>
            <div className="content-impactChild">
                <h1>El verdadero impacto de una infestación de termitas</h1>
            

            <div className="frame228">
                <div className="frame227">
                    <p>Las termitas no son solo insectos molestos, representan una amenaza grave para tu hogar y bienestar:</p>
                    <p className="para2">Debilitan la estructura de tu bien más importante, tu hogar y esto se debe a que las termitas pueden generar túneles a través de la misma, consumiendo nutrientes importantes para ellas a su paso.</p>
                </div>
                <div className="frame226">
                    <div className="frame225">
                        <div className="frame224">
                            <img src={elipse2}/> 
                            <img src={elipse3}/> 
                            <img src={elipse4}/> 
                        </div>
                        <p className="para3">Todo esto ocurre sin importar el tipo de estructura (vigas, uniones y más). El riesgo incrementa con estructuras de madera, dado que las termitas pueden destruirla en cuestión de días.</p>
                    </div>
                </div>
            </div>

            </div>
            <img className='termita' src="https://s3-alpha-sig.figma.com/img/f9c1/bb3a/d5ce96a3d78ba8459fe1d8100dcd23db?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dUy4qn2eY~iZPAcBX7MqSH4jEQBRyBv04OxY602NXLex14cFOITb5E1uarReFrzL5rRws1NPQLnXOAGf31pHEa9~tiAGEVD39aDvDRonbzZjC7bqfrQet0MXDVNYDWGP0HT9GLcqj0rVeVPsSAWEsI5Qw5u27TfF5Is8hQnwVGWHDbqGHEdSUdbpBJnB74kcs8DDbGHSXPKTKHY1WSYmmHvhIpTiL5uNFrstT-UaUldP7Z5UfJMFZQkh3wZsWh0zUEQfBFJZatA7vp3UxonxOswhAMNZfVoiI4~lbaroFPLFhYG3lA0MkwhPnwm9ov8pG-CQQGosDSePCTHOcuYv0A__"/>
        </div>
        <div className="impact">
            <div className="frame44">
               <div className="frame48">
                <h1>Destrucción estructural costosa</h1>
                <img src={chevron}/>
                <p>Las termitas pueden debilitar vigas, pisos y paredes, lo que puede resultar en reparaciones de miles de pesos.</p>
                
               </div>
            </div>

           <div className="frame44">
               <div className="frame48">
                <h1>Pérdida de valor en tu inversión</h1>
                <img src={chevron}/>
                <p>Tu hogar, uno de tus activos más valiosos, podría perder valor significativamente debido a una infestación.</p>
                
               </div>
           </div>

           <div className="frame44" >
               <div className="frame48">
                <h1>Interrupción de tu vida diaria</h1>
                <img src={chevron}/>
                <p>Las reparaciones necesarias pueden obligarte a salir de tu hogar temporalmente, con todos los inconvenientes y gastos que esto implica.</p>
                
               </div>
           </div>

           <div className="frame44"  >
               <div className="frame48">
                <h1>Riesgos para la salud</h1>
                <img src={chevron}/>
                <p>Aunque las termitas no transmiten enfermedades, los daños que causan pueden generar condiciones favorables para la proliferación de moho y otros problemas de salud.</p>
                
            </div>
           </div>

           
       
        </div>

    </div>
    </>
  );
}

export default Impact;

