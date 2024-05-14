import Carousel from "react-bootstrap/Carousel";
import useFetch from "../hooks/useFetch";

function ImgCarousel() {
  const { movies, imgConfCarousel } = useFetch();

  if (!movies || movies.length === 0) {
    return;
  }

  return (
    <>
      <Carousel fade>
        {movies.slice(0, 3).map((movie, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={imgConfCarousel + movie.poster_path}
                alt=""
                className="img-fluid"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ImgCarousel;
