import { OPEN_CONFIGURE_DIALOG, CLOSE_CONFIGURE_DIALOG, TOGGLE_CONFIGURE_DIALOG } from '../actions/toggleConfigureDialog';

let initialState = false;

let toggleConfigureDialog = (state = initialState, action) => {
  switch(action.type){
    case OPEN_CONFIGURE_DIALOG:
          return true;
    case CLOSE_CONFIGURE_DIALOG:
          return false;
    case TOGGLE_CONFIGURE_DIALOG:
          return !state;
    default:
          return state;
  }
}

export default toggleConfigureDialog;
