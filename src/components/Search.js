import React, { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchSearch = async () => {
      if (searchInput != "") {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${choise}?api_key=${API_KEY}&page=1`
        );
        let data = await response.json();
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
