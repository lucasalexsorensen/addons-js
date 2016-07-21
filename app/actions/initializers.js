export const REQUEST_UPDATE_INIT_SETTINGS = 'REQUEST_UPDATE_INIT_SETTINGS';
export const RECEIVE_UPDATE_INIT_SETTINGS = 'RECEIVE_UPDATE_INIT_SETTINGS';

export function requestUpdateInitSettings(){
  return {
    type: REQUEST_UPDATE_INIT_SETTINGS
  }
}

export function receiveUpdateInitSettings(settings = {firstRun: true}){
  return {
    type: RECEIVE_UPDATE_INIT_SETTINGS,
    settings
  }
}

export function updateInitSettings(){
  return dispatch => {
    dispatch(requestUpdateInitSettings());
    dispatch(receiveUpdateInitSettings({
      firstRun: false
    }));
  }
}
