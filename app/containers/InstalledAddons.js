import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateFilter } from '../actions/filterInstalledAddons';

import { TextField, IconButton, Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class InstalledAddons extends Component {
  getSearchOptions() {
    return this.props.game.installedAddons.map((addon) => {
      return (addon.name);
    });
  }

  handleUpdateInput(event) {
    this.props.updateFilter(event.target.value);
  }

  filterSearchOptions(searchText, key) {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
  }

  render() {
    var styles = {
      searchField: {
        marginLeft: 25,
        width: '50%'
      },

      headerColumn: {
        color: 'white',
        borderRadius: 0
      }
    };

    return (
      <div>
        <TextField
          onChange={this.handleUpdateInput.bind(this)}
          value={this.props.filterText}
          hintText="Search names"
          underlineShow={true}
          style={styles.searchField}
        />
        <Table multiSelectable={false} fixedHeader={true}>
          <TableHeader style={{backgroundColor: 'rgb(0, 188, 212)'}} adjustForCheckBox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={styles.headerColumn}>Name</TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}>Status</TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}>Latest Version</TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}>Downloads</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.props.game.installedAddons.map((addon) => {
              return (
                <TableRow selectable={false} key={addon.id} style={{ display: (addon.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1) ? 'table-row' : 'none' }}>
                  <TableRowColumn>{addon.name}</TableRowColumn>
                  <TableRowColumn>{addon.status}</TableRowColumn>
                  <TableRowColumn>{addon.latestVersion}</TableRowColumn>
                  <TableRowColumn>
                    {addon.downloads}
                    <IconButton style={styles.removeButton} iconStyle={styles.removeIcon}>
                      <NavigationClose color="white" />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state, routerProps) {
  let currGame = null;
  for (let game of state.installationsList) {
    if (game.id == routerProps.params.id) {
      currGame = game;
      break;
    }
  }

  return {
    game: currGame,
    gamesMeta: state.gamesMeta,
    filterText: state.filterInstalledAddons
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateFilter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(InstalledAddons);
