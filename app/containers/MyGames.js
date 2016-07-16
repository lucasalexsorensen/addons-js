import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFilter } from '../actions/filterGames';

import GameEntry from '../components/GameEntry';

import { TextField } from 'material-ui';

class MyGames extends Component {
  createGameEntries() {
    return this.props.games.map((game) => {
      if (game.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
        || this.props.gamesMeta[game.gameId].name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1){
        return (
          <GameEntry
            key={game.id}
            id={game.id}
            name={game.name}
            version={this.props.gamesMeta[game.gameId].version}
            gameName={this.props.gamesMeta[game.gameId].name}
            imageUrl={this.props.gamesMeta[game.gameId].imageUrl} />
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
        <ul style={styles.entriesContainer}>
          {this.createGameEntries()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.gamesList,
    gamesMeta: state.gamesMeta,
    filterText: state.filterGamesText
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyGames);
