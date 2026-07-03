import React from "react";

function PlantZones() {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Plant Zones Management</h2>

        <button className="btn btn-primary">
          + Add Zone
        </button>
      </div>

      <table className="table table-bordered table-striped table-hover">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Zone Name</th>
            <th>Location</th>
            <th>Supervisor</th>
            <th>Risk Level</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Zone A</td>
            <td>Production Block</td>
            <td>Ranga</td>
            <td>
              <span className="badge bg-danger">High</span>
            </td>
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
            <td>Zone B</td>
            <td>Storage Area</td>
            <td>Hemanth</td>
            <td>
              <span className="badge bg-warning text-dark">
                Medium
              </span>
            </td>
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
            <td>3</td>
            <td>Zone C</td>
            <td>Maintenance</td>
            <td>Rahul</td>
            <td>
              <span className="badge bg-success">
                Low
              </span>
            </td>
            <td>
              <span className="badge bg-secondary">
                Under Maintenance
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
            <td>4</td>
            <td>Zone D</td>
            <td>Quality Check</td>
            <td>Arjun</td>
            <td>
              <span className="badge bg-danger">
                High
              </span>
            </td>
            <td>
              <span className="badge bg-success">
                Active
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

        </tbody>

      </table>

    </div>
  );
}

export default PlantZones;