import React, { Component } from 'react';

import { message, items } from "../constants/contact";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="row">
        <div className="contact-message">
          <h1>{message.title}</h1>
          {message.body}
        </div>
        <div className="contact-links">
          {items.map((item, i) =>
            <span>
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                {item.name}
              </a>
              &nbsp;
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
