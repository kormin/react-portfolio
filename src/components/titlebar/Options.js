import React, { Component } from 'react';
import { UilMinus, UilSquareShape, UilMultiply } from '@iconscout/react-unicons';

class Options extends Component {
  render() {
    return (
      <ul className="titlebar-options">
        <li><UilMinus /></li>
        <li><UilSquareShape /></li>
        <li><UilMultiply /></li>
      </ul>
    );
  }
}

export default Options;
