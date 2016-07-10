import React, { Component } from 'react';

import { AppBar } from 'material-ui';
import OsButtons from './OsButtons';

export default class Header extends Component {
  render() {
    var styles = {
      container: {
        zIndex: 10,
        position: 'fixed',
        width: '100%'
      },

      header: {
        boxShadow: 'none',
        height: '10%',
        maxHeight: 100,
        webkitAppRegion: 'drag'
      }
    };

    return(
      <div style={styles.container}>
        <AppBar title="addons.js"
                style={styles.header}
                touch={true}
                iconElementLeft={<div></div>}
                iconElementRight={<OsButtons />}>
        </AppBar>
      </div>
    );
  }
}
