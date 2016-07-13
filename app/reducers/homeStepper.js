import { INCREMENT_HOME_STEPPER_STATE, DECREMENT_HOME_STEPPER_STATE } from '../actions/homeStepperState'

let initialState = 0;

let homeStepperState = (state = initialState, action) => {
  switch (action.type){
    case INCREMENT_HOME_STEPPER_STATE:
          return state+1;
    case DECREMENT_HOME_STEPPER_STATE:
          return state-1;
    default:
          return state;
  }
};

export default homeStepperState;
