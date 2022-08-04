import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Downloads from "./components/Downloads";
import Members from "./components/Members";
import {FaGithub} from "react-icons/fa";

function App() {
  return (
    <div>
      <AnimatedBackground/>
      <Header/>
      <div className="members-container">
        <div className="og-nuts">
          <span>OG</span>
          <h1>NUTS</h1>
        </div>
        <Members/>
      </div>
      <Downloads/>
      <a className="copy" href="https://github.com/MDBossss"><FaGithub/> MDBoss</a>
    </div>

  );
}

export default App;
