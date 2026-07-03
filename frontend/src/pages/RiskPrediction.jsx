import React, { useState } from "react";

function RiskPrediction() {

  const [risk, setRisk] = useState("");

  const predictRisk = () => {

    const temperature = Number(document.getElementById("temperature").value);
    const gas = Number(document.getElementById("gas").value);
    const pressure = Number(document.getElementById("pressure").value);
    const humidity = Number(document.getElementById("humidity").value);

    if (
      temperature > 70 ||
      gas > 200 ||
      pressure > 120 ||
      humidity > 80
    ) {
      setRisk("HIGH RISK");
    }
    else if (
      temperature > 50 ||
      gas > 120 ||
      pressure > 90
    ) {
      setRisk("MEDIUM RISK");
    }
    else {
      setRisk("LOW RISK");
    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        AI Risk Prediction
      </h2>

      <div className="card p-4 shadow">

        <div className="row">

          <div className="col-md-6 mb-3">

            <label className="form-label">
              Temperature (°C)
            </label>

            <input
              id="temperature"
              type="number"
              className="form-control"
              placeholder="Enter Temperature"
            />

          </div>

          <div className="col-md-6 mb-3">

            <label className="form-label">
              Gas Level (PPM)
            </label>

            <input
              id="gas"
              type="number"
              className="form-control"
              placeholder="Enter Gas Level"
            />

          </div>

          <div className="col-md-6 mb-3">

            <label className="form-label">
              Pressure
            </label>

            <input
              id="pressure"
              type="number"
              className="form-control"
              placeholder="Enter Pressure"
            />

          </div>

          <div className="col-md-6 mb-3">

            <label className="form-label">
              Humidity
            </label>

            <input
              id="humidity"
              type="number"
              className="form-control"
              placeholder="Enter Humidity"
            />

          </div>

        </div>

        <button
          className="btn btn-danger mt-3"
          onClick={predictRisk}
        >
          Predict Risk
        </button>

      </div>

      {risk && (

        <div className="card mt-4 p-4 shadow">

          <h3>Prediction Result</h3>

          <h2
            className={
              risk === "HIGH RISK"
                ? "text-danger"
                : risk === "MEDIUM RISK"
                ? "text-warning"
                : "text-success"
            }
          >
            {risk}
          </h2>

          <hr />

          {risk === "HIGH RISK" && (

            <div>

              <h5>Recommendation</h5>

              <ul>

                <li>Evacuate the area immediately.</li>

                <li>Notify the Safety Officer.</li>

                <li>Stop all running equipment.</li>

                <li>Check Gas Sensors.</li>

              </ul>

            </div>

          )}

          {risk === "MEDIUM RISK" && (

            <div>

              <h5>Recommendation</h5>

              <ul>

                <li>Monitor Sensor Readings.</li>

                <li>Inspect Equipment.</li>

                <li>Keep Workers Alert.</li>

              </ul>

            </div>

          )}

          {risk === "LOW RISK" && (

            <div>

              <h5>Recommendation</h5>

              <ul>

                <li>Plant is Safe.</li>

                <li>Continue Monitoring.</li>

              </ul>

            </div>

          )}

        </div>

      )}

    </div>

  );
}

export default RiskPrediction;