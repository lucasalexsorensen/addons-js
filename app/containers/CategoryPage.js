import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCategoryPageFilter } from '../actions/addonsBrowse';

import { FlatButton, TextField, Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

class CategoryPage extends Component {
  componentDidMount(){

  }

  handleUpdateInput(event) {
    this.props.updateCategoryPageFilter(event.target.value);
  }

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
        marginTop: -5,
        cursor: 'pointer',
        zIndex: 999
      },

      backText: {
        marginTop: 1,
        marginLeft: 60,
        position: 'fixed',
        color: 'rgba(0, 0, 0, 0.87)'
      },

      headerColumn: {
        color: 'white',
        borderRadius: 0
      }
    };

    return (
      <div style={styles.container}>
        <FlatButton style={{position: 'fixed', marginTop: 0}} href={`#/myGames/${this.props.game.id}/browse`} icon={<NavigationArrowBack color='black' />} label="to categories" />

        <h5 style={{textAlign: 'center', marginTop: 5}}>{this.props.category.UICATTitle || "Cat not found"}</h5>

        <TextField
          onChange={this.handleUpdateInput.bind(this)}
          value={this.props.addonsBrowse.categories.pageFilter}
          hintText={`Search ${this.props.category.UICATTitle}`}
          inputStyle={{textAlign: 'center'}}
          underlineShow={true}
          fullWidth={false}
          style={{display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
        />

        <Table height={'45vh'} fixedHeader={true}>
          <TableHeader style={{backgroundColor: 'rgb(0, 188, 212)' }} displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={styles.headerColumn}><b>Name</b></TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}><b>Status</b></TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}><b>Latest Version</b></TableHeaderColumn>
              <TableHeaderColumn style={styles.headerColumn}><b>Downloads</b></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.props.addonsBrowse.all.categorized[this.props.category.UICATID].map((addon) => {
              return (
                <TableRow key={addon.UID} style={{display: (addon.UIName.toLowerCase().indexOf(this.props.addonsBrowse.categories.pageFilter) !== -1) ? 'table-row' : 'none'}}>
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
  for (let game of state.installationsList){
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateCategoryPageFilter: updateCategoryPageFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
