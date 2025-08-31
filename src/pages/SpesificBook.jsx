import { books } from "../data/books.js";  



function SpesificBook() {
    const { id } = useParams(); //param is the hook that let me read the value from the URL 
    const book = books.find(b => String(b.id) === id);

    if (!books.length) return <p>No books yet.</p>;


    //here i should handle : LOADING AND ERROR
    return (


        <div>
     
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Owner: {book.owner}</p>
            <p>Type: {book.type}</p>
   

        </div>
    );

}


export default SpesificBook;