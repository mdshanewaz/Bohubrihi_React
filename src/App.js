import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/person'
import { Component } from 'react';
import Book  from './components/book';

// functional component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Person />
//       </header>
//     </div>
//   );
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello world!'), <Person />);
// }

// Class component
class App extends Component {
  // State
  state = {
    books : [
      {id:1, bookName:"1984", writer:"George Orwell"},
      {id:2, bookName:"The Da Vinci Code", writer:"Dan Brown"},
      {id:3, bookName:"The Alchemist", writer:"Paulo Coelho"},
    ],
    // other : 'Another property!', 
  }

  // changeBookState = (newBookname) => {
  //   console.log('Button Clicked!');
  //   // wrong : this.state.books[0].bookName = '1954';
  //   this.setState({
  //     books : [
  //       { bookName: newBookname, writer:"George Orwell"},
  //       { bookName:"The Da Vinci Code", writer:"Dan Brown"},
  //       { bookName:"Metmorphosis", writer:"Franz Kafka"},
  //     ]
  //   });
  // }

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

  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    // let obj = new Component();
    // console.log(obj);
    const style = {
      border: '1px solid red',
      borderRadius : '5px',
      backgroundColor : 'black',
      color : 'white',
    };

    // const booksState = this.state.books;
    // console.log(booksState);

    const books = this.state.books.map((book, index) => {
      return (
        <Book 
          bookName={book.bookName}
          writer={book.writer}
          delete ={() => this.deletebookState(index)}
          key={book.id}
          inputName={(event) => this.changeWithInputState(event, index)} 
        />
      );
    })

    console.log(books);

    // const books = bookstate.Map(function(book) {
    //   console.log(book);
    // });

    // console.log(this.state)
    return(
      <div className="App">
      <h1 style={style}>Book List</h1>
      {/* <button onClick={ () => this.changeBookState("Nineteen Eighty-Four")}>Change State</button> */}
      {/* <input type='text' onChange={this.changeWithInputState} /> */}
      {/* <Book 
        bookName={this.state.books[0].bookName} 
        writer={this.state.books[0].writer}
        inputName={this.changeWithInputState}  
         />
      <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
      <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, "Nineteen 84")}/> */}

      {books}
    </div>
    )
  };
}

export default App;
