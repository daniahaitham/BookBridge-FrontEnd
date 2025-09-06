import React from "react";
import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell,
  ResponsiveContainer, LabelList, Legend
} from "recharts";
import "../Styles/AdminStatistic.css";

const BASE = "http://localhost:5000";

function AdminStatistic({ books }) {
// we should do statistics on data when we bring it from the API
const COLORS = ["#d4c88c", "#f39ab2"];
const [complaints, setComplaints] = useState([]); //TABLE AND LINE 


//--------------------PIEWORK : bookk type ------------------
// to count by type 
 const typeCounts  = { sell: 0, exchange: 0 };
  for (const b of books || []) {
    
    //a problem in strings names !!!!!
    const cat = String(b.category || "").trim() //check the string how it is written
    if (cat === "sell") 
      typeCounts .sell++;
    else if (cat === "exchange") 
      typeCounts .exchange++;
   }


  const booksByType = [
    { name: "sell", value: typeCounts .sell },
    { name: "exchange", value: typeCounts .exchange }
  ].filter(d => d.value > 0);//if zero counter remove 


//------bar work : priority of comaplaints------------------
  useEffect(() => {
    (async () => {
      try {

         const res = await fetch(`${BASE}/api/complaints`);
        if (!res.ok) 
          throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setComplaints(Array.isArray(json.complaints) ? json.complaints : []);
      } catch (e) {
        setComplaints([]);
      } 
    })();
  }, []);


  const priorities  = { high: 0, medium: 0, low:0 };
  for (const c of complaints || []) {
    
    //a problem in strings names !!!!!
    const p = String(c.priority  || "").trim() //check the string how it is written
    if (p === "high") 
      priorities.high++;
    else if (p === "medium") 
      priorities.medium++;
    else if (p === "low") 
      priorities.low++;

   }


  const prioritiestotals = [
    { type: "high", count: priorities.high },
    { type: "medium", count: priorities.medium },
    { type: "low", count: priorities.low }

  ].filter(d => d.count > 0);//if zero counter remove 


//--------------book availabilty ------------------

 const availabilityCounts  = { isAvailable: 0, notAvailable: 0 };
  for (const b of books || []) {
    
    
     if (b.availability  === true) availabilityCounts.isAvailable++;
    else if (b.availability === false) availabilityCounts.notAvailable++;
   }


  const availabetytotals = [
    { name: "isAvailable", value: availabilityCounts.isAvailable },
    { name: "notAvailable", value: availabilityCounts.notAvailable }
  ].filter(d => d.value > 0);//if zero counter remove 



 

  return (
    <section className="admin-analysis">
      <h3>Analysis</h3>
      <div className="analysis-grid">

    
       <div className="analysis-box">{/*Pie chart */}
          <PieChart width={200} height={160}>
            <Pie data={booksByType} dataKey="value" nameKey="name" outerRadius={60}  animationDuration={7000}  >
              {booksByType.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />{/* this tool provide the info about the data i am pointing to */}
          </PieChart>
          <p>Books by type</p>
        </div>



        <BarChart width={260} height={180} data={availabetytotals}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" animationDuration={7000} fill="#f39ab2" />
            </BarChart>           




      <div className="analysis-box">{/*Pie chart */}
            <PieChart width={200} height={160}>
              <Pie data={availabetytotals} dataKey="value" nameKey="name" outerRadius={60} animationDuration={7000}>
                {availabetytotals.map((_, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />{/* this tool provide the info about the data i am pointing to */}
            </PieChart>
            <p>Availability of books offred </p>
          </div>


 

      </div>
    </section>
  );
}
export default AdminStatistic;