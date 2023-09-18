import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="Add">
        <li>Add Record</li>
      </Link>
      <Link to="About">
        <li>About</li>
      </Link>
    </ul>
  );
};

export default Nav;
