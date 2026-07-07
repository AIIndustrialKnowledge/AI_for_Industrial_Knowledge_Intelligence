import { useEffect, useState } from "react";
import API from "../services/api";

function Sensors() {

  const [sensors, setSensors] = useState([]);

  const [formData, setFormData] = useState({
    sensorName: "",
    sensorType: "",
    zone: "",
    status: ""
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadSensors();
  }, []);

  const loadSensors = () => {
    API.get("/sensors")
      .then((res) => setSensors(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addSensor = () => {
    API.post("/sensors", formData)
      .then(() => {
        alert("Sensor Added Successfully");
        loadSensors();

        setFormData({
          sensorName: "",
          sensorType: "",
          zone: "",
          status: ""
        });

      })
      .catch((err) => console.log(err));
  };

  const editSensor = (sensor) => {

    setEditing(true);

    setEditingId(sensor.sensorId);

    setFormData({
      sensorName: sensor.sensorName,
      sensorType: sensor.sensorType,
      zone: sensor.zone,
      status: sensor.status
    });

  };

  const updateSensor = () => {

    API.put(`/sensors/${editingId}`, formData)
      .then(() => {

        alert("Sensor Updated Successfully");

        loadSensors();

        setEditing(false);

        setEditingId(null);

        setFormData({
          sensorName: "",
          sensorType: "",
          zone: "",
          status: ""
        });

      });

  };

  const deleteSensor = (id) => {

    if (window.confirm("Delete this Sensor?")) {

      API.delete(`/sensors/${id}`)
        .then(() => {

          alert("Sensor Deleted");

          loadSensors();

        });

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Sensors Management</h2>

      <div className="card p-4 mb-4">

        <div className="row">

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Sensor Name"
              name="sensorName"
              value={formData.sensorName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Sensor Type"
              name="sensorType"
              value={formData.sensorType}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Zone"
              name="zone"
              value={formData.zone}
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
          editing ? (

            <button
              className="btn btn-success"
              onClick={updateSensor}
            >
              Update Sensor
            </button>

          ) : (

            <button
              className="btn btn-primary"
              onClick={addSensor}
            >
              Add Sensor
            </button>

          )
        }

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>

            <th>ID</th>
            <th>Sensor Name</th>
            <th>Sensor Type</th>
            <th>Zone</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {
            sensors.map((sensor) => (

              <tr key={sensor.sensorId}>

                <td>{sensor.sensorId}</td>

                <td>{sensor.sensorName}</td>

                <td>{sensor.sensorType}</td>

                <td>{sensor.zone}</td>

                <td>{sensor.status}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editSensor(sensor)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteSensor(sensor.sensorId)}
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

export default Sensors;