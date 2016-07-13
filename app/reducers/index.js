import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import gamesList from './gamesList'
import filterGamesText from './filterGamesText' ;
import filterInstalledAddons from './filterInstalledAddons';
import homeStepperState from './homeStepper';
import toggleConfigureDialog from './toggleConfigureDialog';

const rootReducer = combineReducers({
  toggleConfigureDialog,
  homeStepperState,
  gamesList,
  filterGamesText,
  filterInstalledAddons,
  routing
});

export default rootReducer;
