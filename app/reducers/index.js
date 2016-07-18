import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import gamesList from './gamesList'
import gamesMeta from './gamesMeta'
import filterGamesText from './filterGamesText' ;
import filterInstalledAddons from './filterInstalledAddons';
import configStepperState from './configStepperState';
import configNewInstallationForm from './configNewInstallationForm'
import toggleConfigureDialog from './toggleConfigureDialog';
import toggleNewGameDialog from './toggleNewGameDialog';
import addonsBrowse from './addonsBrowse';

const rootReducer = combineReducers({
  toggleConfigureDialog,
  toggleNewGameDialog,
  configStepperState,
  configNewInstallationForm,
  gamesList,
  gamesMeta,
  filterGamesText,
  filterInstalledAddons,
  addonsBrowse,
  routing
});

export default rootReducer;
