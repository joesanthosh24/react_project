import React, { Component } from "react";
import Pagination from "./common/pagination";
import { getBooks } from "../services/booksInfo";

class Books extends Component {
  state = {
    books: getBooks(),
    pageSize: 3
  };

  handlePageChange() {}

  render() {
    const { books, pageSize } = this.state;

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="column">Title</th>
              <th scope="column">Genre</th>
              <th scope="column">Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td scope="row">{book.title}</td>
                <td scope="row">{book.genre}</td>
                <td scope="row">{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          numItems={books.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Books;
