import React, { Component } from 'react';

export default class Settings extends Component {
  render() {
    var styles = {
      heading: {
        textAlign: 'center'
      }
    };

    return (
      <div>
        <h3 style={styles.heading}>Settings</h3>
      </div>
    );
  }
}
