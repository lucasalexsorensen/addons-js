export const UPDATE_GAME_TYPE = 'UPDATE_GAME_TYPE';
export const UPDATE_GAME_PATH = 'UPDATE_GAME_PATH';
export const UPDATE_GAME_NAME = 'UPDATE_GAME_NAME';

export function updateGameType(value){
  return {
    type: UPDATE_GAME_TYPE,
    value
  };
}

export function updateGamePath(value){
  return {
    type: UPDATE_GAME_PATH,
    value
  };
}

export function updateGameName(value){
  return {
    type: UPDATE_GAME_NAME,
    value
  }
}
