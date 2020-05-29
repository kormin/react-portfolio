import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      // Navigation
      <div className="row">
        <ul className="nav">
          <li>
            <a className="nav-link" href="#home">
              >tom_
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
