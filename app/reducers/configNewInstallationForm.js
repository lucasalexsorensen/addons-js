import { UPDATE_GAME_TYPE, UPDATE_GAME_PATH, UPDATE_GAME_NAME } from '../actions/configNewInstallationForm';

let initialState = {
  gameTypeId: 0,
  gamePath: "",
  gameName: ""
};

let configNewInstallationForm = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_GAME_TYPE:
          return Object.assign({}, state, {
            gameTypeId: action.value
          });
    case UPDATE_GAME_PATH:
          return Object.assign({}, state, {
            gamePath: action.value
          });
    case UPDATE_GAME_NAME:
          return Object.assign({}, state, {
            gameName: action.value
          });
    default:
          return state;
  }
};

export default configNewInstallationForm;
