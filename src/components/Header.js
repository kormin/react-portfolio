import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      // Navigation
      <div id="header" className="row">
        <ul className="nav">
          <li>
            <a href="#home">
              >tom_
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#work">
              Work
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
