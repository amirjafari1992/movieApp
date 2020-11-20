import React from "react";
import Like from "./common/like";
import Movie from "./movie";
import { Link } from 'react-router-dom';

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <div className="table-box">
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort('title')}>Title</th>
            <th onClick={() => onSort('genre.name')}>Genre</th>
            <th onClick={() => onSort('numberInStock')}>Stock</th>
            <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
            <th>Favorite</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td className="title">
                <Link to={`/movies/${movie._id}`} component={Movie}>{movie.title}</Link>
              </td>
              <td className="pointer">{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like like={movie.liked} onlike={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
