import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="row">
        <div className="contact-message">
          <h1>Want to collaborate?</h1>
          Here's my contact info.
        </div>
        <div className="contact-links">
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
            href="https://github.com/tabao-fs"
          >
            github
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
