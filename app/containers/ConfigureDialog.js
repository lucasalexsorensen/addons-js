import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions/configStepperState';
import { openConfigure, closeConfigure } from '../actions/toggleConfigureDialog'
import { openAddGame, closeAddGame } from '../actions/toggleNewGameDialog';
import { addGame, removeGame } from '../actions/gamesList';
import { updateGameType, updateGamePath, updateGameName } from '../actions/configNewInstallationForm';

import { Dialog, SelectField, Divider, MenuItem, AutoComplete, TextField, Avatar, RaisedButton, IconButton, FlatButton, Stepper, Step, StepLabel, StepContent, List, ListItem, Checkbox } from 'material-ui';

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
        width: 30,
        backgroundColor: '#ef5350',
        float: 'right',
        cursor: 'pointer'
      }
    };

    if (this.props.games.length < 1){
      return (
        <div style={styles.container}>
          <br/>
          <span>No games found :(</span>
          <br/><br/>
        </div>
      );
    }else{
      return this.props.games.map((game, index) => {
        return (
          <div key={index} style={styles.container}>
            <Divider />
            <ListItem disabled={true} leftAvatar={<Avatar style={{background: 'none'}}src={'assets/img/' + this.props.gamesMeta[game.gameId].imageUrl}/>}>
              <IconButton onClick={() => this.props.removeGame(index)} style={styles.removeButton} iconStyle={styles.removeIcon}>
                <NavigationClose color='white' />
              </IconButton>
              {this.props.gamesMeta[game.gameId].name}
              <br/>
              <br/>
              {game.path}
            </ListItem>
            <br/>
          </div>
        );
      });
    }
  }

  handleTypeChange = (event, index, value) => this.props.updateGameType(value);

  handlePathChange = (value) => this.props.updateGamePath(value);

  handleNameChange = (event) => this.props.updateGameName(event.target.value);

  getPathOptions() {
    if (this.props.newFormState.gameTypeId === null){
      return [];
    }else{
      return this.props.gamesMeta[this.props.newFormState.gameTypeId].suggestedPaths.map((path) => {
         return path;
      });
    }
  }

  addGame() {
    this.props.addGame({
      gameId: this.props.newFormState.gameTypeId,
      path: this.props.newFormState.gamePath,
      name: this.props.newFormState.gameName,
      disabled: false
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
            <StepLabel>Configuration</StepLabel>
            <StepContent>
              <div>
                <h6>Welcome to the configuration wizard. Let's get you properly set up!</h6>
                <br/>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Locate game installations</StepLabel>
            <StepContent>
              <div>
                <h5>Games installations:</h5>
                <List style={styles.list}>
                  <Divider />
                  { this.renderGameInstallations() }
                  <Divider />
                </List>
                <br/>
                <RaisedButton onClick={() => this.props.openAddGame()} labelPosition={'before'} primary={true} style={styles.label} icon={<ContentAdd />}>
                  Add game installation
                </RaisedButton>
                <br/><br/><br/>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Addon DBs</StepLabel>
            <StepContent>
              <div>
                <h6>Select addon DBs:</h6>
                <List>
                  <ListItem disabled={false} leftCheckbox={<Checkbox defaultChecked={true} />}>MMOui.org</ListItem>
                </List>
                <br/>
                { this.renderStepButtons() }
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Finishing up</StepLabel>
            <StepContent>
              <div>
                <h6><b>Looks like everything is good to go!</b><br/>Remember, these settings can always be modified later through the Settings pane.</h6>
                <br/>
                <RaisedButton primary={true} style={styles.closeButton} onClick={() => this.props.closeConfigure()}>Done</RaisedButton>
                <FlatButton onClick={() => this.props.decrement()}>Back</FlatButton>
              </div>
            </StepContent>
          </Step>
        </Stepper>

        <br/><br/><br/>

        <Dialog title="Add new game installation" titleStyle={styles.heading} autoScrollBodyContent={true} open={this.props.newGameDialogState}>
          <IconButton onClick={() => this.props.closeAddGame()} style={styles.closeIcon}>
            <NavigationClose />
          </IconButton>

          <SelectField
            value={this.props.newFormState.gameTypeId}
            onChange={this.handleTypeChange.bind(this)}
            floatingLabelText="Game type"
            floatingLabelFixed={true}
            hintText="Select game type from list"
          >
            <MenuItem value={0} primaryText="World of Warcraft: Legion" />
            <MenuItem value={1} primaryText="The Elder Scrolls Online" />
          </SelectField>
          <br/>
          <AutoComplete
            searchText={this.props.newFormState.gamePath}
            dataSource={this.getPathOptions()}
            onNewRequest={this.handlePathChange.bind(this)}
            onUpdateInput={this.handlePathChange.bind(this)}
            filter={() => {return true}}
            openOnFocus={true}
            floatingLabelText="Game path"
            floatingLabelFixed={true}
            hintText="Path to installation"
            fullWidth={false}
            underlineShow={false}
            menuStyle={{width: 400}}
            listStyle={{width: 400}}
          />
          <br/>
          <TextField
            onChange={this.handleNameChange.bind(this)}
            value={this.props.newFormState.gameName}
            floatingLabelText="Game instance name"
            floatingLabelFixed={true}
            hintText="Name for game instance"
            fullWidth={true}
            underlineShow={false}
            inputStyle={{width: 400}}
          />
          <br/><br/><br/><br/>
          <RaisedButton primary={true} style={styles.closeButton} onClick={() => this.addGame()}>Add</RaisedButton>
          <FlatButton onClick={() => this.props.closeAddGame()}>Close</FlatButton>
        </Dialog>

      </Dialog>
    );
  }
}

function mapStateToProps(state){
  return {
    games: state.gamesList,
    gamesMeta: state.gamesMeta,
    newFormState: state.configNewInstallationForm,
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
    removeGame: removeGame,
    updateGameType: updateGameType,
    updateGamePath: updateGamePath,
    updateGameName: updateGameName
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureDialog);
