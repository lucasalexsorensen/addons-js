import { OPEN_NEW_GAME_DIALOG, CLOSE_NEW_GAME_DIALOG, TOGGLE_NEW_GAME_DIALOG } from '../actions/toggleNewGameDialog';

let initialState = false;

let toggleNewGameDialog = (state = initialState, action) => {
  switch(action.type){
    case OPEN_NEW_GAME_DIALOG:
          return true;
    case CLOSE_NEW_GAME_DIALOG:
          return false;
    case TOGGLE_NEW_GAME_DIALOG:
          return !state;
    default:
          return state;
  }
}

export default toggleNewGameDialog;
