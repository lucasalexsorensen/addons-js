import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameEntry from '../components/GameEntry';

import { AutoComplete } from 'material-ui';

class MyGames extends Component {
  filterResults(searchText, key) {
    return /*searchText !== '' &&*/key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  }

  createGameEntries() {
    return this.props.games.map((game) => {
      return (
        <GameEntry id={game.id} name={game.name} imageUrl={game.imageUrl} />
      )
    });
  }

  getSearchOptions() {
    return this.props.games.map((game) => {
      return (game.name)
    });
  }

  render() {
    var games = this.getSearchOptions();

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
        webkitFlexFlow: 'row wrap',
        justifyContent: 'flex-start',
        alignContent: 'center'
      }
    };

    return (
      <div style={styles.container}>
        <h4 style={styles.heading}>My Games</h4>
        <AutoComplete
          dataSource={games}
          hintText="Search games"
          openOnFocus={false}
          underlineShow={false}
          fullWidth={true}
          filter={this.filterResults}
        />
        <ul style={styles.entriesContainer}>
          {this.createGameEntries()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { games } = state.gamesList;

  return {
    games: games
  };
}

export default connect(mapStateToProps)(MyGames);
