import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { singleMovie, imgConf } = useFetch();


  return (
    <div>
      {singleMovie && (
        <div className="w-50 p-5 text-justify">
          <h1 className="pt-2 mt-5">{singleMovie.title}</h1>
          {singleMovie.poster_path && (
            <img src={imgConf + singleMovie.poster_path} alt="" />
          )}
          <h2>{singleMovie.release_date}</h2>
          <p>{singleMovie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default MoviePage;
