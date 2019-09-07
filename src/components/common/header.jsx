import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="app__header">
      <img
        className="app__header-logo"
        src={logo}
        width="60"
        height="66"
        alt=""
      />
    </header>
  );
};

export default Header;
