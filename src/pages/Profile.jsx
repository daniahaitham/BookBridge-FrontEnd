import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import OfferedBooks from "../components/profileComp/OfferedBooks";
import "../Styles/Profile.css";
import IncomingReq from "../components/profileComp/IncomingReq.jsx";
import MyRequests from "../components/profileComp/MyRequests.jsx";

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





const [gotBooks, setGotBooks] = useState([]);



const [myRequests, setMyRequests] = useState([]);


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
 


//this fucntin will be sent as prp t o the onDelte.
const handleDelete = async (bookId) => {
  try {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : null;
    if (!user?.id) 
      {throw new Error("Not logged in");}

    const res = await fetch(`${BASE}/api/books/${bookId}?userid=${user.id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (!res.ok || !data.ok) {
      throw new Error(data.error || "Failed to delete book");
    }


    //passing the current offerBooks to the "prev"
     setOfferedBooks((prev) => prev.filter((b) => b.id !== data.id));
  } catch (e) {
    setError(e.message || "Delete failed");
  }
};


//EDTING:

const [editingId, setEditingId] = useState(null);//to remember which book is edited
const startEdit = (book) => setEditingId(book.id);//when i edit i willcall it to set the id on the editid
//i send them all becouse i have to change thier 
  
const saveEdit = async (bookId, values) => {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user?.id) throw new Error("Not logged in");

    const res = await fetch(`${BASE}/api/books/${bookId}?userid=${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Update failed");

     setOfferedBooks(prev => prev.map(b => (b.id === bookId ? data.book : b)));//replace the whole book when u find it 
    setEditingId(null); // close the form
  } catch (e) {
    setError(e.message || "Update failed");
  }
};

//tracking incomeing req:

    const [incomingRequests, setIncomingRequests] = useState([]);
  

    useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            const ownerid = user.id || user.userid;
            if (!ownerid) return;  


          (async () => {
              try {
                console.log("PATCH to:", `${BASE}/api/req/${id}`);
                const res = await fetch(`${BASE}/api/req/incoming?ownerid=${ownerid}`);
                const j = await res.json();

                setIncomingRequests(j.requests || []); //this udates the states with the needed ata
              } catch {
                setIncomingRequests([]);//settin empty 
              }
            })();
          }, []);


                
     const accept = async (id) => {
      const reqObj = incomingRequests.find(r => r.id === id);

            try {
              const res = await fetch(`${BASE}/api/req/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "accepted" })
              });
              const { request } = await res.json();
              if (!res.ok) throw new Error("Update failed");


              setGotBooks(prev => [
                  {
                    id: reqObj.bookid,
                    title: reqObj.title,
                    cover: reqObj.cover,
                    owner: `Owner #${reqObj.ownerid}`,
                    exchangeType: "accepted"
                  },
                  ...prev
                ]);

              // update state 
              setIncomingRequests(prev =>
                prev.map(r => (r.id === id ? { ...r, status: request.status } : r))
              );
            } catch (e) {
              console.error(e);
            }
          };


      const reject = (id) =>
        setIncomingRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r)));
//trachkin my borroed books:

useEffect(() => {
  const stored = localStorage.getItem("user");
  const user = stored ? JSON.parse(stored) : null;
  if (!user?.id) return;

  (async () => {
    try {
      const res = await fetch(`${BASE}/api/req/got?requesterid=${user.id}`);
      const data = await res.json();
      setGotBooks(data.requests || []);
    } catch (e) {
      console.error("Failed to load got books:", e);
      setGotBooks([]);
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
          {profile.password ? "••••••" : "Password"} 
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
          <OfferedBooks books={offeredBooks} onEdit={startEdit} onDelete={handleDelete} editingId={editingId}
          setEditingId={setEditingId} onSave={saveEdit} />
        </div>
      </section>


      {/* the books i got from others   */} 

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
          <MyRequests requests={myRequests} />
        </section>
       




      {/* incoming requests */}
            <section className="prof-section">
              <h3 className="prof-heading">Requests by others for my books</h3>
              <IncomingReq requests={incomingRequests} onAccept={accept} onReject={reject} />
            </section>
    </main>
  );
}
