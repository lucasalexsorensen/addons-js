import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

class CategoryPage extends Component {
  render() {
    var styles = {
      container: {
        paddingTop: 20
      },

      backArrow: {
        width: 30,
        height: 30,
        position: 'fixed',
        marginLeft: 30,
        marginTop: 4,
        cursor: 'pointer',
        zIndex: 999
      }
    };

    return (
      <div style={styles.container}>
        <Link to={`/myGames/${this.props.game.id}/browse`}>
          <NavigationArrowBack style={styles.backArrow} />
        </Link>
        <h5 style={{textAlign: 'center'}}>{this.props.category.UICATTitle || "Cat not found"}</h5>
        <Table height={'40vh'} fixedHeader={true}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn><b>Name</b></TableHeaderColumn>
              <TableHeaderColumn><b>Status</b></TableHeaderColumn>
              <TableHeaderColumn><b>Latest Version</b></TableHeaderColumn>
              <TableHeaderColumn><b>Downloads</b></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.props.addonsBrowse.all.items.slice(0,20).map((addon) => {
              return (
                <TableRow key={addon.UID}>
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
    )
  }
}

function mapStateToProps(state, routerProps){
  let currCategory = null;
  let currGame = null;
  for (let category of state.addonsBrowse.categories.items) {
    if (category.UICATID == routerProps.params.catId) {
      currCategory = category;
      break;
    }
  }
  for (let game of state.gamesList){
    if (game.id == routerProps.params.id) {
      currGame = game;
      break;
    }
  }

  return {
    category: currCategory,
    game: currGame,
    addonsBrowse: state.addonsBrowse
  }
}

export default connect(mapStateToProps)(CategoryPage);
