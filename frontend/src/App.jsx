import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Workers from "./pages/Workers";
import Sensors from "./pages/Sensors";
import Equipment from "./pages/Equipment";
import PlantZones from "./pages/PlantZones";
import Alerts from "./pages/Alerts";
import Incidents from "./pages/Incidents";
import RiskPrediction from "./pages/RiskPrediction";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-container">

        <Sidebar />

        <div className="content">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/users" element={<Users />} />

            <Route path="/workers" element={<Workers />} />

            <Route path="/sensors" element={<Sensors />} />

            <Route path="/equipment" element={<Equipment />} />

            <Route path="/zones" element={<PlantZones />} />

            <Route path="/alerts" element={<Alerts />} />

            <Route path="/incidents" element={<Incidents />} />

            <Route path="/risk" element={<RiskPrediction />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;