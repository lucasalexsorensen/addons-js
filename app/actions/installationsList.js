export const ADD_GAME_TO_LIST = 'ADD_GAME_TO_LIST';
export const REMOVE_GAME_FROM_LIST = 'REMOVE_GAME_FROM_LIST';

export function addGame(game) {
  return {
    type: ADD_GAME_TO_LIST,
    game
  };
}

export function removeGame(gameId) {
  return {
    type: REMOVE_GAME_FROM_LIST,
    gameId
  };
}
