import { Routes, Route } from "react-router-dom";
import "./App.css";
import SplahScreen from "./Components/SplashScreen";
import Welcome from "./Pages/Welcome";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import DriverTaskCard from "./Components/DriverTaskCard";
import DescriptionCard from "./Components/DescriptionCard";
import VehicleCard from "./Components/VehicleCard";
import MapCard from "./Components/MapCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplahScreen />} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/driver-task-card" element={<DriverTaskCard/>}/>
        <Route path="/description-card" element={<DescriptionCard/>}/>
        <Route path="/vehicle-card" element={<VehicleCard/>}/>
        <Route path="/map-card" element={<MapCard/>}/>
      </Routes>

    </div>
  );
}

export default App;
