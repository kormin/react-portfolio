import React, { Component } from 'react';

import About from './About';
import TitlebarOptions from './titlebar/Options';

class Home extends Component {
  render() {
    return (
      // Home
      <div id="home" className="row">
        <div></div>
        <div>
          <div className="terminal-titlebar">
            <b>terminal</b>
            <TitlebarOptions />
          </div>
          <div className="terminal-content">
            <span className="terminal-user">tom@desktop</span>
            <span className="terminal-command">:</span>
            <span className="terminal-directory">~</span>
            <span className="terminal-command">$ ./greet-visitor</span>
            <h1>Hello, World!</h1>

            <span className="terminal-user">tom@desktop</span>
            <span className="terminal-command">:</span>
            <span className="terminal-directory">~</span>
            <span className="terminal-command">$ whoami
            <br />
            Tom
            <br />
            Web Developer
            <br />
            Currently building with Python
            <br /><br />
            </span>

            <About />
          </div>
        </div>
        <div></div>

      </div>
    );
  }
}

export default Home;
