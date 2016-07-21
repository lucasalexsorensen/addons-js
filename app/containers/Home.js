import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router';
import { List, ListItem } from 'material-ui';

class Home extends Component {
  renderMessage() {
    var styles = {
      heading: {
        textAlign: 'center'
      }
    };

    if (this.props.initializer.settings.firstRun === true){
      return (
        <div>
          <h3 style={styles.heading}>Welcome to addons.js!</h3>
          <br />
          <h5 style={styles.heading}>
            <b>Looks like this the first time you're using addons.js!</b>
            <br />
            Head on over to <Link to="settings"><b>Settings</b></Link> to get properly set up.
          </h5>
        </div>
      );
    }else{
      return (
        <div>
          <br/>
          <h4 style={styles.heading}>Welcome back!</h4>

          <h5 style={{marginLeft: 60, fontWeight: 600, fontSize: 20}}>Changelog:</h5>
          <div style={{marginLeft: 30, display: 'flex', width: '60%', height: '100%', border: '1px solid #dedede'}}>
            <aside style={{width: 200}}>
              <List>
                <ListItem>0.1.0</ListItem>
                <ListItem>0.0.3</ListItem>
                <ListItem>0.0.2</ListItem>
                <ListItem>0.0.1</ListItem>
              </List>
            </aside>

            <main style={{flex: 1}}>
              <p>
                lorem ipsum <br/>
                asdjfsajdfas <br/>
                dfkidfjisd <br/>
                fjidfidjfdsjfdf <br/>
                dsfsdjfdsiofjsdfkjasipjfa
              </p>
            </main>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderMessage()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    initializer: state.initializer
  };
}

export default connect(mapStateToProps)(Home);
