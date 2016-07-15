import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions/configureStepperState';
import { openConfigure, closeConfigure } from '../actions/toggleConfigureDialog'
import { openAddGame, closeAddGame } from '../actions/toggleNewGameDialog';
import { addGame, removeGame } from '../actions/gamesList';

import { Dialog, DropDownMenu, MenuItem, TextField, Avatar, RaisedButton, IconButton, FlatButton, Stepper, Step, StepLabel, StepContent, List, ListItem, Checkbox } from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class ConfigureDialog extends Component {
  renderStepButtons() {
    var styles = {
      label: {
        color: 'white'
      }
    };

    if (this.props.stepperState === 0) {
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
      },

      removeButton: {
        borderRadius: 2,
        backgroundColor: '#ef5350',
        float: 'right',
        cursor: 'pointer'
      }
    };

    if (this.props.games.length < 1){
      return (
        <div style={styles.container}>
          <span>No games found :(</span>
          <br/><br/>
        </div>
      );
    }else{
      return this.props.games.map((game) => {
        return (
          <div key={game.id} style={styles.container}>
            <ListItem disabled={true} leftAvatar={<Avatar style={{background: 'none'}}src={'assets/img/' + game.imageUrl}/>}>
              {game.name}
              <IconButton onClick={() => this.props.removeGame(game.id)} style={styles.removeButton} iconStyle={styles.removeIcon}>
                <NavigationClose color='white' />
              </IconButton>
            </ListItem>
            <br/>
          </div>
        );
      });
    }
  }

  filterResults(searchText, key) {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  }

  addGameClicked() {
    this.props.addGame({
      id: 3,
      disabled: false,
      name: "World of Warcraft: Legion",
      imageUrl: "WOWIcon.png",
      version: "Patch 7.0.3",
      path: "C:/Program Files/World of Warcraft",
      installedAddons: [
        {
          id: 8034,
          iconUrl: "",
          name: "Recount",
          status: "Up to Date",
          latestVersion: "4.0.5",
          downloads: 1532980
        },

        {
          id: 3093,
          iconUrl: "",
          name: "Skada",
          status: "Up to Date",
          latestVersion: "3.4b",
          downloads: 92082
        }
      ]
    });
    this.props.closeAddGame();
  }

  render() {
    var styles = {
      dialog: {

      },

      heading: {
        textAlign: 'center'
      },

      closeIcon: {
        position: 'absolute',
        right: 0,
        top: 5
      },

      stepContent: {
        textAlign: 'left'
      },

      closeButton: {
        color: 'white'
      },

      list: {
        //border: '1px solid #757575'
      },

      label: {
        color: 'white',
        width: '40%',
        marginLeft: 30
      }
    };

    return (
      <Dialog title='Configure addons.js' titleStyle={styles.heading} contentStyle={styles.dialog} autoScrollBodyContent={true} style={styles.dialog} open={this.props.configDialogState}>
        <IconButton onClick={() => this.props.closeConfigure()} style={styles.closeIcon}>
          <NavigationClose />
        </IconButton>

        <Stepper orientation={'vertical'} activeStep={this.props.stepperState}>
          <Step>
            <StepLabel>Locate game installations</StepLabel>
            <StepContent>
              <div>
                <h5>Games:</h5>
                <List style={styles.list}>
                  { this.renderGameInstallations() }
                  <RaisedButton onClick={() => this.props.openAddGame()} labelPosition={'before'} primary={true} style={styles.label} icon={<ContentAdd />}>
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
          <Step>
            <StepLabel>Third step</StepLabel>
            <StepContent>
              <div>
                <h6>Oyy lomao</h6>
                <br/>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Fourth step</StepLabel>
            <StepContent>
              <div>
                <h6>A le mao</h6>
                <br/>
                <RaisedButton primary={true} style={styles.closeButton} onClick={() => this.props.closeConfigure()}>Done</RaisedButton>
                <FlatButton onClick={() => this.props.decrement()}>Back</FlatButton>
              </div>
            </StepContent>
          </Step>
        </Stepper>

        <br/><br/><br/>

        <Dialog title="Add new game installation" titleStyle={styles.heading} autoScrollBodyContent={true} open={this.props.newGameDialogState}>
          <TextField
            hintText="Path to installation"
            fullWidth={true}
            underlineShow={true}
          />

          <DropDownMenu hintText="Select game type from list">
            <MenuItem label="World of Warcraft: Legion">World of Warcraft: Legion</MenuItem>
            <MenuItem label="The Elder Scrolls Online">The Elder Scrolls Online</MenuItem>
          </DropDownMenu>

          <br/><br/><br/>
          <RaisedButton primary={true} style={styles.closeButton} onClick={() => this.addGameClicked()}>Ayy</RaisedButton>
        </Dialog>

      </Dialog>
    );
  }
}

function mapStateToProps(state){
  return {
    games: state.gamesList,
    stepperState: state.configStepperState,
    configDialogState: state.toggleConfigureDialog,
    newGameDialogState: state.toggleNewGameDialog
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({increment: increment,
    decrement: decrement,
    openConfigure: openConfigure,
    closeConfigure: closeConfigure,
    openAddGame: openAddGame,
    closeAddGame: closeAddGame,
    addGame: addGame,
    removeGame: removeGame
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDialog);
