import React, { useState } from "react";
import MovieGrid from "./movieGrid";
import Search from "./search";

const MyRated = () => {
  let movieData = [];
  const [movieData2, setMovieData] = useState(null);

  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let k = localStorage.key(i);
      let movie = localStorage.getItem(k);
      movie = JSON.parse(movie);
      if (movie.starNumber > 0) {
        movieData.push(movie);
      }
    }
  }

  return (
    <div>
      <Search lang='en_us' setMovieData={setMovieData} />
      <hr />
      {movieData.length === 0 && (
        <h4>
          <center>
            <p>Sorry, no records found.</p>{" "}
            <p>Please use search to add movies to your rated page.</p>
          </center>
        </h4>
      )}
      {movieData && !movieData2 && <MovieGrid movies={movieData} />}
      {movieData2 && <MovieGrid movies={movieData2} />}
    </div>
  );
};

export default MyRated;
