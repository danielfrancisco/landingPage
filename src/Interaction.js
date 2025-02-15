import "./styles/Interaction.scss"
import visto from "./images/visto.png"
import home from "./images/home.png"
import buildings from "./images/buildings.png"

function WrapperInteraction() {
  return (
    <>
        <div className="wrapper">
            <div className="titles">
               <div className="titlesHead">Soluciones personalizadas para proteger 
               tu hogar o negocio

               <div className="paragraph1">Elige la opción que mejor se adapte a tus necesidades</div>
            </div>
            
            <div className="wrapper-visto">
                <div className="visto">
                    <img src={visto}/>
                    Selecciona <span>"Residencial"</span> si necesitas proteger tu hogar</div>
                <div className="visto">
                <img src={visto}/>
                    Selecciona <span>"Negocio"</span> si buscas proteger tu empresa.</div>
                </div>
            </div>

            <div className="wrapper-btns">
                <button className="residentialBtn">
                    <img src={home} className="home"/>
                    <p>Residencial</p>
                </button>
                <button className="negociosBtn">
                <img src={buildings} className="buildings"/>
                
                Negocios
                </button>
                
            </div>
        </div>
        
    </>
  );
}

export default WrapperInteraction;

