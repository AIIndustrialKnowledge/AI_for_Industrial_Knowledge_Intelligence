import { useState } from "react";
import API from "../services/api";

function RiskPrediction() {

    const [prediction, setPrediction] = useState(null);

    const predictRisk = () => {

        API.get("/risk-predictions")

            .then((res) => {

                if (res.data.length > 0) {

                    setPrediction(res.data[0]);

                } else {

                    alert("No Risk Prediction Data Found");

                }

            })

            .catch((err) => {

                console.log(err);

                alert("Unable to Fetch Prediction");

            });

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

            {

                prediction && (

                    <div className="card mt-4 p-4">

                        <h4>

                            Risk Score :
                            {prediction.riskScore}

                        </h4>

                        <h4>

                            Risk Level :
                            {prediction.riskLevel}

                        </h4>

                        <h4>

                            Recommendation :

                        </h4>

                        <p>

                            {prediction.recommendation}

                        </p>

                        <h5>

                            Alert Generated :

                            {

                                prediction.alertGenerated

                                    ?

                                    " YES"

                                    :

                                    " NO"

                            }

                        </h5>

                    </div>

                )

            }

        </div>

    );

}

export default RiskPrediction;