import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateAllFilter } from '../actions/addonsBrowse';

import { FlatButton, TextField, Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


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

        <div style={{ marginTop: '9%', position: 'fixed', width: '80vw', textAlign: 'center', display: (this.props.addonsBrowse.all.isFetching) ? 'block' : 'none' }} >
          <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <p>Fetching from MMOUI...</p>
        </div>

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
            {this.props.addonsBrowse.all.items.slice(0, 20).map((addon) => {
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
  return bindActionCreators({ updateAllFilter: updateAllFilter }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(BrowseAllAddons);
