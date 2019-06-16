import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
  render() {
    return (
      <section>
        <h2>
          <Link to="/about">About Pages</Link>
        </h2>
        <h2>
          <Link to="/random-gify">Random Gify </Link>
        </h2>
      </section>
    );
  }
}
