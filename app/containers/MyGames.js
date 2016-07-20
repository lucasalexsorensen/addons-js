import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFilter } from '../actions/filterGames';

import GameEntry from '../components/GameEntry';

import { TextField } from 'material-ui';

class MyGames extends Component {
  createGameEntries() {
    return this.props.installations.map((installation) => {
      if (installation.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
        || this.props.gamesMeta[installation.gameId].name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1){
        return (
          <GameEntry
            key={installation.id}
            id={installation.id}
            name={installation.name}
            version={this.props.gamesMeta[installation.gameId].version}
            gameName={this.props.gamesMeta[installation.gameId].name}
            imageUrl={this.props.gamesMeta[installation.gameId].imageUrl} />
        )
      }
    });
  }

  handleUpdateInput(event) {
    this.props.updateFilter(event.target.value);
  }

  render() {
    var styles = {
      container: {
        width: '90%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      },

      heading: {
        textAlign: 'center'
      },

      entriesContainer: {
        listStyle: 'none',
        marginTop: '3%',
        display: 'inline-flex',
        WebkitFlexFlow: 'row wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
      }
    };

    return (
      <div style={styles.container}>
        <h4 style={styles.heading}>My Games</h4>
        <TextField
          onChange={this.handleUpdateInput.bind(this)}
          value={this.props.filterText}
          hintText="Search games"
          underlineShow={true}
          fullWidth={true}
        />
        <span style={{marginTop: 45, fontSize: 20, textAlign: 'center', display: (this.props.installations.length > 0) ? 'none' : 'block'}}><b>No installations found :(</b><br/>Add game installations in the settings pane to get started!</span>
        <ul style={styles.entriesContainer}>
          {this.createGameEntries()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    installations: state.installationsList,
    gamesMeta: state.gamesMeta,
    filterText: state.filterGamesText
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyGames);
