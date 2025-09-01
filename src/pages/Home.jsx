import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import { books } from "../data/books.js";
import "../Styles/Home.css";


function Home() {

const navigate = useNavigate();

  return (
    <main className="home-page">
      <div className="home-container">
        <h1 className="home-title">
          Explore thousands of books — borrow, buy, or exchange.
        </h1>

        <div className="home-toolbar">
          <label htmlFor="filter" className="filter-label">Filter by</label>
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
            <div className="book-grid-item" key={b.id}>
              <BookCard {...b} />
            </div>
          ))}
        </section>
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
