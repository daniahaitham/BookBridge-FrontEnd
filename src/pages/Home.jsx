import { useState ,useEffect } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import "../Styles/Home.css";
import AdminStatistic from "../components/AdminStatistic.jsx";


function Home() {
const BASE = "http://localhost:5000";


//changes : 
const [books, setBooks] = useState([]);

const navigate = useNavigate();



  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE}/api/books/all`);


        if (!res.ok) 
        throw new Error(`HTTP ${res.status}`);

        const j = await res.json();//from strings to JSON
          setBooks(j.books || []);//the empty one for safty if reciving undefined  
            } catch (e) {
         console.error("Failed to load books:", e);     
         }
    })();
  }, []);



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

          <>{/*change on static data  */}</>

         

          {books.map((b) => (

            //it is for each book creating a new div 
            <div className="book-grid-item" > {/*HERE! from where id  */}
              <BookCard {...b} /> {/*passing the book props TO the card*/}
            </div>
          ))}
        </section>




       
        
         <AdminStatistic />
      </div>

    

      <button
        className="complaint-btn"
        onClick={() => navigate("/Complaints")}
      >
        + Add your Complaint for Admins
      </button>
       
    </main>
  );
}
export default Home;
