import { useParams } from "react-router-dom";
import { books } from "../data/books";
import "../styles/SpesificBook.css";

function SpesificBook() {
  const { id } = useParams();//get id from url
  const book = books.find((b) => String(b.id) === id);//string becouse id is stringfrom url

  if (!book) return <p className="bd-empty">Book not found.</p>;

  return (
    <>
      <h1 className="bd-title">Book Details</h1>
      <main className="bd-page">
        <section className="bd-wrap">
          <div className="bd-info">
            <h2 className="bd-head">
              {book.title} <span className="sep">–</span> {book.author}
          </h2>

          <p className="bd-desc">
            {book.description ||  "Book Description – BLABLABLBALABLABALBALBLBLBALABLABALB…"}
          </p>

          <div className="bd-tags">
            <span className="tag">{book.exchangeType || "Exchange Type"}</span>
            <span className="tag light">{book.price ? book.price : "Price / Duration"}</span>{/*dont forget its called ternary opearator  */}
          </div>

          <p className="bd-owner">
            <strong>Owner name :</strong> {book.owner || "—"}
            <span>{book.phone || ""}</span>
          </p>

          <p className="bd-note">
            <strong>Note by owner:</strong>{" "}
            {book.note ||
              "… BALBALABLABALBALBALBLABBALBALBALBALBALBALABLABL…"}
          </p>
        </div>

        
        <aside className="bd-side">
          <div className="bd-side-label">
            {book.availability || "Availability"}
          </div>

          <div className="bd-frame">
             {book.cover ? (<img src={book.cover} alt={book.title} />)  
             :(<div className="bd-placeholder" aria-hidden="true" />)}
          </div>
        </aside>
          <button className="reqBook">Request Book</button>
      </section>

    

    </main>
    </>
  );
}

export default SpesificBook;
