import BookCard from "../BookCard";


//here i will render the recived data without fetch

export default function OfferedBooks({ books }) {
  if (!books?.length) return <p>No books yet.</p>;

  return (
    <div className="prof-grid">
      {books.map(b => (
        <BookCard
          key={b.id}
          id={b.id}
          title={b.title}
          owner="Me"     
          exchangeType={b.category}  
          cover={b.cover}
        />
      ))}
    </div>
  );
}
