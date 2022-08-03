import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import DownloadLinks from "./components/DownloadLinks";
import Members from "./components/Members";

function App() {
  return (
    <div>
      <AnimatedBackground/>
      <Header/>
      <div className="members-title">
        <h1>OG NUTS</h1>
      </div>
      <Members/>
      <div className="downloads-title">
        <h1>DOWNLOADS</h1>
      </div>
      <DownloadLinks/>
    </div>

  );
}

export default App;
