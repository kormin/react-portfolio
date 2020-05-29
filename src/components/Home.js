import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      // Home
      <div>

        <div>
          <div id="about" className="row">
            <h1>Hello, World!</h1>
            <p>
              I'm Tom.
              <br />
              I'm a Web Developer.
            </p>
          </div>

          <div id="work" className="row">
            <table className="table table-borderless">
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
      </div>
    );
  }
}

export default Home;
