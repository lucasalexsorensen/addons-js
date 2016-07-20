import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateFilter } from '../actions/filterInstalledAddons';

import { AutoComplete, IconButton, Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class InstalledAddons extends Component {
  getSearchOptions() {
    return this.props.game.installedAddons.map((addon) => {
      return (addon.name)
    })
  }

  handleUpdateInput(text){
    this.props.updateFilter(text);
  }

  filterSearchOptions(searchText, key) {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  }

  render() {
    var styles = {
      searchField: {
        marginLeft: 25,
        width: '50%'
      }
    };

    return(
      <div>
        <AutoComplete
          onNewRequest={this.handleUpdateInput.bind(this)}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          searchText={this.props.filterText}
          hintText="Search names"
          dataSource={this.getSearchOptions()}
          underlineShow={false}
          filter={this.filterSearchOptions}
          style={styles.searchField}
        />
        <Table multiSelectable={true} fixedHeader={true}>
          <TableHeader adjustForCheckBox={true}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Latest Version</TableHeaderColumn>
              <TableHeaderColumn>Downloads</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
            {this.props.game.installedAddons.map((addon) => {
              return (
                <TableRow key={addon.id} style={{display: (addon.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1) ? 'table-row' : 'none'}}>
                  <TableRowColumn>{addon.name}</TableRowColumn>
                  <TableRowColumn>{addon.status}</TableRowColumn>
                  <TableRowColumn>{addon.latestVersion}</TableRowColumn>
                  <TableRowColumn>
                    {addon.downloads}
                    <IconButton style={styles.removeButton} iconStyle={styles.removeIcon}>
                      <NavigationClose color='white' />
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

function mapStateToProps(state, routerProps){
  let currGame = null;
  for (let game of state.installationsList){
    if (game.id == routerProps.params.id){
      currGame = game;
      break;
    }
  }

  return {
    game: currGame,
    gamesMeta: state.gamesMeta,
    filterText: state.filterInstalledAddons
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(InstalledAddons);
