import React from "react";
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="project">Project</Link></li>
          <li><Link to="blog">Blog</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}
export default Nav;