import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateFilter } from '../actions/filterInstalledAddons';

import { Tabs, Tab, Avatar, Badge, IconButton, AutoComplete, Table, TableRow, TableRowColumn, TableBody, TableHeader, TableHeaderColumn } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DeviceStorage from 'material-ui/svg-icons/device/storage';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class GamePage extends Component {
  getSearchOptions() {
    return this.props.game.installedAddons.map((addon) => {
      return (addon.name)
    })
  }

  filterSearchOptions(searchText, key) {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  }

  handleUpdateInput(text){
    this.props.updateFilter(text);
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
        marginTop: 20,
        marginLeft: 20,
        cursor: 'pointer',
        zIndex: 999
      },

      gameAvatar: {
        backgroundColor: 'white'

      },

      heading: {
        textAlign: 'center'
      },

      searchField: {
        marginLeft: 25,
        width: '50%'
      },

      tabContainer: {
        height: 70
      },

      removeButton: {
        borderRadius: 2,
        backgroundColor: '#ef5350',
        float: 'right',
        zIndex: 999
      },

      removeIcon: {
        color: 'white'
      }
    };

    return(
      <div style={styles.container}>
        <Link to="/myGames">
          <NavigationArrowBack style={styles.backArrow} />
        </Link>
        <h4 style={styles.heading}>
          <Avatar size={35} style={styles.gameAvatar} src={'assets/img/' + this.props.game.imageUrl} />
          {this.props.game.name}
        </h4>
        <Tabs tabItemContainerStyle={styles.tabContainer}>
          <Tab label={<span>My Addons</span>} icon={<DeviceStorage />}>
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
                  if (addon.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1){
                    return (
                      <TableRow /*key={addon.id}*/>
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
                  }
                })}
              </TableBody>
            </Table>
          </Tab>


          <Tab label={<span>Get Addons</span>} icon={<FileCloudDownload />}>
            <h5>Fetching addons...</h5>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state, routerProps) {
  const { games } = state.gamesList;

  let currGame = null;
  for (let game of games){

    if (game.id == routerProps.params.gameId){
      currGame = game;
      break;
    }
  }

  return {
    game: currGame,
    filterText: state.filterInstalledAddons
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(GamePage);
