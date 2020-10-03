import React, { Component } from 'react';

import { items } from "../constants/contact";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="row">
        <div className="contact-message">
          <h1>Want to collaborate?</h1>
          Here's my contact info.
        </div>
        <div className="contact-links">
          {items.map((item, i) =>
            <a
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
            >
              {item.name}
              &nbsp;
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
