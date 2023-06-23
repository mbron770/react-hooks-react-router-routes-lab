import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      {directors.map((director) => (
        <div key={director.name}>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default Directors;
