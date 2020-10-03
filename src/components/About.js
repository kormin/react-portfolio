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
          {homeItems.about.content.map((item, i) =>
            <span key={i}>
              {item}
              <br />
            </span>
          )}
        </div>
        <div className="nano-options">
          {homeItems.about.options}
        </div>
      </div>
    );
  }
}

export default About;
