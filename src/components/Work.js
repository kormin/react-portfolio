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
          <table>
            <thead>
              <tr>
                <th scope="col">Skill</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Python</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Django</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Work;
