import { useEffect, useState } from "react";
import API from "../services/api";

function Equipment() {

  const [equipment, setEquipment] = useState([]);

  const [formData, setFormData] = useState({
    equipmentName: "",
    equipmentType: "",
    status: "",
    zone: ""
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadEquipment();
  }, []);

  const loadEquipment = () => {
    API.get("/equipment")
      .then((res) => setEquipment(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addEquipment = () => {
    API.post("/equipment", formData)
      .then(() => {
        alert("Equipment Added Successfully");

        loadEquipment();

        setFormData({
          equipmentName: "",
          equipmentType: "",
          status: "",
          zone: ""
        });

      })
      .catch((err) => console.log(err));
  };

  const editEquipment = (item) => {

    setEditing(true);

    setEditingId(item.equipmentId);

    setFormData({
      equipmentName: item.equipmentName,
      equipmentType: item.equipmentType,
      status: item.status,
      zone: item.zone
    });

  };

  const updateEquipment = () => {

    API.put(`/equipment/${editingId}`, formData)
      .then(() => {

        alert("Equipment Updated Successfully");

        loadEquipment();

        setEditing(false);

        setEditingId(null);

        setFormData({
          equipmentName: "",
          equipmentType: "",
          status: "",
          zone: ""
        });

      });

  };

  const deleteEquipment = (id) => {

    if (window.confirm("Delete Equipment?")) {

      API.delete(`/equipment/${id}`)
        .then(() => {

          alert("Equipment Deleted");

          loadEquipment();

        });

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Equipment Management</h2>

      <div className="card p-4 mb-4">

        <div className="row">

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Equipment Name"
              name="equipmentName"
              value={formData.equipmentName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Equipment Type"
              name="equipmentType"
              value={formData.equipmentType}
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

          <div className="col-md-3 mb-3">
            <input
              className="form-control"
              placeholder="Zone"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
            />
          </div>

        </div>

        {
          editing ? (

            <button
              className="btn btn-success"
              onClick={updateEquipment}
            >
              Update Equipment
            </button>

          ) : (

            <button
              className="btn btn-primary"
              onClick={addEquipment}
            >
              Add Equipment
            </button>

          )
        }

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Zone</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {
            equipment.map((item) => (

              <tr key={item.equipmentId}>

                <td>{item.equipmentId}</td>

                <td>{item.equipmentName}</td>

                <td>{item.equipmentType}</td>

                <td>{item.status}</td>

                <td>{item.zone}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editEquipment(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEquipment(item.equipmentId)}
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

export default Equipment;