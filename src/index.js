import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
