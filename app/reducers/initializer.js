import { REQUEST_UPDATE_INIT_SETTINGS, RECEIVE_UPDATE_INIT_SETTINGS } from '../actions/initializers';

let initialState = {
  isSetting: false,
  settings: {
    firstRun: true
  }
};

let initializer = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_UPDATE_INIT_SETTINGS:
        return {
          ...state,
          isSetting: true
        };
    case RECEIVE_UPDATE_INIT_SETTINGS:
          return {
            ...state,
            isSetting: false,
            settings: {
              ...state.settings,
              firstRun: action.settings.firstRun
            }
          };
    default:
        return state;
  }
}

export default initializer;
