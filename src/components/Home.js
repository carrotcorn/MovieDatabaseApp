import React, { useState, useEffect } from "react";
// import SelectType from "../components/selecttype";
// import movieMaker from "./moviemaker";
// import MovieGrid from "./moviegrid";
import Search from "./Search";

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

  const handleChangeType = (choice) => {};

  return (
    <main>
      <div className='inline'>
        &nbsp;&nbsp;&nbsp;
        <Search />
      </div>
    </main>
  );
}

Home.defaultProps = {
  choice: "popular",
  lang: "en_us",
  search: "",
};
