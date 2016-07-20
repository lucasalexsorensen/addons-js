import { INCREMENT_CONFIG_STEPPER_STATE, DECREMENT_CONFIG_STEPPER_STATE } from '../actions/configStepperState';

let initialState = 0;

let configStepperState = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CONFIG_STEPPER_STATE:
      return state + 1;
    case DECREMENT_CONFIG_STEPPER_STATE:
      return state - 1;
    default:
      return state;
  }
};

export default configStepperState;
