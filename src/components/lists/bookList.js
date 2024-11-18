import React, {Component} from "react";
import Book from '../representational/book';

class BookList extends Component {
  constructor(props) {
    super(props);
    console.log("Booklist constructor");
  }

  componentDidMount() {
    console.log("BookList ComponentDidMount");
  }

  UNSAFE_componentWillMount() {
    console.log("BookList ComponentWillMount");
  }

  render() { 
    console.log("BookList render");
    return (
        this.props.books.map((book, index) => {
            return (
              <Book 
                bookName={book.bookName}
                writer={book.writer}
                delete ={() => this.props.deletebookState(index)}
                key={book.id}
                inputName={(event) => this.props.changeWithInputState(event, index)} 
              />
            );
          })  
    );
  }
}

export default BookList;