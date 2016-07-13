import React, { Component } from 'react';

export default class PageLayout extends Component {
  render() {
    var styles = {
      container: {
        paddingTop: 20
      }
    }

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
