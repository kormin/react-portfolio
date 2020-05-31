import React, { Component } from 'react';
import { UilMinus, UilSquareShape, UilMultiply } from '@iconscout/react-unicons';

import About from './About';

class Home extends Component {
  render() {
    return (
      // Home
      <div id="home" className="row">
        <div className="terminal-titlebar">
          <b>terminal</b>
          <ul className="titlebar-options">
            <li><UilMinus /></li>
            <li><UilSquareShape /></li>
            <li><UilMultiply /></li>
          </ul>
        </div>
        <div className="terminal-content">
          tom@desktop:~$ ./greet-visitor
          <h1>Hello, World!</h1>
          tom@desktop:~$ whoami
          <br />
          Tom
          <br />
          Web Developer
          <br />
          Currently building with Python
          <br /><br />
          <About />
        </div>

      </div>
    );
  }
}

export default Home;
