import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { getMovies } from "../services/moviesInfo";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    const { movies } = this.state;
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
          label: "Genre",
          field: "genre",
          sort: "asc",
          width: 120
        }
      ],
      rows: movies
    };
    return (
      <div className="container">
        <h1>Movies</h1>
        <MDBDataTable striped bordered small data={tableData} />
      </div>
    );
  }
}

export default Movies;
