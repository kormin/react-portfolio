import React, { Component } from 'react';

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
          <div className="terminal-nano">
            tom@desktop:~$ nano about-me.txt
            <br />
            <span>
              I play computer games, read books, and watch movies and television shows.
              I enjoy the Pokemon games series.
              I've read all the Harry Potter books.
              I'm also interested in fitness.
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
