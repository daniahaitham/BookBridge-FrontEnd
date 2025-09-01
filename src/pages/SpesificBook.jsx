import { useParams } from "react-router-dom";
import { books } from "../data/books";
import "../styles/SpesificBook.css";

//DONT FOGET TO INCLUDE ERRORRRRR HANDLE 

function SpesificBook() {

  const { id } = useParams();  //to get the id from the url
  const book = books.find(b => String(b.id) === id);//sting cuz params always return string SO WE CONVERT INT TO STRING

  if (!book) return <p className="bd-empty">Book not found.</p>;

  return (
          
    <main className="bd-page">
        
      <section className="bd-wrap">
        <div className="bd-info">
          <h2 className="bd-head">
            {book.title} <span className="sep">–</span> {book.author}
          </h2>

          <p className="bd-desc">
            {book.description || "Book Description – BlablablablablablablablBlablablablablablablablBlablablablablablablablablablabl."}
          </p>

          <div className="bd-tags">
            <span className="tag">{book.exchangeType || "Exchange Type"}</span>
           {/* <span className="tag light">{book.price ? `${book.price}` : "Price / Duration"}</span> */}
          </div>

          <p className="bd-owner">
            <strong>Owner name :</strong> {book.owner || "—"} {book.phone && <span> - {book.phone}</span>}
          </p>

          <div className="bd-note">
            <strong>Note by owner:</strong> {book.note || "BlablablablablablablablBlablablablablablablablBlablablablablablablablBlablablablablablablabl."}
          </div>
        </div>

        
        <aside className="bd-side">
          <div className="bd-side-label">
             {book.availability || "Availability"}
          </div>
          <div className="bd-frame">
            <img
              src={book.cover}
              alt={book.title}
            />
          </div>
        </aside>
      </section>
    </main>
  );
}

export default SpesificBook;
