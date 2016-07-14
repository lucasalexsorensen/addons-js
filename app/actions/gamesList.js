export const ADD_GAME_TO_LIST = 'ADD_GAME_TO_LIST';

export function addGame(game) {
  return {
    type: ADD_GAME_TO_LIST,
    game
  }
}
