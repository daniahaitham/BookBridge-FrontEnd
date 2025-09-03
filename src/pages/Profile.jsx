import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../Styles/Profile.css";
import book from "../assets/book.jpg";
import book1 from "../assets/book1.webp";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";


export default function Profile() {

  
   const accept = (id) => {
    setIncomingRequests(prev =>
      prev.map(r =>
        r.id === id ? { ...r, status: "accepted" } : r
      )
    );
  };

   const reject = (id) => {
    setIncomingRequests(prev =>
      prev.map(r =>
        r.id === id ? { ...r, status: "rejected" } : r
      )
    );
  };


   const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [offeredBooks] = useState([
    { id: 4, title: "Clean Code", owner: "Me", exchangeType: "Sell", cover: book },
    { id: 5, title: "Deep Learning", owner: "Me", exchangeType: "Exchange", cover: book1 },
  ]);


  const [gotBooks] = useState([
    { id: 6, title: "Dune", owner: "Ali", exchangeType: "Borrowed", cover: book2 },
    { id: 7, title: "Atomic Habits", owner: "Sara", exchangeType: "Borrowed", cover: book3 },
  ]);

  const MY_REQUESTS = [
  { id: 1, bookTitle: "The Pragmatic Programmer", requesterName: "Me",   status: "pending"  },
  { id: 2, bookTitle: "Design Patterns",          requesterName: "Me",   status: "accepted" },
];

const INCOMING_REQUESTS = [
  { id: 10, bookTitle: "Clean Code",    requesterName: "Ahmad Ali",   status: "pending"  },
  { id: 11, bookTitle: "Deep Learning", requesterName: "Sara Khalid", status: "rejected" },
];


  return (
    <main className="prof-page">
      <h2 className="prof-title">My Profile</h2>

      <div className="prof-fields">
        <div className="prof-field">{profile.name || "Name"}</div>
        <div className="prof-field">{profile.email || "Email"}</div>
        <div className="prof-field">
          {profile.password ? "••••••" : "Password"} {/*to not desplay password if esxsist */}
        </div>
        <div className="prof-field">{profile.phone || "Phone num"}</div>
      </div>


      

      {/* the books i offer  */}
      <section className="prof-section">
        <div className="prof-heading-row">
          <h3 className="prof-heading">Books I offer</h3>
          <Link className="prof-add-btn" to="/NewBook">+ add a book</Link>
        </div>

        <div className="prof-grid">
          {offeredBooks.map(b => ( <BookCard key={b.id} {...b} /> //Passing fields of book as prpos per each card 
          ))}
        </div>
      </section>


      {/* the books i offer  */} 

        <section className="prof-section">
          <h3 className="prof-heading">Books Got from Others</h3>
          <div className="prof-grid">
            {gotBooks.map(b => <BookCard key={b.id} {...b} />)}
          </div>
        </section>



         {/*REQUESTS TRACKING */}
        {/* my requests */}
          <section className="prof-section">
            <h3 className="prof-heading">My Requests for others' books</h3>
            <div className="prof-grid">
              {MY_REQUESTS.map(r => (
                <div key={r.id} className="book-with-footer">
                  <BookCard
                    id={r.id}
                    title={r.bookTitle}
                    owner={r.requesterName}
                    exchangeType="Requested"
                  />
                  <div className="card-footer">
                    <span>{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

      {/* incoming requests */}
        <section className="prof-section">
          <h3 className="prof-heading">Requests by others for my books</h3>
          <div className="prof-grid">
            {INCOMING_REQUESTS.map(r => (
              <div key={r.id} className="book-with-footer">
                <BookCard
                  id={r.id}
                  title={r.bookTitle}
                  owner={r.requesterName}
                  exchangeType="Request"
                  
                />


                <div className="card-footer">
                  {r.status === "pending" ? (
                   <>  <button className="btn-circle danger" onClick={() => reject(r.id)}>accept</button>
                      <button className="btn-circle ok" onClick={() => accept(r.id)}>Reject</button> </> 
                    ) : ( <span>{r.status}</span> )}
                </div>


            </div>
          ))}     
        </div>
        </section>
    </main>
  );
}
