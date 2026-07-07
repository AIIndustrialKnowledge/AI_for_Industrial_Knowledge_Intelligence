import { useState } from "react";

function RiskPrediction() {

  const [result, setResult] = useState("");

  const predictRisk = () => {

    const risks = ["LOW", "MEDIUM", "HIGH"];

    const randomRisk = risks[Math.floor(Math.random() * risks.length)];

    setResult(randomRisk);

  };

  return (

    <div className="container mt-4">

      <h2>Risk Prediction</h2>

      <button
        className="btn btn-danger"
        onClick={predictRisk}
      >
        Predict Risk
      </button>

      {result && (

        <div className="alert alert-warning mt-4">

          Predicted Risk Level :
          <strong> {result}</strong>

        </div>

      )}

    </div>

  );

}

export default RiskPrediction;