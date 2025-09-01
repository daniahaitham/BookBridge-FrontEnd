import { Link } from "react-router-dom";
import "../Styles/BookCard.css";


function BookCard({ id, title, owner, exchangeType, cover }) {
  return (
    <Link to={`/spesificBook/${id}`} className="book-card"> {/*while the sedning of the sata from the home to the card was by props now the card build this link via the data recived. */} 
      <div className="book-card">
        <img src={cover} alt={title} className="book-cover" />
        <h3>{title}</h3>
        <p>{owner}</p>
        <span className="tag">{exchangeType}</span>
      </div>
    </Link>
  );
}


export default BookCard;
