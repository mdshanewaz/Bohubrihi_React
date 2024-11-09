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
      {bookName:"1984", writer:"George Orwell"},
      {bookName:"The Da Vinci Code", writer:"Dan Brown"},
      {bookName:"The Alchemist", writer:"Paulo Coelho"},
    ],
    other : 'Another property!', 
  }

  changeBookState = (newBookname) => {
    console.log('Button Clicked!');
    // wrong : this.state.books[0].bookName = '1954';
    this.setState({
      books : [
        { bookName: newBookname, writer:"George Orwell"},
        { bookName:"The Da Vinci Code", writer:"Dan Brown"},
        { bookName:"Metmorphosis", writer:"Franz Kafka"},
      ]
    });
  }

  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    // let obj = new Component();
    // console.log(obj);
    console.log(this.state)
    return(
      <div className="App">
      <h1>Book List</h1>
      <button onClick={ () => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
      <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
      <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
      <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, "Nineteen 84")}/>
    </div>
    )
  };
}

export default App;
