import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
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
    );
  }
}

export default Contact;
