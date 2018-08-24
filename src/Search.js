import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array,
        change: PropTypes.func.isRequired
        }

        state = {
        books:[],
        search: '',
        results: []
        }

        searchResult = (search) => {
        this.setState({
            search: search
        })
        if (search){
            BooksAPI.search(search.trim(), 50).then((results) => {
            if(!results || results.error){
                this.setState({results: []})
            } else {
                this.bookShelf(results)
                this.setState({results:results})
            }
            }
        )} else {
            this.setState({results: []})
        }
        }

        bookShelf = (results) => {
        for (let result of results){
            result.shelf = "none"
            for (let book of this.props.books)
            if (result.id === book.id) {
                result.shelf = book.shelf
            }
        }
        }

        render(){
            const { change} = this.props
            const { results } = this.state
            return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                    placeholder="Search by title or author"
                    value={this.state.search}
                    onChange={(event) => this.searchResult(event.target.value)}/>
                </div>
                </div>
                <div className="search-books-results">
                <Book books={results}
                        change={change}/>
            </div>
        </div>
        )
    }
}

export default Search