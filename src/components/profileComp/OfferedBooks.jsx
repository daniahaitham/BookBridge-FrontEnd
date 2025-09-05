import BookCard from "../BookCard";


//here i will render the recived data without fetch
export default function OfferedBooks({ books, onDelete }) {
  if (!books?.length) return <p>No books yet.</p>;

  return (
    <div className="prof-grid">
      {books.map(b => (
        <div key={b.id} className="book-with-footer">
          <BookCard
            id={b.id}
            title={b.title}
            owner="Me"
            exchangeType={b.category}
            cover={b.cover}
          />




          <div className="card-footer">
            <button className="delete-btn" onClick={() => onDelete(b.id)}>
              Delete
            </button>
          </div>



          
        </div>
      ))}
    </div>
  );
}
