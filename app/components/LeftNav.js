import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router';

import { Drawer, Badge, Menu, MenuItem, Divider } from 'material-ui';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettingsApplications from 'material-ui/svg-icons/action/settings-applications';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

export default class LeftNav extends Component {
  render() {
    var styles={
      leftDrawer: {
        backgroundColor:'#eee',
        boxShadow: 'none',
        overflowX: 'hidden',
        paddingTop: 56,
        zIndex: '1',
        maxWidth: 200,
        borderRight: '1px solid rgb(224, 224, 224)'
      },
    };

    return(
      <Drawer docked={true} open={true} containerStyle={styles.leftDrawer}>
        <Menu>
          <Divider />

          <Link to="/" activeClassName="activeLink">
            <MenuItem leftIcon={<ActionHome />}>Home</MenuItem>
          </Link>
          <Divider />

          <Link to="myGames" activeClassName="activeLink">
            <MenuItem leftIcon={<HardwareVideogameAsset />}>My Games<Badge secondary={true} className='installationsBadge' badgeContent={<span>{this.props.numInstallations}</span>} /></MenuItem>
          </Link>
          <Divider />

          <Link to="settings" activeClassName="activeLink">
            <MenuItem leftIcon={<ActionSettingsApplications />}>Settings</MenuItem>
          </Link>
          <Divider />
        </Menu>
      </Drawer>
    );
  }
}
