import React from "react";

function Sensors() {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Sensors Management</h2>

        <button className="btn btn-primary">
          + Add Sensor
        </button>
      </div>

      <table className="table table-bordered table-striped table-hover">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Sensor Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
            <th>Reading</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Temperature Sensor</td>
            <td>Temperature</td>
            <td>Zone A</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
            <td>35°C</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Gas Sensor</td>
            <td>Gas</td>
            <td>Zone B</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
            <td>210 ppm</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Pressure Sensor</td>
            <td>Pressure</td>
            <td>Zone C</td>
            <td>
              <span className="badge bg-danger">Inactive</span>
            </td>
            <td>0 PSI</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Sensors;