import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      // Home
      <div>
        <img
          src="https://kormin.github.io/images/landing-xl.jpg"
          alt="desk"
          className="img-fluid"
        />

        <div className="container">
          <div id="about" className="row">
            <div className="col-sm" />
            <div className="col-sm">
              <h1>Hello, World!</h1>
              <p>
                I'm Tom, and I develop software.
                <br />
                I'm working as a Java Web Developer.
                <br />
                I've been using the Spring Framework.
              </p>
            </div>
            <div className="col-sm" />
          </div>

          <div id="interests" className="row">
            <div className="col-sm" />
            <div className="col-sm">
              <p>
                I play computer games, read books, and watch shows.
                <br />
                I enjoy the Pokemon games series. I've read all the Harry Potter
                books. I watch Game of Thrones.
                <br />
                I'm also interested in fitness.
              </p>
              <p>
                This is my portfolio website. It is currently under renovation.
              </p>
            </div>
            <div className="col-sm" />
          </div>

          <div id="skills" className="row">
            <div className="col-sm" />
            <div className="col-sm">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Skill</th>
                    <th scope="col">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Java</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>SQL</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>REST</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Spring</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>JUnit</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Git</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>Python</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>C/C++</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>Django</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Android</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm" />
          </div>

          {/* Contact */}
          <div id="contact" className="row">
            <div className="col-sm" />
            <div className="col-sm text-center">
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
            <div className="col-sm" />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
