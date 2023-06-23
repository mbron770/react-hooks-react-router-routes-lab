import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h1>{movie.title}</h1>
          <h1>{movie.time}</h1>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default Movies;
