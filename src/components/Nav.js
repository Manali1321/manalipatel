import React from "react";
class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="project">Project</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
export default Nav;