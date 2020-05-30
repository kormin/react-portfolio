import React, { Component } from 'react';

import About from './About';

class Home extends Component {
  render() {
    return (
      // Home
      <div id="home" className="row">
        <div className="terminal-titlebar">
          <b>bash</b>
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
          <br />
          <About />
        </div>

      </div>
    );
  }
}

export default Home;
