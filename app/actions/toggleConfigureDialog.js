export const OPEN_CONFIGURE_DIALOG = 'OPEN_CONFIGURE_DIALOG';
export const CLOSE_CONFIGURE_DIALOG = 'CLOSE_CONFIGURE_DIALOG';
export const TOGGLE_CONFIGURE_DIALOG = 'TOGGLE_CONFIGURE_DIALOG';

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
