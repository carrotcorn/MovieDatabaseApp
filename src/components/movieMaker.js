function filterMovies(array) {
  return array.reduce((result, item, i) => {
    if (i <= 11) {
      result.push({
        id: item.id,
        poster: item.poster_path,
        title: item.title,
        releaseDate: item.release_date,
        rating: item.vote_average,
        summary: item.overview,
      });
    }
    console.log(result);
    return result;
  }, []);
}

function movieMaker(movieAPI) {
  movieAPI = filterMovies(movieAPI);
  return movieAPI;
}

export default movieMaker;
