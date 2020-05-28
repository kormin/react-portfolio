import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      // Navigation
      <div className="container">
        <nav className="nav">
          <a className="nav-link" href="/">
            Kormin
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#interests">
            Interests
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
