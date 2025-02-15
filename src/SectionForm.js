import "./styles/sectionForm.scss"
import arrowCita from "./images/arrowCita.png"
import group11Vector from "./images/group11Vector.png"

function sectionForm(){
    return(
        <>
          <div className="section-form">
            <div className="content-form">
                <p>¡Actúa ahora!</p>
                <h1>Actúa ahora, Protege tu hogar y recupera tu tranquilidad</h1>
            </div>
          

          <div className="content">
            <div className="form">
                <div className="title-form">
                    <p >No esperes a que los daños sean irreversibles</p>
                    <h1>Contáctanos hoy mismo para una consulta gratuita.</h1>
                    <p >Toma el primer paso para liberar tu hogar de termitas.</p>
                </div>
                
                <div className="input-form">
                   <div className="group-input">
                        <div className="input-name">
                            <p>Nombre</p>
                            <input placeholder="Ingrese su Nombre"/>
                        </div>
                    </div> 

                    <div className="frame245">
                        
                        <div className="input-email">
                        <p>Correo*</p>
                        <input placeholder="Ingrese su correo corporativo"></input>
                        </div>

                        <div className="input-email">
                        <p>Teléfono*</p>
                        <input placeholder="Ingrese su telefono"></input>
                        
                        </div>
                    </div>

                    <div className="frame245">
                        <div className="input-email">
                            <p>Municipio*</p>
                            <input placeholder="Ingrese su municipio"></input>
                        </div>

                        <div className="input-email">
                            <p>Tipo de solucion</p>
                            <input placeholder="Selecione un opcion"></input>
                       </div>
                    </div>

                    <div className="group-input">
                        <p>¿Cómo te podemos ayudar?</p>
                        <textarea placeholder="Ingrese su Nombre"/>
                    </div>

                    <div className="actions">
                    <div className="aviso">
                            <input type="checkbox"/>
                            <div className="aviso">
                                <p>Acepto el <span>Aviso de Privacidad</span> y<span>Términos y Condiciones</span>, así como las Políticas de Cookies.</p>
                            </div>
                       </div>

                       <button>Enviar
                        <img src={arrowCita}/>
                       </button>
                    </div>
                       
                    </div>
            </div>
          </div>

          <div className="group11">
             <img src={group11Vector}/>
          </div>
        </div>
        </>
    )
}

export default sectionForm