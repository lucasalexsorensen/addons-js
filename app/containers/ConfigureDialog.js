import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions/configureStepperState';
import { openConfigure, closeConfigure } from '../actions/toggleConfigureDialog'

import { Dialog, Avatar, RaisedButton, FloatingActionButton, FlatButton, Stepper, Step, StepLabel, StepContent, List, ListItem, Checkbox } from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';

class ConfigureDialog extends Component {
  renderStepButtons() {
    var styles = {
      label: {
        color: 'white'
      }
    };

    if (this.props.stepperState === 0){
      return (
        <div>
          <RaisedButton primary={true} style={styles.label} onClick={() => this.props.increment()}>Next</RaisedButton>
        </div>
      );
    }else{
      return (
        <div>
          <RaisedButton primary={true} style={styles.label} onClick={() => this.props.increment()}>Next</RaisedButton>
          <FlatButton onClick={() => this.props.decrement()}>Back</FlatButton>
        </div>
      )
    }
  }

  renderGameInstallations() {
    var styles = {
      container: {
        marginLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
      }
    };

    if (this.props.games.length == 0){
      return (
        <div style={styles.container}>
          <span>No games found :(</span>
          <br/><br/>
        </div>
      );
    }

    return this.props.games.map((game) => {
      return (
        <div style={styles.container}>
          <ListItem leftAvatar={<Avatar style={{backgroundColor: 'white'}}src={'assets/img/' + game.imageUrl}/>}>
            {game.name}
          </ListItem>
        </div>
      );
    });
  }

  render() {
    var styles = {
      dialog: {
      },

      heading: {
        textAlign: 'center'
      },

      stepContent: {
        textAlign: 'left'
      },

      closeButton: {
        color: 'white'

      },

      list: {
        border: '1px solid #757575'
      },

      label: {
        color: 'white',
        width: '40%',
        marginLeft: 30
      }
    };

    return (
      <Dialog autoScrollBodyContent={true} style={styles.dialog} open={this.props.dialogState}>
        <h4 style={styles.heading}>Configure addons.js</h4>

        <Stepper orientation={'vertical'} activeStep={this.props.stepperState}>
          <Step>
            <StepLabel>Locate game installations</StepLabel>
            <StepContent>
              <div>
                <h6>Games:</h6>
                <List style={styles.list}>
                  { this.renderGameInstallations() }
                  <RaisedButton labelPosition={'before'} primary={true} style={styles.label} icon={<ContentAdd />}>
                    Add game installation
                  </RaisedButton>
                  <br/><br/>
                </List>
                <br/>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Second step</StepLabel>
            <StepContent>
              <div>
                <h6>Ayy lmao</h6>
                <br/>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
        </Stepper>
        <br/><br/><br/><br/>
        <RaisedButton primary={true} onClick={() => this.props.closeConfigure()} style={styles.closeButton}>Done</RaisedButton>
      </Dialog>
    );
  }
}

function mapStateToProps(state){
  return {
    games: state.gamesList,
    stepperState: state.configStepperState,
    dialogState: state.toggleConfigureDialog
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement, openConfigure: openConfigure, closeConfigure: closeConfigure}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDialog);
