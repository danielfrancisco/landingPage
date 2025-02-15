import "./styles/issues.scss"
import card2Isssues3 from "./images/card2Issues3.png"
import cardIssues1 from "./images/cardIssues1.png"
import cardIssues2 from "./images/cardIssues2.png"
import cardIssues3 from "./images/cardIssues3.png"
import card2Issues1 from "./images/card2Issues1.png"
import card2Isssues2 from "./images/card2Issues2.png"

function Issues() {
  return (
    <>
      <div className="wrapper-issues">
        <div className="issues-content">
            <h1 className="text1">¿Está tu hogar bajo amenaza?</h1>
            <p className="text2">¿Has notado alguna de estas señales en tu hogar?</p>
            <p className="text3">Las termitas son una amenaza invisible, pero destructiva, que puede causar daños irreparables en tu hogar.</p>
        </div>
        
        <div className="galery-issues">
            <div className="row-issues-1">
              <img className="card-issues1" src={cardIssues1}/>
              <img className="card-issues2" src={cardIssues2}/>
              <img className="card-issues3" src={cardIssues3}/>
            </div>

            <div className="row-issues-2">
              <img className="card2-issues1" src={card2Issues1}/>
              <img className="card2-issues2" src={card2Isssues2}/>
              <img className="card2-issues3" src={card2Isssues3}/>
            </div>
        </div>
      </div>
    </>
  );
}

export default Issues;

