import React, { useState } from "react";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState("avengers");
  const [type, setType] = useState("all");

  const  handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return(
    <div className="search-content">
      <div className="item">
          <input 
            placeholder="Search" 
            type="email" 
            className="val"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
            required
            />
            <button
              className="btn" 
              onClick={() => searchMovies(search, type)}>
                search
            </button>
      </div>
      <div className="radio-btn">
        <div>
          <label>
            <input 
              type="radio" 
              className="with-gap" 
              name="type" 
              data-type="all" 
              onChange={handleFilter}
              checked={type === "all"}
                />
            <span>All</span>
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              className="with-gap" 
              name="type" 
              data-type="movie" 
              onChange={handleFilter}
              checked={type === "movie"}
                />
            <span>Movies only</span>
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio" 
              className="with-gap" 
              name="type" 
              data-type="series" 
              onChange={handleFilter}
              checked={type === "series"}
                />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
}