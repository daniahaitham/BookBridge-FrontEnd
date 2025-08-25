import { useState } from "react";
import {link} from "react-router-dom";
import BookCard from "../components/BookCard.jsx";

const books = [
        { id: 1, title: "Book One", owner: "User A", type: "borrow" },
        { id: 2, title: "Book Two", owner: "User B", type: "buy" },
        { id: 3, title: "Book Three", owner: "User C", type: "exchange" },
    ];


function Home() {

    const navigate = useNavigate();

    //for checking staticly , this will be REMOVED.

    function toComplaint() {
         navigate("/complaints");
    }

    return (
        <>      
            <h1>Explore thousands of books — borrow, buy, or exchange.</h1>
            <div>
                {books.map((book) => (
                    <BookCard key={book.id} title={book.title} owner={book.owner} type={book.type} />
                ))}
            </div>

              <button onClick={toComplaint}>
                 + Add your Complaint for Admins
              </button> 
        </>
    );
}
