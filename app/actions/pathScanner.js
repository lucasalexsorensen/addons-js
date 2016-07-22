export const REQUEST_UPDATE_PATHS = 'REQUEST_UPDATE_PATHS';
export const RECEIVE_UPDATE_PATHS = 'RECEIVE_UPDATE_PATHS';

import os from 'os';
import fs from 'fs';

export function requestUpdatePaths(){
  return {
    type: REQUEST_UPDATE_PATHS
  }
}

export function receiveUpdatePaths(settings = {paths: []}){
  return {
    type: RECEIVE_UPDATE_PATHS,
    paths: settings.paths
  }
}

export function updatePaths(){
  return dispatch => {
    dispatch(requestUpdatePaths());

    let platform = os.platform();
    if (platform === "win32"){
      let winPaths = [];
      if (fs.existsSync("C:\\Program Files (x86)\\World of Warcraft\\Wow.exe")) winPaths.push("C:\\Program Files (x86)\\World of Warcraft");
      if (fs.existsSync("C:\\Program Files\\World of Warcraft\\Wow.exe")) winPaths.push("C:\\Program Files (x86)\\World of Warcraft");

      dispatch(receiveUpdatePaths({
        paths: winPaths
      }));
    }else{
      dispatch(receiveUpdatePaths({
        paths: []
      }));
    }
  }
}
