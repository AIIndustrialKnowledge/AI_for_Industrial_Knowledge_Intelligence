import React from "react";

function Incidents() {
  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Incidents Management</h2>

        <button className="btn btn-primary">
          + Report Incident
        </button>
      </div>

      <table className="table table-bordered table-hover table-striped">

        <thead className="table-dark">

          <tr>
            <th>ID</th>
            <th>Incident</th>
            <th>Worker</th>
            <th>Zone</th>
            <th>Date</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Gas Leakage</td>
            <td>Ranga</td>
            <td>Zone A</td>
            <td>02-07-2026</td>
            <td>
              <span className="badge bg-danger">High</span>
            </td>
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
            <td>Rahul</td>
            <td>Zone C</td>
            <td>01-07-2026</td>
            <td>
              <span className="badge bg-warning text-dark">
                Medium
              </span>
            </td>
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
            <td>Machine Failure</td>
            <td>Hemanth</td>
            <td>Zone B</td>
            <td>30-06-2026</td>
            <td>
              <span className="badge bg-danger">
                Critical
              </span>
            </td>
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

export default Incidents;