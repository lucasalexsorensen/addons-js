import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

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
          <LeftNav numInstallations={this.props.numInstallations} />
        </aside>

        <main>
          <ConfigureDialog />
          {this.props.children}
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    numInstallations: state.installationsList.length
  }
}

export default connect(mapStateToProps)(App);
