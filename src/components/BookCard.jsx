import { Link } from "react-router-dom";


function BookCard({ id, title, owner, type }) {
  return (
       <Link to="/SpesificBook" className="book-card">
      <div className="thumb" />
      <h3>{title}</h3>
      <p>{owner}</p>
      <div className="chiprow">
          <span className="chip">{type}</span>
         </div>
      </Link>
  );
}

export default BookCard;
