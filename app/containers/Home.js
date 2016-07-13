import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions/homeStepperState';
import { openConfigure } from '../actions/toggleConfigureDialog';

import { Stepper, Step, StepLabel, StepButton, StepContent, FlatButton, RaisedButton } from 'material-ui';

import ActionSettings from 'material-ui/svg-icons/action/settings';

class Home extends Component {
  renderStepButtons() {
    var styles = {
      label: {
        color: 'white'
      }
    };

    if (this.props.stepperState > 0) {
      return (
        <div>
          <RaisedButton onClick={() => this.props.increment() } stye={styles.label} primary={true}>Next</RaisedButton>
          <FlatButton onClick={() => this.props.decrement()}>Back</FlatButton>
        </div>
      );
    }else{
      return (
        <div>
          <RaisedButtrecat-rouon onClick={() => this.props.increment() } stye={styles.label} primary={true}>Next</RaisedButtrecat-rouon>
        </div>
      );
    }
  }
  render() {
    var styles = {
      heading: {
        textAlign: 'center'
      },

      stepContent: {
        textAlign: 'left'
      }
    };

    return (
      <div>
        <h3 style={styles.heading}>Welcome to addons.js!</h3>
        <br/><br/><br/>
        <RaisedButton onClick={() => this.props.openConfigure()} primary={true} style={{marginRight: 'auto', marginLeft: 'auto', display: 'block', width: '20%'}} icon={<ActionSettings color='black' />}>Configure</RaisedButton>
        <Stepper orientation={'vertical'} activeStep={this.props.stepperState}>
          <Step>
            <StepLabel>Configure game settings</StepLabel>
            <StepContent style={styles.stepContent}>
              <div>
                <p>
                  This is where the step instructions would go.
                </p>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Addon DBs</StepLabel>
            <StepContent style={styles.stepContent}>
              <div>
                <p>
                  Second step, lorem ipsum.
                </p>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stepperState: state.homeStepperState
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement, openConfigure: openConfigure}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
