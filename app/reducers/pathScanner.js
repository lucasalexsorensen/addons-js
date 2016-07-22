import { REQUEST_UPDATE_PATHS, RECEIVE_UPDATE_PATHS } from '../actions/pathScanner';

let initialState = {
  isScanning: false,
  paths: []
};

let pathScanner = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_UPDATE_PATHS:
          return {
            ...state,
            isScanning: true
          };
    case RECEIVE_UPDATE_PATHS:
          return {
            ...state,
            isScanning: false,
            paths: action.paths
          };
    default:
          return state;
  }
};

export default pathScanner;
