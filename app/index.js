import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import { syncHistoryWithStore } from 'react-router-redux';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);


var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

/* global stylesheet */
import './app.global.css';

import { MuiThemeProvider } from 'material-ui';

/* containers */
import App from './containers/App';

import Home from './containers/Home';
import MyGames from './containers/MyGames';
import GamePage from './containers/GamePage';
import Settings from './containers/Settings';

import PageLayout from './components/PageLayout';
/* END containers */

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route component={App}>
          <Route path="/">
            <Route component={PageLayout}>
              <IndexRoute component={Home} />
            </Route>
          </Route>

          <Route path="myGames">
            <Route component={PageLayout}>
              <IndexRoute component={MyGames} />
            </Route>
            <Route path=":gameId" component={GamePage} />
          </Route>

          <Route path="settings">
            <Route component={PageLayout}>
              <IndexRoute component={Settings} />
            </Route>
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
