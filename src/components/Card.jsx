/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";



function Card() {
  const { movies, imgConf } = useFetch()
  return (
    <div className="container-movie-cards">
      {movies.map((item) => (
        <div className="movie-card"key={item.id}>
          <img src={imgConf + item.poster_path} alt="" />
          <div className="card-info">
            <Link to={`${item.id}`}><h3>{item.title}</h3></Link>
            <span>{item.release_date}</span>
            <p>{item.vote_average.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
