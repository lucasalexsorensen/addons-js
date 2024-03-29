import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Paper } from 'material-ui';

export default class GameEntry extends Component {
  render() {
    var styles = {
      container: {
        flexBasis: 220,
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
        minHeight: 190,
        width: '75%',
        paddingTop: '4%',
        paddingBottom: '4.5%',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        pointerEvents: 'none',
        objectFit: 'contain'
      },

      gameTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17
      },

      name: {
        fontSize: 15,
        textAlign: 'center'
      },

      gameVersion: {
        fontSize: 15,
        textAlign: 'center',
        verticalAlign: 'bottom',
        marginBottom: 10
      }
    };

    return (
      <li style={styles.container}>
        <Link to={'myGames/' + this.props.id}>
          <Paper style={styles.paper}>
            <img src={'assets/img/' + this.props.imageUrl} style={styles.gameImage} />
            <h5 style={styles.gameTitle}>{this.props.gameName}</h5>
            <h6 style={styles.name}>{this.props.name}</h6>
            <h6 style={styles.gameVersion}>{this.props.version}</h6>
          </Paper>
        </Link>
      </li>
    );
  }
}
