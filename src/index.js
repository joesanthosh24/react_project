import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/common/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles.css";
import Books from "./components/books";
import Movies from "./components/movies";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/movies" component={Movies} />
        <Redirect from="/" to="/books" />
      </Switch>
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
