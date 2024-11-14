import React, { Component } from "react";
import BookList from "./lists/bookList";
import bookList from "../assets/bookList";

class MainComponent extends Component {
    // State
  state = {
    books : bookList,
    showBooks : true,
  }

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }

    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book
    this.setState({books: books});
  }

  deletebookState = (index) => {
    // const books = this.state.books.slice();
    // const books = this.state.books.map(item => item);
    const books = [...this.state.books]
    books.splice(index, 1);
    this.setState({
      books : books
    });
  }

  toggleBooks = () => {
    this.setState({
      showBooks: !this.state.showBooks
    })
  };

  render() {
    const style = {
      border: '1px solid red',
      borderRadius : '5px',
      backgroundColor : 'black',
      color : 'white',
    };

    let books = null;
    
    if(this.state.showBooks) {
      books = <BookList 
        books = {this.state.books} 
        deletebookState={this.deletebookState} 
        changeWithInputState={this.changeWithInputState} />
    } 

    console.log(books);

    return(
      <div className="App">
      <h1 style={style}>Book List</h1>

      <button onClick={this.toggleBooks}>Toggle Books</button>

      {books}
    </div>
    )
  };
}

export default MainComponent;