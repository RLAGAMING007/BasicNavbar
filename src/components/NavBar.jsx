import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <CustomLink to="/WatchNow">WatchNow</CustomLink>
          <CustomLink to="/Movies">Movies</CustomLink>
          <CustomLink to="/TVShows">TV Shows</CustomLink>
          <CustomLink to="/Sports">Sports</CustomLink>
          <CustomLink to="/Kids">Kids</CustomLink>
          <CustomLink to="/Library">Library</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div>
      <li>
        <Link
          className={isActive ? "items active" : "items"}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </li>
    </div>
  );
};
export default NavBar;
