import React, {Component} from "react";
import Book from '../representational/book';

const BookList = (props) => {
    return (
        props.books.map((book, index) => {
            return (
              <Book 
                bookName={book.bookName}
                writer={book.writer}
                delete ={() => props.deletebookState(index)}
                key={book.id}
                inputName={(event) => props.changeWithInputState(event, index)} 
              />
            );
          })  
    );
}

export default BookList;