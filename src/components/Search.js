import React, { useState, useEffect } from "react";
import makeMovie from "./movieMaker";

const Search = (props) => {
  const [searchInput, setSearch] = useState("");

  const API_KEY = "6a97c9dac8bbcd1375f356915f8fb53b";

  useEffect(() => {
    const fetchSearch = async () => {
      if (searchInput != "") {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${props.lang}&query=${searchInput}&page=1`
        );
        let data = await res.json();
        props.setMovieData(makeMovie(data.results));
      }
    };
    fetchSearch();
  }, [searchInput, props.lang]);

  const handleSearch = (search) => {
    setSearch(search);
  };

  const handleSearchBox = (e) => {
    e.preventDefault();
    let searching = e.target.elements.searching.value;
    handleSearch(searching);
  };
  return (
    <form onSubmit={handleSearchBox}>
      <input name='searching' placeholder='movie name'></input>
      <button className='search'>Search</button>
    </form>
  );
};
export default Search;
