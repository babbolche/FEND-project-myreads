import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Book from './Book';

class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    state = {
        books:[],
        search: '',
        results: []
    }

    render() {

        const { books, change} = this.props

        // Filter the books by their shelf
        let current = books.filter((book) => book.shelf === "currentlyReading");
        let read = books.filter((book) => book.shelf === "read");
        let wantToRead = books.filter((book) => book.shelf === "wantToRead");

        return (
        <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <Book books={current}
                        change={change}/>
                </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <Book books={wantToRead}
                        change={change}/>
                </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <Book books={read}
                        change={change}/>
                </div>
                </div>
            </div>
            </div>
            <div className="open-search">
            <Link to='/search'>Add a book</Link>
            </div>
        </div>
        )
    }
}

export default BooksList