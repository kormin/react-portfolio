import React, { Component } from 'react';

import { homeItems } from '../constants/home';

class About extends Component {
  render() {
    return (
      <div className="nano">
        <span className="terminal-user">{homeItems.user.name}</span>
        <span className="terminal-command">{homeItems.user.colon}</span>
        <span className="terminal-directory">{homeItems.user.tilde}</span>
        <span className="terminal-command">{homeItems.user.dollar + homeItems.commands.about}</span>
        <div className="nano-titlebar">
          {homeItems.about.title}
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
          {homeItems.about.options}
        </div>
      </div>
    );
  }
}

export default About;
