 import React from "react";
import "../Styles/AdminComplaints.css";

function AdminComplaints() {
  const rows = [
    { id: 101, from: "Alice", title: "Late delivery", desc: "Book arrived 3 days late.", priority: "High", status: "Open" },
    { id: 102, from: "Omar",  title: "Damaged cover", desc: "Cover bent at the corner.", priority: "Medium", status: "In-review" },
    { id: 103, from: "Sara",  title: "Wrong edition", desc: "Received 2nd ed instead of 3rd.", priority: "High", status: "Resolved" },
    { id: 104, from: "Yazan", title: "No response",  desc: "Owner is not replying.",        priority: "Low",  status: "Open" },
    { id: 105, from: "Lina",  title: "Price mismatch",desc: "Price different than post.",    priority: "Medium", status: "Open" },
  ];

  return (
    <main className="adm-page">
      <div className="adm-header">
        <h4 className="adm-welcome">Welcome to Admin Dashboard</h4>
        <h2 className="adm-title">Complaint Page</h2>
      </div>

      <div className="adm-tablewrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>From</th>
              <th>Title/Sub</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.from}</td>
                <td>{r.title}</td>
                <td className="desc">{r.desc}</td>
                <td>{r.priority}</td>
                <td>{r.status}</td>
                <td className="actions">
                   <button className="btn">Resolve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminComplaints;
