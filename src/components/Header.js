import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src="./image/logo.jpeg" alt='logo' className="logo"></img>
        <Nav />
      </header>);
  }
}
export default Header;