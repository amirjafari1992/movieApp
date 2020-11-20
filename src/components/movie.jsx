import React, { Component } from "react";

const Movie = ({ match, history }) => {
  return (
    <React.Fragment>
      <h1>{match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Back
      </button>
    </React.Fragment>
  );
};

export default Movie;
