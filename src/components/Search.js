import React, { useState, useEffect } from "react";
import makeMovie from "./movieMaker";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const API_KEY = "6a97c9dac8bbcd1375f356915f8fb53b";
    const fetchSearch = async () => {
      if (searchInput != "") {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${props.lang}&query=${searchInput}&page=1`
        );
        let data = await response.json();
        //coming down from parent HOME component
        props.setMovieData(makeMovie(data.results));
      }
    };
    fetchSearch();
  }, [searchInput, props.lang]);

  //instantiate setSearchInput
  const handleSearch = (search) => {
    setSearchInput(search);
  };
  //event handler
  const handleSearchBox = (e) => {
    e.preventDefault();
    let searching = e.target.elements.searching.value;
    handleSearch(searching);
  };

  return (
    <div>
      <form onSubmit={handleSearchBox}>
        <input name='Searching' placeholder='movie name search'></input>
        <button className='search'>Search</button>
      </form>
    </div>
  );
};
export default Search;
