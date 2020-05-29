import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      // Navigation
      <div id="header" className="row">
        <ul className="taskbar">
          <li className="active">
            <a href="#home">
              >tom_
            </a>
          </li>
          <li>
            <a href="#about">
              about
            </a>
          </li>
          <li>
            <a href="#work">
              work
            </a>
          </li>
          <li>
            <a href="#contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
