import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { routerActions } from 'react-router-redux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Avatar } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

class GamePage extends Component {
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
        background: 'none',
        verticalAlign: 'bottom'
      }

    };

    let isInstalledActive = this.context.router.isActive({ pathname: '/myGames/GAMEID/installed'.replace('GAMEID', this.props.game.id) }, false);
    let isBrowseActive = this.context.router.isActive({ pathname: '/myGames/GAMEID/browse'.replace('GAMEID', this.props.game.id) }, false);

    return(
      <div style={styles.container}>
        <Link to="/myGames">
          <NavigationArrowBack style={styles.backArrow} />
        </Link>
        <h4 style={{textAlign: 'center', fontWeight: 700}}>
          <Avatar size={40} style={styles.gameAvatar} src={'assets/img/' + this.props.gamesMeta[this.props.game.gameId].imageUrl} />
          {this.props.gamesMeta[this.props.game.gameId].name}
        </h4>
        <h5 style={{textAlign: 'center', marginTop: -8}}>{this.props.game.name}</h5>

        <div className="navbar-fixed">
          <nav style={{backgroundColor: 'rgb(0, 188, 212)'}}>
            <div className="nav-wrapper">
              <ul className="hide-on-med-and-down">
                <li style={{marginLeft: 25}} className={isInstalledActive ? "active" : ""}>
                  <Link style={styles.tab} activeClassName='active' to={`/myGames/${this.props.game.id}/installed`}>Installed addons</Link>
                </li>
                <li className={isBrowseActive ? "active" : ""}>
                  <Link style={styles.tab} activeClassName='active' to={`/myGames/${this.props.game.id}/browse`}>Browse addons</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {this.props.children}

      </div>
    );
  }
}

GamePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, routerProps){
  let currGame = null;
  for (let game of state.installationsList){
    if (game.id == routerProps.params.id){
      currGame = game;
      break;
    }
  }

  return {
    game: currGame,
    gamesMeta: state.gamesMeta
  }
}

export default connect(mapStateToProps)(GamePage);
