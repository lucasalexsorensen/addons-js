import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFilter } from '../actions/filterGames';

import GameEntry from '../components/GameEntry';

import { AutoComplete } from 'material-ui';

class MyGames extends Component {
  filterResults(searchText, key) {
    return /*searchText !== '' &&*/key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  }

  createGameEntries() {
    return this.props.games.map((game) => {
      if (game.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1){
        return (
          <GameEntry id={game.id} name={game.name} version={game.version} imageUrl={game.imageUrl} />
        )
      }
    });
  }

  getSearchOptions() {
    return this.props.games.map((game) => {
      return (game.name)
    });
  }

  handleUpdateInput(text) {
    this.props.updateFilter(text);
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
        webkitFlexFlow: 'row wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
      }
    };

    let searchOptions = this.getSearchOptions();

    return (
      <div style={styles.container}>
        <h4 style={styles.heading}>My Games</h4>
        <AutoComplete
          onUpdateInput={this.handleUpdateInput.bind(this)}
          onNewRequest={this.handleUpdateInput.bind(this)}
          searchText={this.props.filterText}
          dataSource={searchOptions}
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
    games: games,
    filterText: state.filterGamesText
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyGames);
