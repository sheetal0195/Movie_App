import React, { useEffect, useState } from "react";
import MovieCard from "./Movie_Card.js";
import "./App.css";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    getMovieData(FEATURED_API);
  }, []);

  const getMovieData = (API) => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((resp) => resp.json())
        .then((data) => {
          setData(data.results);
        });
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <header className="header">
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="container">
        {data.map((element) => {
          return <MovieCard key={element.id} {...element} />;
        })}
      </div>
    </div>
  );
};

export default App;
