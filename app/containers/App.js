import React, { Component, PropTypes } from 'react';

import Header from '../components/Header';
import LeftNav from '../components/LeftNav';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>


        <aside className="primary-aside">
          <LeftNav />
        </aside>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
