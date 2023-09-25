import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const updateSearchText = (e) => {
    navigate("/search");
    setSearchText(e.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usestate">
                Use State Hook
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link" to="/usestateforms">
                Use State Forms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/axios">
                Axios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app2">
                Many Hooks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customhook" className="nav-link">
                Custom Hook
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/forms" className="nav-link">
                Forms
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
