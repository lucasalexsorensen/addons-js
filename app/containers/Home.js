import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openConfigure } from '../actions/toggleConfigureDialog';

import { Stepper, Step, StepLabel, StepButton, StepContent, FlatButton, RaisedButton } from 'material-ui';

import ActionSettings from 'material-ui/svg-icons/action/settings';

class Home extends Component {


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
        <h3 style={styles.heading}>Welcome to addons.js!</h3>
        <br/>
        <RaisedButton onClick={() => this.props.openConfigure()} primary={true} style={styles.label} icon={<ActionSettings color='white' />}>
          Configure
        </RaisedButton>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({openConfigure: openConfigure}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
