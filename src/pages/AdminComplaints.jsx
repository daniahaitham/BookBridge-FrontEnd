import { useEffect, useState } from "react";

function AdminComplaints() {
    
    //ADD handle loading and erros 
  const [complaint, setComplaint] = useState([
    { id: 1, from: "Dana", title: "Late delivery", description: "Book arrived late", priority: "Low", status: "Open" },
    { id: 2, from: "Omar", title: "Wrong book", description: "Received wrong title", priority: "High", status: "Open" },
    { id: 3, from: "Sara", title: "Damaged cover", description: "Cover torn", priority: "Medium", status: "In Progress" },
  ]);

  return (
    <section>
      <h2>Complaint Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.from}</td>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.priority}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default AdminComplaints;