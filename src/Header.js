import React from "react";
import Search from "./Search";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div id="first">
        <h1>Student Management</h1>
      </div>
      <div id="second">
        <Search />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
