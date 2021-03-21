import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NoPic from "../images/noposter.jpg";
import GoldStar from "../images/goldstar.png";
import BlackStar from "../images/blackstar.png";
import NoHeart from "../images/noheart.png";

import Search from "./search";
import MovieGrid from "./movieGrid";

const MovieDetail = (props) => {
  const [movieData3, setMovieData] = useState(null);

  let themovie = {
    poster: "/" + props.match.params.poster,
    id: props.match.params.id,
    title: props.match.params.title,
    releaseDate: props.match.params.releaseDate,
    rating: props.match.params.rating,
    summary: props.match.params.summary,
    like: "",
    starNumber: 0,
  };
  const imagePath = "https://image.tmdb.org/t/p/w342";
  let likeshow = "";
  var searchmovieinit;
  let arrGoldinit = [];
  let arrBlackinit = [];

  searchmovieinit = localStorage.getItem(themovie.id);
  searchmovieinit = JSON.parse(searchmovieinit);
  if (searchmovieinit && searchmovieinit.like === "Like") {
    likeshow = "Dislike";
  } else {
    likeshow = "Like";
  }
  let initlength;
  searchmovieinit
    ? (initlength = searchmovieinit.starNumber)
    : (initlength = 0);

  for (let i = 0; i < initlength; i++) {
    arrGoldinit.push(1);
  }

  for (let i = 0; i < 5 - initlength; i++) {
    arrBlackinit.push(1);
  }

  const [likeShow, setLikeShow] = useState("");
  useEffect(() => {
    let searchmovie = localStorage.getItem(themovie.id);
    searchmovie = JSON.parse(searchmovie);
    if (likeShow === "Dislike" && !searchmovie) {
      themovie.like = "Like";
      let item = JSON.stringify(themovie);
      localStorage.setItem(themovie.id, item);
      setRenew("Dislike");
    } else if (
      likeShow === "Dislike" &&
      (searchmovie.like === "" || searchmovie.like === "Dislike")
    ) {
      let item = localStorage.getItem(themovie.id);
      item = JSON.parse(item);
      item.like = "Like";
      item = JSON.stringify(item);
      localStorage.setItem(themovie.id, item);
      setRenew("Dislike");
    } else if (likeShow === "Like" && searchmovie) {
      let item = localStorage.getItem(themovie.id);
      item = JSON.parse(item);
      item.like = "Dislike";
      item = JSON.stringify(item);
      localStorage.setItem(themovie.id, item);
      setRenew("Like");
    }
  }, [likeShow]);

  const [renew, setRenew] = useState(likeshow);

  const handleLike = (e) => {
    e.preventDefault();
    let likevalue = e.target.value;
    if (likevalue === "Like") {
      likevalue = "Dislike";
    } else if (likevalue === "Dislike") {
      likevalue = "Like";
    }
    setLikeShow(likevalue);
  };

  const handlePoster = (poster) => {
    console.log(poster);
    if (poster != null) {
      return (
        <img
          src={`${imagePath}${poster}`}
          className='card-img-top'
          alt={`${themovie.title}`}
        />
      );
    } else {
      return (
        <img src={NoPic} className='card-img-top' alt={`${themovie.title}`} />
      );
    }
  };

  const [arrGold, setarrGold] = useState(arrGoldinit);
  const [arrBlack, setarrBlack] = useState(arrBlackinit);
  let totalIndex;

  const handleClickBlack = (blackindex) => {
    totalIndex = blackindex + arrGold.length + 1;
    let blacklength = 5 - totalIndex;
    let goldlength = totalIndex;
    let arrB = [];
    let arrG = [];
    for (let i = 0; i < blacklength; i++) {
      arrB.push(1);
    }
    for (let i = 0; i < goldlength; i++) {
      arrG.push(1);
    }
    setarrBlack(arrB);
    setarrGold(arrG);

    let item = localStorage.getItem(themovie.id);
    item = JSON.parse(item);
    if (item) {
      item.starNumber = arrG.length;
      item = JSON.stringify(item);
      localStorage.setItem(themovie.id, item);
    } else {
      themovie.starNumber = arrG.length;
      item = JSON.stringify(themovie);
      localStorage.setItem(themovie.id, item);
    }
  };

  const handleClickGold = (goldindex) => {
    let goldlength = goldindex + 1;
    let blacklength = 5 - goldlength;
    let arrB = [];
    let arrG = [];
    for (let i = 0; i < blacklength; i++) {
      arrB.push(1);
    }
    for (let i = 0; i < goldlength; i++) {
      arrG.push(1);
    }
    setarrBlack(arrB);
    setarrGold(arrG);

    let item = localStorage.getItem(themovie.id);
    item = JSON.parse(item);
    if (item) {
      item.starNumber = arrG.length;
      item = JSON.stringify(item);
      localStorage.setItem(themovie.id, item);
    } else {
      themovie.starNumber = arrG.length;
      item = JSON.stringify(themovie);
      localStorage.setItem(themovie.id, item);
    }
  };

  const handleClickNoStar = () => {
    setarrBlack([1, 1, 1, 1, 1]);
    setarrGold([]);
    let item = localStorage.getItem(themovie.id);
    item = JSON.parse(item);
    if (item) {
      item.starNumber = 0;
      item = JSON.stringify(item);
      localStorage.setItem(themovie.id, item);
    } else {
      themovie.starNumber = 0;
      item = JSON.stringify(themovie);
      localStorage.setItem(themovie.id, item);
    }
  };

  const handleNoStar = () => {
    return (
      <a
        href='#'
        onClick={() => {
          handleClickNoStar();
        }}
      >
        <img src={NoHeart} width='20' />
      </a>
    );
  };

  const handleGoldStar = (arrGold) => {
    const items = arrGold.map((i) => (
      <a
        href='#'
        onClick={() => {
          handleClickGold(i);
        }}
      >
        <img src={GoldStar} width='20' />
      </a>
    ));
    return items;
  };
  const handleBlackStar = (arrBlack) => {
    const items = arrBlack.map((i) => (
      <a
        href='#'
        onClick={() => {
          handleClickBlack(i);
        }}
      >
        <img src={BlackStar} width='20' />
      </a>
    ));
    return items;
  };

  console.log(movieData3);

  return (
    <main>
      <Search lang='en_us' setMovieData={setMovieData} />
      <hr />
      {
        <div className='container'>
          <div className='movieDetail'>
            <div>{handlePoster(themovie.poster)}</div>
            <div className='card-body detailcard'>
              <h5 className='card-title'>Title: {themovie.title}</h5>
              <h6 className='card-title'>
                Release Date: {themovie.releaseDate}
              </h6>
              <h6 className='card-title'>Rating: {themovie.rating}</h6>
              <h6>Summary: </h6>
              <p className='card-text'>{themovie.summary}</p>
            </div>
          </div>
          <form>
            <h5>Add this movie to your My Favourites?</h5>
            <button
              type='submit'
              name='isLike'
              className='btn btn-success'
              value={renew}
              onClick={handleLike}
            >
              {renew}
            </button>
            <h5>
              <br />
              How would you rate this movie?
            </h5>
            <div>
              <p>Clear Stars: {handleNoStar()}</p>
            </div>
            {handleGoldStar(arrGold)}
            {handleBlackStar(arrBlack)}
          </form>

          <Link className='goback' to='/' className=''>
            Back to Home Page
          </Link>
        </div>
      }
      {movieData3 && <MovieGrid movies={movieData3} />}
    </main>
  );
};

export default MovieDetail;
