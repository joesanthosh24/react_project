import React, { Component } from "react";
import Pagination from "./common/pagination";

class Books extends Component {
  state = {
    books: []
  };

  render() {
    const { books } = this.state;

    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Author</th>
            </tr>
          </thead>
        </table>
        <Pagination numItems={books} />
      </div>
    );
  }
}

export default Books;
