import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import { books } from "../data/books.js";


function Home() {

    const [bookState, setBookState] = useState(books);
    //isnt setBookState is for chaning on the books by user? i think this is not needed here !
   const navigate = useNavigate();
    return (
         <div>
        <h1>Explore thousands of books — borrow, buy, or exchange.</h1>
                <div className="grid">
                 {bookState.map(b => (
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
