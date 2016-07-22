import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateInitSettings } from '../actions/initSettings';
import { updatePaths } from '../actions/pathScanner'

import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import ConfigureDialog from '../containers/ConfigureDialog';

class App extends Component {
  componentWillMount(){
    if (!this.props.initSettings.isSetting){
      this.props.updateInitSettings();
    }

    if (!this.props.pathScanner.isScanning){
      this.props.updatePaths();
    }
  }

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

function mapStateToProps(state) {
  return {
    numInstallations: state.installationsList.length,
    initSettings: state.initSettings,
    pathScanner: state.pathScanner
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateInitSettings: updateInitSettings, updatePaths: updatePaths}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
