import React, { Component } from 'react';
import { UilPlus, UilTimes } from '@iconscout/react-unicons';

import TitlebarOptions from './titlebar/Options';
import { items } from "../constants/work";

class Work extends Component {
  render() {
    return (
      <div id="work" className="row">
        <div className="browser-titlebar">
          <div className="browser-tab">
            {items.title}
            <ul>
              <li><UilTimes /></li>
            </ul>
          </div>
          <div className="browser-space">
            <a target="_blank" rel="noopener noreferrer" href="/">
              <UilPlus />
            </a>
            <TitlebarOptions />
          </div>
        </div>
        <div className="browser-toolbar">
          <div className="browser-address-bar">
            {items.link}
          </div>
        </div>
        <div className="browser-content">
          <div></div>
          <div>
            <div className="browser-row">
              <div className="tech-stack-title">
                <h1>{items.tech.title}</h1>
              </div>
              {items.tech.content.map((item, i) =>
                <div key={i} className="tech-stack-content">
                  <h4>{item.title}</h4>
                  <p>{item.libraries}</p>
                  <p>{item.tools}</p>
                </div>
              )}
            </div>

            <div className="browser-row">
              <div className="other-skills-title">
                <h1>{items.misc.title}</h1>
              </div>
              <div className="other-skills-content">
                {items.misc.content.map((item, i) =>
                  <p key={i}>
                    {item}
                  </p>
                )}
              </div>
            </div>

            <div className="browser-row">
              <div className="projects-title">
                <h1>{items.projects.title}</h1>
              </div>
              <div className="projects-content">
                {items.projects.content.map((item, i) =>
                  <p key={i}>
                    {item}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div></div>

        </div>
      </div>
    );
  }
}

export default Work;
