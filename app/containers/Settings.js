import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openConfigure } from '../actions/dialogs';

import { RaisedButton } from 'material-ui';
import ActionSettings from 'material-ui/svg-icons/action/settings';

class Settings extends Component {
  render() {
    var styles = {
      heading: {
        textAlign: 'center'
      },

      label: {
        color: 'white',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        width: '30%'
      }

    };

    return (
      <div>
        <h3 style={styles.heading}>Settings</h3>
        <br /><br />
        <RaisedButton onClick={() => this.props.openConfigure()} primary style={styles.label} icon={<ActionSettings color="white" />} label="Open settings window" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openConfigure }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
