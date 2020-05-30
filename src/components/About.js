import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="nano">
        tom@desktop:~$ nano about-me.txt
        <div className="nano-titlebar">
          File: /contact.txt
        </div>
        <span>
          I play computer games, read books, and watch movies and television shows.
          I enjoy the Pokemon games series.
          I've read all the Harry Potter books.
          I'm also interested in fitness.
        </span>
        <div className="nano-options">
          Save modified buffer? Y
        </div>
      </div>
    );
  }
}

export default About;
