import { OPEN_CONFIGURE_DIALOG, CLOSE_CONFIGURE_DIALOG, TOGGLE_CONFIGURE_DIALOG, OPEN_NEW_GAME_DIALOG, CLOSE_NEW_GAME_DIALOG, TOGGLE_NEW_GAME_DIALOG } from '../actions/dialogs';

let initialState = {
  configure: false,
  newGame: false
};

let dialogs = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CONFIGURE_DIALOG:
      return {
        ...state,
        configure: true
      };
    case CLOSE_CONFIGURE_DIALOG:
      return {
        ...state,
        configure: false
      };
    case TOGGLE_CONFIGURE_DIALOG:
      return Object.assign({}, state, {
        configure: !state.configure
      });
    case OPEN_NEW_GAME_DIALOG:
      return {
        ...state,
        newGame: true
      };
    case CLOSE_NEW_GAME_DIALOG:
      return {
        ...state,
        newGame: false
      };
    case TOGGLE_NEW_GAME_DIALOG:
      return Object.assign({}, state, {
        newGame: !state.newGame
      });
    default:
      return state;
  }
};

export default dialogs;
