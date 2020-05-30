import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div id="work" className="row">
        <div className="browser-titlebar">
          Tom's Portfolio
        </div>
        <div className="browser-address-bar">
          localhost:1234
        </div>
        <div className="browser-content">
          <div className="browser-row">
            <div className="tech-stack-title">
              <h1>Tech Stack</h1>
            </div>
            <div className="tech-stack-content">
              <h4>Python</h4>
              <p>Libraries: Django Framework, Django REST Framework</p>
            </div>
            <div className="tech-stack-content">
              <h4>Java</h4>
              <p>Libraries: Spring Framework</p>
            </div>
            <div className="tech-stack-content">
              <h4>Java</h4>
              <p>Libraries: Spring Framework</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
