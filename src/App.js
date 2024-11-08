import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/person'
import { Component } from 'react';

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
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <h3>Hello World!</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <Person name="Rana" age="30"> I am some info of person.</Person>
        <Person name="Rupom" age="31"/>
        <Person name="Sazzad" age="18"/>
      </header>
    </div>
    )
  };
}

export default App;
