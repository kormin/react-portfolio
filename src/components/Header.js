import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      // Navigation
      <div class="container">
        <nav class="nav">
          <a class="nav-link" href="/">
            Kormin
          </a>
          <a class="nav-link" href="#about">
            About
          </a>
          <a class="nav-link" href="#interests">
            Interests
          </a>
          <a class="nav-link" href="#skills">
            Skills
          </a>
          <a class="nav-link" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
