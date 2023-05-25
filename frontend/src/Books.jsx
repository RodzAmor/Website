import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/api/books/?format=json")
            .then(res => res.json())
            .then(data => setBooks(data.map(book => ({...book, image_url: decodeURIComponent(book.image_url)})))) // Fixes uri
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="">
            <h1>Books</h1>
            {books.map(book => (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Year: {book.year}</p>
                    <img src={book.image_url} alt={book.title} />
                </li>
            ))}
        </div>
    );
}

const Books = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                Books
                <Book />
            </div>
        </>
    )
}

export default Books;