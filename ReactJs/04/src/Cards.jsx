import React, { useState }  from "react";
import movieData from "./movies.js";

const Cards = () => {
  const [movies, setMovies] = useState(movieData);
  return (
    <div className="grid">
      {movies.map((movie, index) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.url} className="poster" alt={movie.name} />
          <div className="details">
            <div className="title">
              <h1>{movie.name.toUpperCase()}</h1>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              <div className="sub-desc">
                <h2>running time</h2>
                <span>{movie.runningTime}</span>
              </div>
              <div className="sub-desc">
                <h2>directed by</h2>
                <span>{movie.directedBy}</span>
              </div>
              <div className="sub-desc">
                <h2>produced by</h2>
                <span>{movie.producedBy}</span>
              </div>
            </div>
            <div className="sub-desc">
              <h2>starring</h2>
              <span>{movie.starring}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
