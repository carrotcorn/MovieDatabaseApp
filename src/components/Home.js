import React, { useState, useEffect } from "react";
import SelectType from "./selectType";
import movieMaker from "./movieMaker";
import MovieGrid from "./movieGrid";
import Search from "./search";

export default function Home(props) {
  const [movieData, setMovieData] = useState(null);
  const [choice, setChoice] = useState(props.choice);

  useEffect(() => {
    const API_KEY = "6a97c9dac8bbcd1375f356915f8fb53b";
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${choice}?api_key=${API_KEY}&page=1`
      );
      let data = await response.json();
      //movieMaker
      setMovieData(movieMaker(data.results));
    };
    fetchMovie();
  }, [choice]);

  const handleChangeType = (choice) => {
    setChoice(choice);
  };

  return (
    <main>
      <div className='inline'>
        &nbsp;&nbsp;&nbsp;
        <Search setMovieData={setMovieData} />
        <div className='optionGroup' style={{ marginTop: "10px" }}>
          <SelectType choise={choice} handleChangType={handleChangeType} />
        </div>
      </div>
      <hr />
      <div className='gridwrap'>
        {movieData && <MovieGrid movies={movieData} />}
      </div>
    </main>
  );
}

Home.defaultProps = {
  choice: "popular",
  lang: "en_us",
  search: "",
};
