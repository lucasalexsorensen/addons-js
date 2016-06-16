import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Header.css';


export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <ul>
          <li>
            <h3 className={styles.logo}>addons.js</h3>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
        </ul>
        <nav className={styles.btnSet}>
            <button className={styles.min}></button>
            <button className={styles.max}></button>
            <button className={styles.close}></button>
          </nav>
      </div>
    );
  }
}
