import { useEffect, useState } from "react";
import API from "../services/api";

function Alerts() {

  const [alerts, setAlerts] = useState([]);

  const [formData, setFormData] = useState({
    alertType: "",
    severity: "",
    message: "",
    status: ""
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = () => {
    API.get("/alerts")
      .then((res) => setAlerts(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addAlert = () => {
    API.post("/alerts", formData)
      .then(() => {

        alert("Alert Added Successfully");

        loadAlerts();

        setFormData({
          alertType: "",
          severity: "",
          message: "",
          status: ""
        });

      });
  };

  const editAlert = (alert) => {

    setEditing(true);

    setEditingId(alert.alertId);

    setFormData({
      alertType: alert.alertType,
      severity: alert.severity,
      message: alert.message,
      status: alert.status
    });

  };

  const updateAlert = () => {

    API.put(`/alerts/${editingId}`, formData)
      .then(() => {

        alert("Alert Updated Successfully");

        loadAlerts();

        setEditing(false);

        setEditingId(null);

      });

  };

  const deleteAlert = (id) => {

    if (window.confirm("Delete Alert?")) {

      API.delete(`/alerts/${id}`)
        .then(() => {

          alert("Alert Deleted");

          loadAlerts();

        });

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Alerts Management</h2>

      <div className="card p-4 mb-4">

        <div className="row">

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Alert Type"
              name="alertType"
              value={formData.alertType}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>

        </div>

        {

          editing ?

          <button
            className="btn btn-success"
            onClick={updateAlert}
          >
            Update Alert
          </button>

          :

          <button
            className="btn btn-primary"
            onClick={addAlert}
          >
            Add Alert
          </button>

        }

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>

            <th>ID</th>
            <th>Alert Type</th>
            <th>Severity</th>
            <th>Message</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {

            alerts.map((alert) => (

              <tr key={alert.alertId}>

                <td>{alert.alertId}</td>

                <td>{alert.alertType}</td>

                <td>{alert.severity}</td>

                <td>{alert.message}</td>

                <td>{alert.status}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editAlert(alert)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteAlert(alert.alertId)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default Alerts;