import React from "react";

function Workers() {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Workers Management</h2>

        <button className="btn btn-primary">
          + Add Worker
        </button>
      </div>

      <table className="table table-bordered table-striped table-hover">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Shift</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Ranga</td>
            <td>Production</td>
            <td>Morning</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
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
            <td>Hemanth</td>
            <td>Maintenance</td>
            <td>Night</td>
            <td>
              <span className="badge bg-warning text-dark">
                On Leave
              </span>
            </td>
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
            <td>Rahul</td>
            <td>Quality</td>
            <td>Evening</td>
            <td>
              <span className="badge bg-success">Active</span>
            </td>
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
            <td>4</td>
            <td>Arjun</td>
            <td>Packaging</td>
            <td>Morning</td>
            <td>
              <span className="badge bg-danger">Absent</span>
            </td>
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

export default Workers;