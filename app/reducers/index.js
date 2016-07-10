import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import gamesList from './gamesList' ;

const rootReducer = combineReducers({
  gamesList,
  routing
});

export default rootReducer;
