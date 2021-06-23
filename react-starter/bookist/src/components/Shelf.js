import React from 'react';
import './shelf.css';

const Shelf = ({shelf, handleClick}) => {

    const booksOnShelf = shelf.map((book, i) => {
        return <p className='shelf-book' key={i}>{book}</p>
    })

    return (
        <>
            <h2 className='shelf'> Shelf</h2>
            {booksOnShelf}
            {shelf.length === 0 && <p>Click a book to add it to your shelf </p>}
            {shelf.length > 0 && <button onClick={handleClick}> Clear Shelf </button>}
        </>
        
    )
}

export default Shelf