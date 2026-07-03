import React from "react";

function Equipment() {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Equipment Management</h2>

        <button className="btn btn-primary">
          + Add Equipment
        </button>
      </div>

      <table className="table table-bordered table-striped table-hover">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Equipment Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Status</th>
            <th>Last Maintenance</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Boiler</td>
            <td>Heating</td>
            <td>Plant A</td>
            <td>
              <span className="badge bg-success">
                Running
              </span>
            </td>
            <td>20-06-2026</td>
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
            <td>Generator</td>
            <td>Power</td>
            <td>Plant B</td>
            <td>
              <span className="badge bg-warning text-dark">
                Maintenance
              </span>
            </td>
            <td>15-06-2026</td>
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
            <td>Compressor</td>
            <td>Air System</td>
            <td>Plant C</td>
            <td>
              <span className="badge bg-success">
                Running
              </span>
            </td>
            <td>10-06-2026</td>
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
            <td>Cooling Pump</td>
            <td>Cooling</td>
            <td>Plant D</td>
            <td>
              <span className="badge bg-danger">
                Stopped
              </span>
            </td>
            <td>05-06-2026</td>
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

export default Equipment;