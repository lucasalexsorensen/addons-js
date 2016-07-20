export const OPEN_CONFIGURE_DIALOG = 'OPEN_CONFIGURE_DIALOG';
export const CLOSE_CONFIGURE_DIALOG = 'CLOSE_CONFIGURE_DIALOG';
export const TOGGLE_CONFIGURE_DIALOG = 'TOGGLE_CONFIGURE_DIALOG';
export const OPEN_NEW_GAME_DIALOG = 'OPEN_NEW_GAME_DIALOG';
export const CLOSE_NEW_GAME_DIALOG = 'CLOSE_NEW_GAME_DIALOG';
export const TOGGLE_NEW_GAME_DIALOG = 'TOGGLE_NEW_GAME_DIALOG';

export function openConfigure() {
  return {
    type: OPEN_CONFIGURE_DIALOG
  };
}

export function closeConfigure() {
  return {
    type: CLOSE_CONFIGURE_DIALOG
  };
}

export function toggleConfigure() {
  return {
    type: TOGGLE_CONFIGURE_DIALOG
  };
}

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
  };
}
