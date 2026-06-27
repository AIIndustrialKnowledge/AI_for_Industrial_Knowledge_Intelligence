import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#374151",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li><Link to="/" style={{ color: "white" }}>Dashboard</Link></li>

        <li><Link to="/users" style={{ color: "white" }}>Users</Link></li>

        <li><Link to="/workers" style={{ color: "white" }}>Workers</Link></li>

        <li><Link to="/sensors" style={{ color: "white" }}>Sensors</Link></li>

        <li><Link to="/equipment" style={{ color: "white" }}>Equipment</Link></li>

        <li><Link to="/zones" style={{ color: "white" }}>Plant Zones</Link></li>

        <li><Link to="/alerts" style={{ color: "white" }}>Alerts</Link></li>

        <li><Link to="/incidents" style={{ color: "white" }}>Incidents</Link></li>

        <li><Link to="/risk" style={{ color: "white" }}>Risk Prediction</Link></li>

      </ul>
    </div>
  );
}

export default Sidebar;