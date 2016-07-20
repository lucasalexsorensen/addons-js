import { expect } from 'chai';
import configStepperState from '../../app/reducers/configStepperState';
import { INCREMENT_CONFIG_STEPPER_STATE, DECREMENT_CONFIG_STEPPER_STATE } from '../../app/actions/configStepperState';


describe('reducers', () => {
  describe('configStepperState', () => {
    it('should handle initial state', () => {
      expect(configStepperState(undefined, {})).to.equal(0);
    });
    
    it('should handle INCREMENT_CONFIG_STEPPER_STATE', () => {
      expect(configStepperState(1, { type: INCREMENT_CONFIG_STEPPER_STATE })).to.equal(2);
    });
    
    it('should handle DECREMENT_CONFIG_STEPPER_STATE', () => {
      expect(configStepperState(1, { type: DECREMENT_CONFIG_STEPPER_STATE })).to.equal(0);
    });

    it('should handle unknown action type', () => {
      expect(configStepperState(1, { type: 'unknown' })).to.equal(1);
    });
  });
});
