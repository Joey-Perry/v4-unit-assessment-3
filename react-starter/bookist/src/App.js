import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Shelf from './components/Shelf'
import BookList from './components/BookList'
import SearchBar from './components/SearchBar'
import data from './data'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: [],
      shelf: [],
    }

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount(){
    this.setState({ books: data})
    console.log('content loaded');
  }

  addToShelf(e){
    const selectedBook = e.target.parentNode.childNodes[1].innerText;
    this.setState((state)=> {
      return {
        shelf: [...state.shelf, selectedBook]
      }
    })
  }

  clearShelf(){
    this.setState({shelf: [] })
  }

  filterBooks(input){
    let booksCopy = this.state.books;
    const filteredBooks = booksCopy.filter(book => book.title.toLowerCase().includes(input));
    this.setState({ books: filteredBooks })
  }

  reset(){
    this.setState({ books: data });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar handleSearch={this.filterBooks} handleClear={this.reset}/>

        <section className='book-area'>

          <section className='book-list'>
            <BookList books={this.state.books} handleClick={this.addToShelf}/>
          </section>

          <section className='book-shelf'>
            <Shelf shelf={this.state.shelf} handleClick={this.clearShelf}/>
          </section>

        </section>
      </div>
    );
  }
}

export default App;
