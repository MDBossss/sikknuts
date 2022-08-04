import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import Downloads from "./components/Downloads";
import Members from "./components/Members";

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
      <div className="downloads-container">
        <h1>DOWNLOADS</h1>
        <Downloads/>
      </div>
    </div>

  );
}

export default App;
