import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FlatButton, TextField, Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui';

class BrowseAllAddons extends Component {
  render() {
    var styles = {
      container: {
        paddingTop: 20
      },

      headerColumn: {
        color: 'white',
        borderRadius: 0
      }
    };

    return (
      <div style={styles.container}>
        <FlatButton style={{ position: 'fixed', marginTop: 0 }} href={`#/myGames/${this.props.game.id}/browse`} icon={<NavigationArrowBack color="black" />} label="to categories" />

        <h5 style={{ textAlign: 'center', marginTop: 5 }}>All Addons</h5>

        <Table height={'45vh'} fixedHeader>
          <TableHeader style={{ backgroundColor: 'rgb(0, 188, 212)' }} displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={styles.headerColumn}><b>Name</b></TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}><b>Status</b></TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}><b>Latest Version</b></TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}><b>Downloads</b></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover>
            {this.props.addonsBrowse.all.items.map((addon) => {
              return (
                <TableRow key={addon.UID} selectable={false} >
                  <TableRowColumn>{addon.UIName}</TableRowColumn>
                  <TableRowColumn>Not installed</TableRowColumn>
                  <TableRowColumn>{addon.UIVersion}</TableRowColumn>
                  <TableRowColumn>{addon.UIDownloadTotal}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      </div>
    );
  }
}

function mapStatetoProps(state, routerProps) {
  let currGame = null;
  for (let game of state.installationsList) {
    if (game.id == routerProps.params.id) {
      currGame = game;
      break;
    }
  }

  return {
    addonsBrowse: state.addonsBrowse,
    game: currGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAllFilter }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(BrowseAllAddons);
