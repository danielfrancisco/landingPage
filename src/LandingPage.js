import Home from "./Home"
import Interaction from "./Interaction";
import Issues from "./Issues";
import NavBar from "./navBar";
import Cita from "./cita";
import Impact from "./Impact";
import Solution from "./Solution";
import Phases from "./phases";
import Service from "./Service";
import AdditionalServices from "./additionalServices";
import SectionForm from "./SectionForm";
import Prevention from "./prevention";
import Faqs from "./faqs";
import "./styles/home.scss"

function App() {
  return (
    <>
      <div className="landing-page">
      <NavBar/>
      <Home/>
      <Interaction/>
      <Issues/>
      <Cita/>
      <Impact/>
      <Solution/>
      <Phases/>
      <Service/>
      <AdditionalServices/>
      <SectionForm/>
      <Prevention/>
      <Faqs/>
      </div>
    </>
  );
}

export default App;

