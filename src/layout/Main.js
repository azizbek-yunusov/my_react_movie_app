import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default function Main() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=34c04d3a&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setMovies(data.Search);
      });
  };
  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=34c04d3a&s=avengers")
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setMovies(data.Search);
      });
  }, []);

  return(
    <div className="container content">
        <Search searchMovies={searchMovies} />
        {loading ? <Loader /> : (<Movies movies={movies} />) }
    </div>
  );
}
