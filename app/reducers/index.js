import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import gamesList from './gamesList'
import filterGamesText from './filterGamesText' ;
import filterInstalledAddons from './filterInstalledAddons';
import configStepperState from './configStepperState';
import toggleConfigureDialog from './toggleConfigureDialog';

const rootReducer = combineReducers({
  toggleConfigureDialog,
  configStepperState,
  gamesList,
  filterGamesText,
  filterInstalledAddons,
  routing
});

export default rootReducer;
