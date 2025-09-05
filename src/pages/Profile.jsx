import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import OfferedBooks from "../components/profileComp/OfferedBooks";
import "../Styles/Profile.css";

const BASE = "http://localhost:5000";
export default function Profile() {

  


   const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [gotBooks] = useState([]);









   const accept = (id) => {
    gfdecfv(prev =>
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


  const MY_REQUESTS = [
  { id: 1, bookTitle: "The Pragmatic Programmer", requesterName: "Me",   status: "pending"  },
  { id: 2, bookTitle: "Design Patterns",          requesterName: "Me",   status: "accepted" },
];

const INCOMING_REQUESTS = [
  { id: 10, bookTitle: "Clean Code",    requesterName: "Ahmad Ali",   status: "pending"  },
  { id: 11, bookTitle: "Deep Learning", requesterName: "Sara Khalid", status: "rejected" },
];
const [incomingRequests, setIncomingRequests] = useState(INCOMING_REQUESTS);








//my books:
const [offeredBooks, setOfferedBooks] = useState([]);

useEffect(() => {//using data from thier i want to update a state 



  const stored = localStorage.getItem("user");//this gives back a string
    const user = stored ? JSON.parse(stored) : null; //PASRE BACK TO js SO I CAN USE IT 
      if (!user || !user.id) {
        setLoading(false);
        return;  // stop early if no user
      }




  (async () => {
    try {
      const res = await fetch(`${BASE}/api/books?userid=${user.id}`);//res have obj include headers and body..
      //the ? where the backend know that here is the paramter 
      const data = await res.json();//conver this raw to JS obj


      if (!res.ok) {
       throw new Error(data.error || "Failed to load books");
      } 
      setOfferedBooks(data.books || []);// the empty array is for safty if tnohgin returned
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  })();
}, []);





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
         <OfferedBooks books={offeredBooks} />
            
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
            {incomingRequests.map(r => (
              <div key={r.id} className="book-with-footer">
                <BookCard
                  id={r.id}
                  title={r.bookTitle}
                  owner={r.requesterName}
                  exchangeType="Request"
                  
                />


                <div className="card-footer">
                  {r.status === "pending" ? (
                   <>
                   <button className="btn-circle ok" onClick={() => accept(r.id)}>Accept</button>
                    <button className="btn-circle danger" onClick={() => reject(r.id)}>Reject</button>

                       </> 
                    ) : ( <span>{r.status}</span> )}
                </div>


            </div>
          ))}     
        </div>
        </section>
    </main>
  );
}
