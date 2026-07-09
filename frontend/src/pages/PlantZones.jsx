import { useEffect, useState } from "react";
import API from "../services/api";

function PlantZones() {

  const [zones, setZones] = useState([]);

  const [formData, setFormData] = useState({
    zoneName: "",
    zoneType: "",
    riskLevel: "",
    status: "",
    description: ""
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadZones();
  }, []);

  const loadZones = () => {
    API.get("/zones")
      .then((res) => setZones(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addZone = () => {
    API.post("/zones", formData)
      .then(() => {

        alert("Zone Added Successfully");

        loadZones();

        setFormData({
          zoneName: "",
          zoneType: "",
          riskLevel: "",
          status: "",
          description: ""
        });

      });
  };

  const editZone = (zone) => {

    setEditing(true);

    setEditingId(zone.zoneId);

    setFormData({
      zoneName: zone.zoneName,
      zoneType: zone.zoneType,
      riskLevel: zone.riskLevel,
      status: zone.status,
      description: zone.description
    });

  };

  const updateZone = () => {

    API.put(`/zones/${editingId}`, formData)
      .then(() => {

        alert("Zone Updated Successfully");

        loadZones();

        setEditing(false);

        setEditingId(null);

      });

  };

  const deleteZone = (id) => {

    if (window.confirm("Delete Zone?")) {

      API.delete(`/zones/${id}`)
        .then(() => {

          alert("Zone Deleted");

          loadZones();

        });

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Plant Zones</h2>

      <div className="card p-4 mb-4">

        <div className="row">

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Zone Name"
              name="zoneName"
              value={formData.zoneName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Zone Type"
              name="zoneType"
              value={formData.zoneType}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Risk Level"
              name="riskLevel"
              value={formData.riskLevel}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-8 mb-3">
            <input
              className="form-control"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

        </div>

        {
          editing ? (
            <button
              className="btn btn-success"
              onClick={updateZone}
            >
              Update Zone
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={addZone}
            >
              Add Zone
            </button>
          )
        }

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Zone Name</th>
            <th>Zone Type</th>
            <th>Risk Level</th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {
            zones.map((zone) => (

              <tr key={zone.zoneId}>

                <td>{zone.zoneId}</td>
                <td>{zone.zoneName}</td>
                <td>{zone.zoneType}</td>
                <td>{zone.riskLevel}</td>
                <td>{zone.status}</td>
                <td>{zone.description}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editZone(zone)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteZone(zone.zoneId)}
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

export default PlantZones;