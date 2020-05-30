import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div id="work" className="row">
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
    );
  }
}

export default Work;
