import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyWord, searchResults }) => {
  const title = `You are searching for ${keyWord}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  return (
    <div>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </div>
  );
};

export default SearchView;
