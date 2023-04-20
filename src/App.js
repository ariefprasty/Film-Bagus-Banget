import "./App.css";
import NavigationBar from "./Component/NavBar";
import Intro from "./Component/Intro";
import "./Style/landingpage.css";
function App() {
  return (
    <div>
      {/* Intro start */}
      <div className="myBG border">
        <NavigationBar />
        <Intro />
      </div>
      {/* Intro End */}
    </div>
  );
}

export default App;
