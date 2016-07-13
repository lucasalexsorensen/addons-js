export const INCREMENT_HOME_STEPPER_STATE = 'INCREMENT_HOME_STEPPER_STATE';
export const DECREMENT_HOME_STEPPER_STATE = 'DECREMENT_HOME_STEPPER_STATE';

export function increment() {
  return {
    type: INCREMENT_HOME_STEPPER_STATE
  };
}

export function decrement() {
  return {
    type: DECREMENT_HOME_STEPPER_STATE
  };
}
