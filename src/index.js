import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/common/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles.css";
import Books from "./components/books";
import Movies from "./components/movies";
import Library from "./components/library";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/movies" component={Movies} />
        <Route path="/library" component={Library} />
        <Redirect from="/" to="/library" />
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
