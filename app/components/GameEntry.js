import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Paper } from 'material-ui';

export default class GameEntry extends Component {
  static propTypes = {
    id: PropTypes.element.isRequired,
    name: PropTypes.element.isRequired,
    imageUrl: PropTypes.element.isRequired,
    version: PropTypes.element.isRequired
  };

  render() {
    var styles = {
      container: {
        flexBasis: '220',
        cursor: 'pointer',
        margin: 10
      },

      paper: {
        width: '30%',
        minWidth: 190,
        minHeight: 220,
        maxWidth: 300,
        backgroundColor: '#e3f2fd',
        zIndex: 2,
        cursor: 'pointer',
        display: 'table-cell',
      },

      gameImage: {
        minHeight: 180,
        width: '75%',
        paddingTop: '4%',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        pointerEvents: 'none',
        objectFit: 'contain'
      },

      gameTitle: {
        textAlign: 'center',
        fontSize: 18
      },

      gameVersion: {
        textAlign: 'left',
        verticalAlign: 'bottom'
      }
    };

    return (
      <li style={styles.container}>
        <Link to={'myGames/' + this.props.id}>
          <Paper style={styles.paper}>
            <img src={'../assets/img/' + this.props.imageUrl} style={styles.gameImage}></img>
            <h5 style={styles.gameTitle}>{this.props.name}</h5>
            <h6 style={styles.gameVersion}>{this.props.version}</h6>
          </Paper>
        </Link>
      </li>
    );
  }
}
