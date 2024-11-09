import React, {Component} from 'react';

// function Person () {
  // return (
  //   <div>
  //     <h1>I am Person Component</h1>
  //   </div>
  // )
//     // return React.createElement('div', null, React.createElement('h1', null, "I am person component"));
//   } 

  let Person = (props) => {
    console.log(props);

    return (
      <div>
        <h1>Number : {Math.random()}</h1>
        <h2>Name: {props.name}, Age : {props.age}</h2>
        <h4>Extra infor : {props.children}</h4>
      </div>
    )
  }

  // class Person extends Component {
  //   // constructor(props) {
  //   //   super(props);
  //   // }
  //   render() {
  //     // console.log(this.props);
  //     return (
  //           <div>
  //             <h1>Number : {Math.random()}</h1>
  //             <h2>Name: {this.props.name}, Age : {this.props.age}</h2>
  //             <h4>Extra infor : {this.props.children}</h4>
  //           </div>
  //         )
  //   }
  // }

  export default Person;