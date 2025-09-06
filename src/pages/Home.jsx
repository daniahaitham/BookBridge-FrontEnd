import { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import AdminStatistic from "../components/AdminStatistic.jsx";
import AdminComplaints from "./AdminComplaints.jsx";
import "../Styles/Home.css";


function Home() {
const BASE = "http://localhost:5000";
const [books, setBooks] = useState([]);

 const navigate = useNavigate(); 

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE}/api/books/all`);

        if (!res.ok) 
        throw new Error(`HTTP ${res.status}`);

        const j = await res.json();//from strings to JSON
        const rows = Array.isArray(j) ? j : (j.books || []);
          setBooks(j.books || []);//the empty one for safty if reciving undefined  
            } catch (e) {
         console.error("Failed to load books:", e);
          setBooks([]); //keep it as array even when eeror
         }
    })();
  }, []);






//ADMIN WORK 
const [user, setUser] = useState(null);

      useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
      }, []);
      const isAdmin = user?.is_admin === true;



  return (
    <main className="home-page">
      <div className="home-container">
        <h1 className="home-title">
          Explore thousands of books — borrow, buy, or exchange.
        </h1>

        <div className="home-toolbar">
          <label htmlFor="filter" className="filter-label">Filter by</label>


          {/*dropdown list*/}
          <select id="filter" className="filter-select" defaultValue="">
            <option value="" disabled>—</option>
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="price_low">Price: Low → High</option>
            <option value="price_high">Price: High → Low</option>
          </select>
        </div>

          <section className="book-grid">
            {books.map((b) => (
              <div key={b.id} className="book-grid-item">
                <BookCard {...b} />
              </div>
            ))}
          </section>







      {isAdmin && ( //this is the if jsx sysntax , it cheack the admin if truthy it somplte, if false (&&) this thing retrun false 
       <> 
           <AdminStatistic books={books} /> 
            <div style={{ marginTop: 16 }}>
            <AdminComplaints />
             </div>
       </>
      )}
  


    

      {!isAdmin && (
        <button
            className="complaint-btn"
            onClick={() => navigate("/Complaints")}
        >
            + Add your Complaint for Admins
        </button>
      )}
       </div>
    </main>
  );
}
export default Home;
