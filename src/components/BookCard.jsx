 function BookCard({ title, owner, type }) {
  return (
    <div>
        <h3>
            <Link to={`/books/${id}`}>{title}</Link>
        </h3>
      <p>{owner}</p>
      <p>{type}</p>
    </div>
  );
}

export default BookCard;
