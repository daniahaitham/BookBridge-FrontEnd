import React, { useState } from "react";
import BookCard from "../components/BookCard";
import "../Styles/Profile.css";
import book from "../assets/book.jpg";
import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";



function Profile() {
  const [profile, setProfile] = useState({ name:"", email:"", password:"", phone:"" });



  function onChange({ target:{name, value} }) {
    setProfile(p => ({ ...p, [name]: value }));
  }

  
  
  const offeredBooks = [
    {
      id: 4,
      title: "Clean Code",
      owner: "Me",
      exchangeType: "Sell",
      cover: book,
    },
    {
      id: 5,
      title: "Deep Learning",
      owner: "Me",
      exchangeType: "Exchange",
      cover: book1,
    }
  ];


   const gotBooks = [
    {
      id: 6,
      title: "Dune",
      owner: "Ali",
      exchangeType: "Borrowed",
        cover: book2,
    },
     {
      id: 7,
      title: "Dune",
      owner: "Ali",
      exchangeType: "Borrowed",
        cover: book3,
    }
  ];
  return (
    <main className="prof-page">
      <h2 className="prof-title">My Profile</h2>

        <div className="prof-fields">
          <div className="prof-field">{profile.name || "Name"}</div>
          <div className="prof-field">{profile.email || "Email"}</div>
          <div className="prof-field">{profile.password ? "••••••" : "Password"}</div>
          <div className="prof-field">{profile.phone || "Phone num"}</div>
        </div>


      <section className="prof-section">
        <h3 className="prof-heading">Books I offer</h3>
        <div className="prof-grid">
          {offeredBooks.map(b => <BookCard key={b.id} {...b} />)}
        </div>
      </section>

      <section className="prof-section">
        <h3 className="prof-heading">Books Got from Others</h3>
        <div className="prof-grid">
          {gotBooks.map(b => <BookCard key={b.id} {...b} />)}
        </div>
      </section>
    </main>
  );
}

export default Profile;
