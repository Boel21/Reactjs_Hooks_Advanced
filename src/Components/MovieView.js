import { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${apihere}8&include_adult=false&language=en-US&page=1 `;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "${Tokenhere}",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      })
      .catch((err) => console.error("error:" + err));
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading/..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
      return (
        <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />;
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-3">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
