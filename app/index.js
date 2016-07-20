import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import { syncHistoryWithStore } from 'react-router-redux';
import { IndexRoute, Route, Router, IndexRedirect, hashHistory } from 'react-router';

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

import InstalledAddons from './containers/InstalledAddons';
import BrowsePage from './containers/BrowsePage';
import BrowseCategories from './containers/BrowseCategories';
import CategoryPage from './containers/CategoryPage';
import BrowseAllAddons from './containers/BrowseAllAddons';
/* END containers */

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route component={App}>
          <IndexRedirect to="/" />
          <Route path="/">
            <Route component={PageLayout}>
              <IndexRoute component={Home} />
            </Route>
          </Route>

          <Route path="myGames">
            <Route component={PageLayout}>
              <IndexRoute component={MyGames} />
            </Route>
            <Route path=":id" component={GamePage}>
              <IndexRedirect to="installed" />
              <Route path="installed" component={InstalledAddons} />
              <Route path="browse" component={BrowsePage}>
                <IndexRedirect to="categories" />
                <Route path="all" component={BrowseAllAddons} />
                <Route path="categories">
                  <IndexRoute component={BrowseCategories} />
                  <Route path=":catId">
                    <IndexRoute component={CategoryPage} />
                  </Route>
                </Route>
              </Route>
            </Route>
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
