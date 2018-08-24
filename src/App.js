import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    status: none
  }


    handleChange = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(previousState => ({
          books: previousState.books.filter(shelf=> shelf.id !== book.id).concat([book])
        }))
        this.setState({status: book.shelf})
      })
  }

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
            change={this.handleChange}
          />
        )}/>
      </div>
    )
  }


export default BooksApp
