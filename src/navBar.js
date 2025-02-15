import "./styles/navBar.scss"
import logo from "./images/logo.png"
import logoWhatsapp from "./images/logoWhatsapp.png"
import dropBar from "./images/dropBar.png"

function NavBar() {
    return (
      <>
        <div className="navContainer">
            <img src={logo} alt="cpp" className="logo"/>
            
            <div className="linksContainer">
                <a>Hogar</a>
                <a>Negocios</a>
                <a>Preguntas Frecuenter</a>
                <a>¿Por qué elegirnos?</a>
            </div>

            <div className="contact">
               <button>Enviar Mensaje
               <img src={logoWhatsapp} alt="cpp" className="ws-logo"/>
               </button>
               
               <img src={dropBar} className="drop-bar" />
            </div>
        </div>
      </>
    );
  }
  
  export default NavBar;


  