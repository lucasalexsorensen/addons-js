import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import initSettings from './initSettings';
import pathScanner from './pathScanner';
import installationsList from './installationsList';
import gamesMeta from './gamesMeta';
import filterGamesText from './filterGamesText' ;
import filterInstalledAddons from './filterInstalledAddons';
import configStepperState from './configStepperState';
import configNewInstallationForm from './configNewInstallationForm';
import dialogs from './dialogs';
import addonsBrowse from './addonsBrowse';

const rootReducer = combineReducers({
  initSettings,
  pathScanner,
  dialogs,
  configStepperState,
  configNewInstallationForm,
  installationsList,
  gamesMeta,
  filterGamesText,
  filterInstalledAddons,
  addonsBrowse,
  routing
});

export default rootReducer;
