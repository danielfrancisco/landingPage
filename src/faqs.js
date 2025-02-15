import "./styles/faqs.scss"
import add from "./images/add.png"

function Faqs(){
    return(
        <>
          <div className="faqs">
            <h1>Preguntas frecuentes</h1>
            <div className="wrapper-faqs">
                <p>Figma ipsum component variant main layer. ? <img src={add}/></p>
            </div>

            <div className="wrapper-faqs">
                <p>Figma ipsum component variant main layer. ? <img src={add}/></p>
            </div>

            <div className="wrapper-faqs">
                <p>Figma ipsum component variant main layer. Horizontal italic shadow selection flows text font figjam italic undo. ? <img src={add}/></p>
            </div>

            <div className="wrapper-faqs">
                <p>Figma ipsum component variant main layer. ? <img src={add}/></p>
            </div>

            <div className="wrapper-faqs">
                <p>Figma ipsum component variant main layer. ? <img src={add}/></p>
            </div>

            <div className="wrapper-faqs">
                <p>Figma ipsum component variant main layer. ? <img src={add}/></p>
            </div>
          </div>
        </>
    )
}

export default Faqs;