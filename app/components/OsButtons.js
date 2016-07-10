import React, { Component } from 'react';

import { IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class OsButtons extends Component {
  render() {
    var styles = {
      container: {
        
      },

      icon: {
        color: 'white',
        webkitAppRegion: 'no-drag'
      }
    };

    return(
      <div className={styles.container}>
        <IconButton iconStyle={styles.icon}>
          <NavigationClose color="white" />
        </IconButton>
      </div>
    );
  }
}
