import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Downloads from "./components/Downloads";
import Members from "./components/Members";
import JoinUs from "./components/JoinUs";
import Stats from "./components/Stats";
import Gameplay from "./components/Gameplay";
import Footer from "./components/Footer";

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
      <JoinUs/>
      <Stats/>
      <Gameplay/>
      <Footer/>
    </div>

  );
}

export default App;
