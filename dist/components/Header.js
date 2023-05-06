import React from "react";
import Nav from "./Nav";
class Header extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("img", {
      src: "./image/logo.jpeg",
      alt: "logo",
      className: "logo"
    }), /*#__PURE__*/React.createElement(Nav, null));
  }
}
export default Header;