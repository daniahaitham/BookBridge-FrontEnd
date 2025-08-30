import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";


const books = [
     { id: 1, title: "Book One", owner: "User A", type: "borrow" },
       { id: 2, title: "Book Two", owner: "User B", type: "buy" },
       { id: 3, title: "Book Three", owner: "User C", type: "exchange" },
    ];


function Home() {

   const navigate = useNavigate();
    return (
         <div>
        <h1>Explore thousands of books — borrow, buy, or exchange.</h1>
                <div className="grid">
                 {books.map(b => (
               <BookCard key={b.id} {...b} />
               ))}
                 </div>
          

        
             <button onClick={() => navigate("/complaints")}>
             + Add your Complaint for Admins
            </button>
         </div>
    );
}

export default Home;
