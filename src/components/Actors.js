import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default Actors;
