import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Movie from "./components/movie";
import NavBar from "./components/navBar";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Login from "./components/login";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container pt-5">
        <div className="row">
          <Switch>
            <Route path="/movies/:id" component={Movie} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={Login} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
