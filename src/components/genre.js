import React from "react";

let genreArr = [];

const Genre = (props) => {
  const API_KEY = "6a97c9dac8bbcd1375f356915f8fb53b";

  const fetchgenrelist = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en_us`
    );
    let genrelist = await res.json();
    genrelist = genrelist.genres;
    let ga = filterGN(genrelist);
    // console.log(ga);
  };
  fetchgenrelist();

  function filterGN(arr) {
    return arr.reduce((result, item, i) => {
      result.push(item.name);
      return result;
    }, []);
  }

  const genrelist = [
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 28, name: "Action" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  //  console.log(genrelist[0].name)

  const handleChange = (e) => {
    //  e.preventDefault();
    let checked = e.target.checked;
    console.log(checked);
    if (checked === true) {
      genreArr.push(e.target.value);
    } else if (checked === false) {
      for (var i = 0; i < genreArr.length; i++) {
        if (genreArr[i] === e.target.value) {
          genreArr.splice(i, 1);
        }
      }
    }
    props.handleChangGenre(genreArr);
  };

  const handleGenreList = (arr) => {
    return arr.map((item, i) => (
      <span>
        <input
          onClick={handleChange}
          key={i}
          type='checkbox'
          value={item.id}
          style={{ marginLeft: "5px" }}
        />
        {item.name}
      </span>
    ));
  };

  return <span>{handleGenreList(genrelist)}</span>;
};
export default Genre;
