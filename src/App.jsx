import React from "react";

const App = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-items">
            <a href="#watch-now">Watch Now</a>
          </li>
          <li className="nav__list-items">
            <a href="#movies">Movies</a>
          </li>
          <li className="nav__list-items">
            <a href="#tv-shows">TV Shows</a>
          </li>
          <li className="nav__list-items">
            <a href="#sports">Sports</a>
          </li>
          <li className="nav__list-items">
            <a href="#kids">Kids</a>
          </li>
          <li className="nav__list-items">
            <a href="#library">Library</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
