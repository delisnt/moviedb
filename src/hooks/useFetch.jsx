import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useFetch() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [imgConf, setImgConf] = useState([]);
  const [imgConfCarousel, setImgConfCarousel] = useState([]);
  const { movieid } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2Y0OGJiNDkyYTNiZjdlMWMxOGNkOGI1ZmYwMzVjNCIsInN1YiI6IjY2MjAzMmM2NmEzMDBiMDE3ZTMzOWQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXO4BXn1yq3Wz8kx2qRF02utcmdcni51g4-NBcpgwow",
    },
  };

  async function fetchMovieQuery() {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=dune",
      options
    );
    const json = await res.json();
    console.log(json);
  }

  async function fetchSingleMovie() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}?&append_to_response=videos&api_key=0cf48bb492a3bf7e1c18cd8b5ff035c4`,
        options
      );
      const json = await res.json();
      console.log(json);
      setSingleMovie(json);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchConfigurationData() {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/configuration",
        options
      );
      const json = await resp.json();
      console.log(json.images);
      const baseImgUrl = json.images.base_url;
      const posterSizeCard = json.images.poster_sizes[3];
      const posterSizeCarousel = json.images.poster_sizes[4];
      const imgConfCarousel = baseImgUrl + posterSizeCarousel;
      const imgConf = baseImgUrl + posterSizeCard;
      setImgConf(imgConf);
      setImgConfCarousel(imgConfCarousel);
    } catch (error) {
      console.error(error);
    }
  }

  async function FetchData() {
    try {
      const resp = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const json = await resp.json();
      setMovies(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   FetchData();
  // }, []);

  // useEffect(() => {
  //   fetchConfigurationData();
  // }, []);

  // useEffect(() => {
  //   fetchSingleMovie();
  // }, []);

  // useEffect(() => {
  //   fetchMovieQuery();
  // }, []);

  return {
    singleMovie,
    movies,
    imgConf,
    imgConfCarousel,
    FetchData,
    fetchConfigurationData
  };
}

export default useFetch;
