import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import MovieView from "./Components/MovieView";
import SearchView from "./Components/SearchView";
import { useState, useEffect } from "react";
import StateHook from "./Components/StateHook";
import FormsUseState from "./Components/FormsUseState";
import Axios from "./Components/Axios";
import App2 from "./Components/App2";
import CustomHook from "./Components/CustomHook";
import Forms from "./Components/Forms";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apihere}&include_adult=false&language=en-US&query=${searchText}&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "${tokenhere}",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((err) => console.error("error:" + err));
    }
  }, [searchText]);
  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/usestate" element={<StateHook />} />
        <Route path="/usestateforms" element={<FormsUseState />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/customhook" element={<CustomHook />} />
        <Route path="/Forms" element={<Forms />} />
        <Route
          path="/search"
          element={
            <SearchView keyWord={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
