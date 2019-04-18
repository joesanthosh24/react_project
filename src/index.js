import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/common/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Books from "./components/books";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Books />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
