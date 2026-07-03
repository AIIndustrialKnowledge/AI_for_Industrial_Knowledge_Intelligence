import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1 className="dashboard-title">
        Industrial Safety Dashboard
      </h1>

      <div className="cards">

        <div className="card workers">
          <h3>Total Workers</h3>
          <h2>120</h2>
        </div>

        <div className="card sensors">
          <h3>Active Sensors</h3>
          <h2>35</h2>
        </div>

        <div className="card equipment">
          <h3>Equipment</h3>
          <h2>18</h2>
        </div>

        <div className="card alerts">
          <h3>Critical Alerts</h3>
          <h2>4</h2>
        </div>

      </div>

      <div className="tables">

        <div className="table-card">

          <h3>Recent Alerts</h3>

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Alert</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Gas Leakage</td>
                <td>Critical</td>
              </tr>

              <tr>
                <td>2</td>
                <td>High Temperature</td>
                <td>Warning</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="table-card">

          <h3>Equipment Status</h3>

          <table>

            <thead>

              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Boiler</td>
                <td>Running</td>
              </tr>

              <tr>
                <td>Generator</td>
                <td>Maintenance</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;