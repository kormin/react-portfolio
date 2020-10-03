import React, { Component } from 'react';

import About from './About';
import TitlebarOptions from './titlebar/Options';
import { homeItems } from '../constants/home';

class Home extends Component {
  render() {
    return (
      // Home
      <div id="home" className="row">
        <div></div>
        <div>
          <div className="terminal-titlebar">
            <b>{homeItems.title}</b>
            <TitlebarOptions />
          </div>
          <div className="terminal-content">
            <span className="terminal-user">{homeItems.user.name}</span>
            <span className="terminal-command">{homeItems.user.colon}</span>
            <span className="terminal-directory">{homeItems.user.tilde}</span>
            <span className="terminal-command">{homeItems.user.dollar + homeItems.commands.greet}</span>
            <h1>{homeItems.output.hello}</h1>

            <span className="terminal-user">{homeItems.user.name}</span>
            <span className="terminal-command">{homeItems.user.colon}</span>
            <span className="terminal-directory">{homeItems.user.tilde}</span>
            <span className="terminal-command">{homeItems.user.dollar + homeItems.commands.owner}
            <br />
            {homeItems.output.name}
            <br />
            {homeItems.output.position}
            <br />
            {homeItems.output.current}
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
