import React, { Component } from 'react';

import { Link } from 'react-router';

class Home extends Component {


  render() {
    var styles = {
      heading: {
        textAlign: 'center'
      }
    };

    return (
      <div>
        <h3 style={styles.heading}>Welcome to addons.js!</h3>
        <br/>
        <h5 style={styles.heading}>
          <b>Looks like this the first time you're using addons.js!</b>
          <br/>
          Head on over to <Link to="settings"><b>Settings</b></Link> to get properly set up.
        </h5>
      </div>
    );
  }
}

export default Home;
