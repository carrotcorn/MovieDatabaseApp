import React, { useState, useEffect } from "react";
import Year from "./year";
import Genre from "./genre";
import Sort from "./sort";
import MovieGrid from "./movieGrid";
import movieMaker from "./movieMaker";

const Discover = (props) => {
  let date = new Date();

  let currentYear = date.getFullYear();
  const [movieData, setMovieData] = useState(null);
  const [year, setYear] = useState(currentYear);
  const [sort, setSort] = useState("vote_average.asc");
  const [genre, setGenre] = useState("");

  const API_KEY = "6a97c9dac8bbcd1375f356915f8fb53b";

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1&year=${year}&with_genres=${genre}`
      );
      let data = await res.json();
      setMovieData(movieMaker(data.results));
    };
    fetchMovie();
  }, [year, sort, genre]);

  const handleChangYear = (year) => {
    console.log(year);
    setYear(year);
  };
  const handleChangSort = (sort) => {
    console.log(sort);
    setSort(sort);
  };
  const handleChangGenre = (genre) => {
    console.log(genre);
    let genreString = "";
    for (let i = 0; i < genre.length; i++) {
      genreString = genreString + genre[i] + "%2C";
    }
    console.log(genreString);
    setGenre(genreString);
  };
  return (
    <main>
      <form className='needs-validation'>
        <Year
          year={year}
          currentYear={currentYear}
          handleChangYear={handleChangYear}
        />
        <Sort sort={sort} handleChangSort={handleChangSort} />
        <Genre genre={genre} handleChangGenre={handleChangGenre} />
      </form>
      <hr />
      <div className='gridwrap'>
        {movieData && <MovieGrid movies={movieData} />}
      </div>
    </main>
  );
};

export default Discover;
