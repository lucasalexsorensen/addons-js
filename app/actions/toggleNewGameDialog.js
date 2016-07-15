export const OPEN_NEW_GAME_DIALOG = 'OPEN_NEW_GAME_DIALOG';
export const CLOSE_NEW_GAME_DIALOG = 'CLOSE_NEW_GAME_DIALOG';
export const TOGGLE_NEW_GAME_DIALOG = 'TOGGLE_NEW_GAME_DIALOG';

export function openAddGame() {
  return {
    type: OPEN_NEW_GAME_DIALOG
  };
}

export function closeAddGame() {
  return {
    type: CLOSE_NEW_GAME_DIALOG
  };
}

export function toggleAddGame() {
  return {
    type: TOGGLE_NEW_GAME_DIALOG
  }
}
