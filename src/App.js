import { Routes, Route } from "react-router-dom";
import "./App.css";
import SplahScreen from "./Components/SplashScreen";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplahScreen />} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>

    </div>
  );
}

export default App;
