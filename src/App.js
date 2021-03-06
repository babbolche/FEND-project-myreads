import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import { Route } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    search: '',
    results: []
  }

    // Changes the book shelf
    changeState = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(previousState => ({
          books: previousState.books.filter(shelf=> shelf.id !== book.id).concat([book])
        }))
        this.setState({status: book.shelf})
      })
  }

  // Get all books and set the in the app state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList
            books={this.state.books}
            change={this.changeState}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
            change={this.changeState}
          />
        )}/>
      </div>
    )
  }
}


export default BooksApp
