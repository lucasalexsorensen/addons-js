export const INCREMENT_CONFIG_STEPPER_STATE = 'INCREMENT_CONFIG_STEPPER_STATE';
export const DECREMENT_CONFIG_STEPPER_STATE = 'DECREMENT_CONFIG_STEPPER_STATE';

export function increment() {
  return {
    type: INCREMENT_CONFIG_STEPPER_STATE
  };
}

export function decrement() {
  return {
    type: DECREMENT_CONFIG_STEPPER_STATE
  };
}
