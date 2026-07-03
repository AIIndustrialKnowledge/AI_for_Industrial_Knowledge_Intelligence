import React from "react";

function Alerts() {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Alerts Management</h2>

        <button className="btn btn-danger">
          + Create Alert
        </button>
      </div>

      <table className="table table-bordered table-hover table-striped">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Alert Type</th>
            <th>Zone</th>
            <th>Severity</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Gas Leakage</td>
            <td>Zone A</td>
            <td>
              <span className="badge bg-danger">Critical</span>
            </td>
            <td>02-07-2026</td>
            <td>
              <span className="badge bg-warning text-dark">Open</span>
            </td>
            <td>
              <button className="btn btn-success btn-sm me-2">
                Resolve
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>High Temperature</td>
            <td>Zone C</td>
            <td>
              <span className="badge bg-warning text-dark">
                Medium
              </span>
            </td>
            <td>01-07-2026</td>
            <td>
              <span className="badge bg-success">
                Closed
              </span>
            </td>
            <td>
              <button className="btn btn-primary btn-sm">
                View
              </button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Pressure Drop</td>
            <td>Zone B</td>
            <td>
              <span className="badge bg-info">
                Low
              </span>
            </td>
            <td>30-06-2026</td>
            <td>
              <span className="badge bg-warning text-dark">
                Open
              </span>
            </td>
            <td>
              <button className="btn btn-success btn-sm me-2">
                Resolve
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

export default Alerts;