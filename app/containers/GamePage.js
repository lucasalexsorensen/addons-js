import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import AddonInstalledRow from '../components/AddonInstalledRow';

import { Tabs, Tab, Badge, Table, TableRow, TableRowColumn, TableBody, TableHeader, TableHeaderColumn } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DeviceStorage from 'material-ui/svg-icons/device/storage';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';

class GamePage extends Component {
  renderAddonRows() {
    return this.props.game.installedAddons.map((addon) => {
      return (
        <AddonInstalledRow
          id={addon.id}
          iconUrl={addon.iconUrl}
          name={addon.name}
          status={addon.status}
          latestVersion={addon.latestVersion}
          downloads={addon.downloads}
        />
      )
    });
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
        cursor: 'pointer'
      },

      heading: {
        textAlign: 'center'
      },

      tabContainer: {
        height: 70
      }
    };

    return(
      <div style={styles.container}>
        <Link to="/myGames">
          <NavigationArrowBack style={styles.backArrow} />
        </Link>
        <h4 style={styles.heading}>{this.props.game.name}</h4>
        <Tabs tabItemContainerStyle={styles.tabContainer}>
          <Tab label={<span>My Addons</span>} icon={<DeviceStorage />}>
            <Table multiSelectable={true} fixedHeader={true}>
              <TableHeader adjustForCheckBox={true}>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                  <TableHeaderColumn>Latest Version</TableHeaderColumn>
                  <TableHeaderColumn>Downloads</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody showRowHover={true} stripeRow={true}>
                {this.renderAddonRows()}
              </TableBody>
            </Table>
          </Tab>
          <Tab label={<span>Get Addons</span>} icon={<FileCloudDownload />}>

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
    game: currGame
  };
}

export default connect(mapStateToProps)(GamePage);
