import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import { Paper } from 'material-ui';

export default class GameEntry extends Component {
  static propTypes = {
    id: PropTypes.element.isRequired,
    name: PropTypes.element.isRequired,
    imageUrl: PropTypes.element.isRequired
  };

  render() {
    var styles = {
      container: {
        flexBasis: '220',
        cursor: 'pointer'
      },

      paper: {
        width: '30%',
        minWidth: 190,
        minHeight: 220,
        maxWidth: 300,
        backgroundColor: '#e3f2fd',
        zIndex: 2,
        cursor: 'pointer'
      },

      gameImage: {
        width: '75%',
        paddingTop: '4%',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        pointerEvents: 'none'
      },

      gameTitle: {
        textAlign: 'center',
        fontSize: 18
      }
    };

    return (
      <li style={styles.container}>
        <Link to={'myGames/' + this.props.id}>
          <Paper style={styles.paper}>
            <img src={this.props.imageUrl} style={styles.gameImage}></img>
            <h5 style={styles.gameTitle}>{this.props.name}</h5>
          </Paper>
        </Link>
      </li>
    );
  }
}
