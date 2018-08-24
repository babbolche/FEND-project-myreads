import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    static propTypes = {
        books: PropTypes.array,
        change: PropTypes.func.isRequired
    }

    state = {
        books:[]
    }

    render(props) {
        const { books, change} = this.props
        return (
        <ol className="books-grid">
        {books.map((book) => (
        <li key={book.id} >
            <div className={"book " + `${book.shelf}`}>
            <div className="book-top">
                <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} 
                    onChange={(e) => change(book,e.target.value)}>
                    <option value="" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            </div>
        </li>
        ))}
        </ol>
        )
    }
}

export default Book