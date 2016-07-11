import React, { Component, PropTypes } from 'react';

import { TableRow, TableRowColumn } from 'material-ui';

export default class AddonInstalledRow extends Component {
  static propTypes = {
    id: PropTypes.element.isRequired,
    iconUrl: PropTypes.element.isRequired,
    name: PropTypes.element.isRequired,
    status: PropTypes.element.isRequired,
    latestVersion: PropTypes.element.isRequired,
    downloads: PropTypes.element.isRequired
  }

  render() {

    return (
      <TableRow displayBorder={true}>
        <TableRowColumn>{this.props.name}</TableRowColumn>
        <TableRowColumn>{this.props.status}</TableRowColumn>
        <TableRowColumn>{this.props.latestVersion}</TableRowColumn>
        <TableRowColumn>{this.props.downloads}</TableRowColumn>
      </TableRow>
    );
  }
}
