import { useEffect, useState } from "react";
import API from "../services/api";

function Incidents() {

  const [incidents, setIncidents] = useState([]);

  const [formData, setFormData] = useState({
    incidentType: "",
    severity: "",
    location: "",
    description: "",
    status: ""
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadIncidents();
  }, []);

  const loadIncidents = () => {
    API.get("/incidents")
      .then((res) => setIncidents(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addIncident = () => {

    API.post("/incidents", formData)
      .then(() => {

        alert("Incident Added Successfully");

        loadIncidents();

        setFormData({
          incidentType: "",
          severity: "",
          location: "",
          description: "",
          status: ""
        });

      });

  };

  const editIncident = (incident) => {

    setEditing(true);

    setEditingId(incident.incidentId);

    setFormData({
      incidentType: incident.incidentType,
      severity: incident.severity,
      location: incident.location,
      description: incident.description,
      status: incident.status
    });

  };

  const updateIncident = () => {

    API.put(`/incidents/${editingId}`, formData)
      .then(() => {

        alert("Incident Updated Successfully");

        loadIncidents();

        setEditing(false);

        setEditingId(null);

        setFormData({
          incidentType: "",
          severity: "",
          location: "",
          description: "",
          status: ""
        });

      });

  };

  const deleteIncident = (id) => {

    if (window.confirm("Delete Incident?")) {

      API.delete(`/incidents/${id}`)
        .then(() => {

          alert("Incident Deleted");

          loadIncidents();

        });

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Incident Management</h2>

      <div className="card p-4 mb-4">

        <div className="row">

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Incident Type"
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
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
            onClick={updateIncident}
          >
            Update Incident
          </button>

          :

          <button
            className="btn btn-primary"
            onClick={addIncident}
          >
            Add Incident
          </button>

        }

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>

            <th>ID</th>
            <th>Incident Type</th>
            <th>Severity</th>
            <th>Location</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {

            incidents.map((incident) => (

              <tr key={incident.incidentId}>

                <td>{incident.incidentId}</td>

                <td>{incident.incidentType}</td>

                <td>{incident.severity}</td>

                <td>{incident.location}</td>

                <td>{incident.description}</td>

                <td>{incident.status}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editIncident(incident)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteIncident(incident.incidentId)}
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

export default Incidents;