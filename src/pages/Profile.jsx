import React from "react";
import BookCard from "../components/BookCard";
import { useState } from "react";
import { books } from "../data/books";

function Profile() {

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

     function onChange(e) {
    const { name, value } = e.target;
    setProfile(p => ({ ...p, [name]: value }));
  }



  //those will later start empty then filled with data from the API using useEffect
  const [offeredBooks, setOfferedBooks] = useState([
    { id: 1, title: "Clean Code", type: "sell", owner: "Me" },
    { id: 2, title: "Deep Learning", type: "exchange", owner: "Me" },
    { id: 3, title: "React Basics", type: "borrow", owner: "Me" },
  ]);

const [gotBooks, setGotBooks] = useState([
    { id: 4, title: "Dune", type: "borrowed", owner: "Ali" },
    { id: 5, title: "Atomic Habits", type: "bought", owner: "Sara" },
    { id: 6, title: "Sapiens", type: "borrowed", owner: "Omar" },
  ]);

    return (
    <>
            <h2>My Profile</h2>


            <div>
               <input placeholder="Name" value={profile.name} onChange={onChange} name="name" />
               <input placeholder="Email" value={profile.email} onChange={onChange} name="email" />
               <input placeholder="Password" type="password" value={profile.password} onChange={onChange} name="password" />
               <input placeholder="Phone num" value={profile.phone} onChange={onChange} name="phone" />
            </div>

            <h3>Books I offer</h3>
            <div>
                {offeredBooks.map(book => (
                <BookCard key={book.id} {...book} />

                ))}
            </div>

            <h3>Books Got from Others</h3>
            <div>
                {gotBooks.map(book => (
                   <BookCard key={book.id} {...book} />

                ))}
            </div>
          

    </>
    );
}

export default Profile;
