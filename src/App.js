import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'

class BooksApp extends React.Component {
  state = {
    books: []
  }
    showSearchPage: false
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
