import React from 'react';
import './bookList.css';

const BookList = ({books, handleClick}) => {
    const mappedBooks = books.map(book => {
        return (
            <div className='book-card'>
                <img className='book-covers' src={book.img} alt='book cover' />
                <h3 className='book-title'>{book.title}</h3>
                <h4 className='book-author'>{book.author}</h4>
            </div>
        )
    })
    return mappedBooks;
}

export default BookList