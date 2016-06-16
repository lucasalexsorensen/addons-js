import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Welcome to addons.js!</h2>
          <p>
            It looks like this is the first time you're using addons.js!
          </p>
          <br />
          <button>
            <Link to="/counter">Click to setup</Link>
          </button>
        </div>
      </div>
    );
  }
}
