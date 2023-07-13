import { Routes, Route } from "react-router-dom";
import "./App.css";
import SplahScreen from "./Components/SplashScreen";
import Welcome from "./Pages/Welcome";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import DriverMainPage from "./Pages/DriverPages/DriverMainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplahScreen />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/driver-main" element={<DriverMainPage />} />
      </Routes>
    </div>
  );
}

export default App;
