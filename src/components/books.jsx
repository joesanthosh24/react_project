import React, { Component } from "react";
import { getBooks } from "../services/booksInfo";
import { MDBDataTable, MDBBtn } from "mdbreact";

class Books extends Component {
  state = {
    books: getBooks(),
    pageSize: 3,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ books: getBooks() });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { books, pageSize } = this.state;
    books.map(book => {
      book["button"] = (
        <MDBBtn color="red" size="sm">
          Button
        </MDBBtn>
      );
    });
    const tableData = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
          width: 80
        },
        {
          label: "Title",
          field: "title",
          sort: "asc",
          width: 400
        },
        {
          label: "Author",
          field: "author",
          sort: "asc",
          width: 100
        },
        {
          label: "Genre",
          field: "genre",
          sort: "asc",
          width: 120
        }
      ],
      rows: books
    };

    return (
      <div className="container">
        <MDBDataTable striped bordered small data={tableData} />
      </div>
    );
  }
}

export default Books;
