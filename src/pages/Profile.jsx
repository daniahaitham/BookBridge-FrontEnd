import React from "react";
import BookCard from "../components/BookCard";

function Profile() {

    const offeredBooks = [
    { id: 1, title: "Clean Code", type: "sell", owner: "Me" },
    { id: 2, title: "Deep Learning", type: "exchange", owner: "Me" },
    { id: 3, title: "React Basics", type: "borrow", owner: "Me" },
    ];

    const gotBooks = [
    { id: 4, title: "Dune", type: "borrowed", owner: "Ali" },
    { id: 5, title: "Atomic Habits", type: "bought", owner: "Sara" },
    { id: 6, title: "Sapiens", type: "borrowed", owner: "Omar" },
  ];

    return (
    <>
            <h2>My Profile</h2>


            <div>
               <input placeholder="Name" value="Nadeen Ali"  />
               <input placeholder="Email" value="nadeen@example.com"  />
               <input placeholder="Password" type="password" value="123456"  />
               <input placeholder="Phone num" value="0799999999"  />
            </div>

            <h3>Books I offer</h3>
            <div>
                {offeredBooks.map(book => (
                <BookCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    owner={book.owner}
                    type={book.type}
                />
                ))}
            </div>

            <h3>Books Got from Others</h3>
            <div>
                {gotBooks.map(book => (
                <BookCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    owner={book.owner}
                    type={book.type}
                />
                ))}
            </div>
          

    </>
    );
}

export default Profile;
