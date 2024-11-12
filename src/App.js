import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import MainComponent from './components/mainComponent';

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
const App = () => {
  return <MainComponent />
}

export default App;
