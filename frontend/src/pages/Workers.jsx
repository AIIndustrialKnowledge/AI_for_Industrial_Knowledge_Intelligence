import { useEffect, useState } from "react";
import API from "../services/api";

function Workers() {

  const [workers, setWorkers] = useState([]);

  const [formData, setFormData] = useState({
    workerName: "",
    department: "",
    shift: "",
    location: "",
    helmetWorn: false
  });

  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadWorkers();
  }, []);

  const loadWorkers = () => {
    API.get("/workers")
      .then((res) => setWorkers(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };

  const addWorker = () => {

    API.post("/workers", formData)
      .then(() => {

        alert("Worker Added Successfully");

        loadWorkers();

        setFormData({
          workerName: "",
          department: "",
          shift: "",
          location: "",
          helmetWorn: false
        });

      });

  };

  const editWorker = (worker) => {

    setEditing(true);

    setEditingId(worker.workerId);

    setFormData(worker);

  };

  const updateWorker = () => {

    API.put(`/workers/${editingId}`, formData)
      .then(() => {

        alert("Worker Updated Successfully");

        loadWorkers();

        setEditing(false);

        setEditingId(null);

        setFormData({
          workerName: "",
          department: "",
          shift: "",
          location: "",
          helmetWorn: false
        });

      });

  };

  const deleteWorker = (id) => {

    if (window.confirm("Delete Worker?")) {

      API.delete(`/workers/${id}`)
        .then(() => {

          alert("Worker Deleted");

          loadWorkers();

        });

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Workers Management</h2>

      <div className="card p-4 mb-4">

        <div className="row">

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Worker Name"
              name="workerName"
              value={formData.workerName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4 mb-3">
            <input
              className="form-control"
              placeholder="Shift"
              name="shift"
              value={formData.shift}
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

          <div className="col-md-4 mb-3">

            <label>

              <input
                type="checkbox"
                name="helmetWorn"
                checked={formData.helmetWorn}
                onChange={handleChange}
              />

              Helmet Worn

            </label>

          </div>

        </div>

        {

          editing ?

          <button
            className="btn btn-success"
            onClick={updateWorker}
          >
            Update Worker
          </button>

          :

          <button
            className="btn btn-primary"
            onClick={addWorker}
          >
            Add Worker
          </button>

        }

      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Shift</th>
            <th>Location</th>
            <th>Helmet</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {

            workers.map((worker) => (

              <tr key={worker.workerId}>

                <td>{worker.workerId}</td>

                <td>{worker.workerName}</td>

                <td>{worker.department}</td>

                <td>{worker.shift}</td>

                <td>{worker.location}</td>

                <td>{worker.helmetWorn ? "Yes" : "No"}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editWorker(worker)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteWorker(worker.workerId)}
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

export default Workers;