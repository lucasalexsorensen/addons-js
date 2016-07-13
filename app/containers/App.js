import React, { Component, PropTypes } from 'react';

import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import ConfigureDialog from '../containers/ConfigureDialog';

class App extends Component {
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
          <ConfigureDialog />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
