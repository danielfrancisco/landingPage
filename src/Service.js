import "./styles/service.scss"
import cardService1 from "./images/cardService1.png"
import cardService2 from "./images/cardService2.png"
import cardService3 from "./images/cardService3.png"
import cardService4 from "./images/cardService4.png"
import cardService5 from "./images/cardService5.png"

function Service(){
    return(
        <>
          <div className="wrapper-service">
            <div className="content-service">
                <h1>¿Por qué Confort Control Plagas es tu mejor opción?</h1>
            </div>

            <div className="grid-service">
                <div className="row1">
                    <div className="cardService1">
                        <img src={cardService1}/>
                    </div>
                    <div className="cardService2">
                        <img src={cardService2}/>
                    </div>
                    
                    
                </div>

                <div className="row2">
                    <div className="cardService3">
                        <img src={cardService3}/>
                    </div>
                    <div className="cardService4">
                        <img src={cardService4}/>
                    </div>
                    <div className="cardService5">
                        <img src={cardService5}/>
                    </div>
                    
                    
                </div>
            </div>
          </div>
        </>
    )
}

export default Service