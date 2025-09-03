import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell,} from "recharts";
import "../Styles/AdminStatistic.css";

function AdminStatistic() {
  // we should do statistics on data when we bring it from the API
  const usersData = [
    { week: "Week 1", users: 15 },
    { week: "Week 2", users: 22 },
    { week: "Week 3", users: 18 },
    { week: "Week 4", users: 35 },
    { week: "Week 5", users: 32 },
  ];

  const booksData = [
    { name: "To Borrow", value: 70 },
    { name: "To Sell", value: 30 },
  ];



  const COLORS = ["#d4c88c", "#f39ab2"];

  const activeUsers = [
    { id: 1, listed: 5, borrowed: 2 },
    { id: 2, listed: 8, borrowed: 4 },
    { id: 3, listed: 3, borrowed: 6 },
  ];

  return (
    <section className="admin-analysis">
      <h3>Analysis</h3>
      <div className="analysis-grid">



         <div className="analysis-box"> {/*Line */}
          <LineChart width={220} height={160} data={usersData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" hide />
            <YAxis hide />
            <Tooltip /> {/* this tool provide the info about the data i am pointing to */}
            <Line type="monotone" dataKey="users" stroke="#f39ab2" strokeWidth={2} />
          </LineChart>
          <p>New Users per Week</p>
        </div>




        <div className="analysis-box">{/*Pie chart */}
          <PieChart width={200} height={160}>
            <Pie data={booksData} dataKey="value" nameKey="name" outerRadius={60}> {/*HERE ! */}
              {booksData.map((entry, idx) => (
                <Cell key={idx} fill={COLORS[idx]} />
              ))}
            </Pie>
            
            <Tooltip />
          </PieChart>
          <p>Books by Mode</p>
        </div>

           




        <div className="analysis-box">{/*Table */}
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Books Listed</th>
                <th>Books Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td> {/*tr : row td :data */}
                  <td>{u.listed}</td>
                  <td>{u.borrowed}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Most Active Users</p>
        </div>
      </div>
    </section>
  );
}
export default AdminStatistic;