import { useEffect, useState } from "react";
import API from "../services/api";
import { Bar, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);



function Dashboard() {

  const [workers, setWorkers] = useState(0);
  const [sensors, setSensors] = useState(0);
  const [equipment, setEquipment] = useState(0);
  const [alerts, setAlerts] = useState(0);
  const [incidents, setIncidents] = useState(0);

  useEffect(() => {

    API.get("/workers")
      .then(res => setWorkers(res.data.length))
      .catch(err => console.log(err));

    API.get("/sensors")
      .then(res => setSensors(res.data.length))
      .catch(err => console.log(err));

    API.get("/equipment")
      .then(res => setEquipment(res.data.length))
      .catch(err => console.log(err));

    API.get("/alerts")
      .then(res => setAlerts(res.data.length))
      .catch(err => console.log(err));

    API.get("/incidents")
      .then(res => setIncidents(res.data.length))
      .catch(err => console.log(err));

  }, []);
  const pieData = {
  labels: [
    "Workers",
    "Sensors",
    "Equipment",
    "Alerts",
    "Incidents"
  ],
  datasets: [
    {
      data: [
        workers,
        sensors,
        equipment,
        alerts,
        incidents
      ]
    }
  ]
};
  const chartData = {
  labels: [
    "Workers",
    "Sensors",
    "Equipment",
    "Alerts",
    "Incidents"
  ],
  datasets: [
    {
      label: "Industrial Data",
      data: [
        workers,
        sensors,
        equipment,
        alerts,
        incidents
      ]
    }
  ]
};

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Industrial Dashboard</h2>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div className="card bg-primary text-white">

            <div className="card-body">

              <h5>Total Workers</h5>

              <h2>{workers}</h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card bg-success text-white">

            <div className="card-body">

              <h5>Active Sensors</h5>

              <h2>{sensors}</h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div className="card bg-warning text-dark">

            <div className="card-body">

              <h5>Total Equipment</h5>

              <h2>{equipment}</h2>

            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card bg-danger text-white">

            <div className="card-body">

              <h5>Total Alerts</h5>

              <h2>{alerts}</h2>

            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card bg-secondary text-white">

            <div className="card-body">

              <h5>Total Incidents</h5>

              <h2>{incidents}</h2>

            </div>

          </div>

        </div>

      </div>
        <div className="row mt-4">

    <div className="col-md-7">

        <div className="card p-4">

            <h4 className="mb-3">
                Industrial Statistics
            </h4>

            <Bar data={chartData} />

        </div>

    </div>

    <div className="col-md-5">

        <div className="card p-4">

            <h4 className="mb-3">
                Distribution
            </h4>

            <Pie data={pieData} />

        </div>

    </div>

</div>

    </div>

  );

}

export default Dashboard;