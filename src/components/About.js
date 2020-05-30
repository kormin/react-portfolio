import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="nano">
        tom@desktop:~$ nano about-me.txt
        <div className="nano-titlebar">
          File: /contact.txt
        </div>
        <div className="nano-content">
          I play computer games, read books, and watch movies and television shows.
          <br />
          I enjoy the Pokemon games series.
          <br />
          I've read all the Harry Potter books.
          <br />
          I'm also interested in fitness.
        </div>
        <div className="nano-options">
          Save modified buffer? Y
        </div>
      </div>
    );
  }
}

export default About;
