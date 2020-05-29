import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div>

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

          {/* Contact */}
          <div id="contact" className="row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:abaotom14@gmail.com"
            >
              email
            </a>
            &nbsp;|&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ph.linkedin.com/in/tom-abao-09b649113"
            >
              linkedin
            </a>
            &nbsp;|&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/kormin"
            >
              github
            </a>
          </div>

      </div>
    );
  }
}

export default Work;
