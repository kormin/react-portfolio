import React, { Component } from 'react';

const menuItems = [
  {
    'name': '>tom_',
    'link': '#home'
  },
  {
    'name': 'about',
    'link': '#about'
  },
  {
    'name': 'work',
    'link': '#work'
  },
  {
    'name': 'contact',
    'link': '#contact'
  }
];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      active: menuItems[0].name
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) { 
    this.setState({ active: name });
  }

  render() {
    return (
      // Navigation
      <div id="header" className="row">
        <ul className="taskbar">
          {menuItems.map((menuItem, i) =>
            <li
              key={i}
              className={this.state.active === menuItem.name ? 'active' : ''} 
              onClick={this.handleClick.bind(this, menuItem.name)}
            >
              <a href={menuItem.link}>
                {menuItem.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Header;
