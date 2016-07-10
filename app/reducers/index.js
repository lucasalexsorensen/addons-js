import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import gamesList from './gamesList'
import filterGamesText from './filterGamesText' ;

const rootReducer = combineReducers({
  gamesList,
  filterGamesText,
  routing
});

export default rootReducer;
