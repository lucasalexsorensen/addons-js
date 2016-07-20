import { expect } from 'chai';
import toggleConfigureDialog from '../../app/reducers/dialogs';
import { OPEN_CONFIGURE_DIALOG, CLOSE_CONFIGURE_DIALOG, TOGGLE_CONFIGURE_DIALOG } from '../../app/actions/dialogs';

describe('reducers', () => {
  describe('toggleConfigureDialog', () => {
    it('should handle initial state', () => {
      expect(toggleConfigureDialog(undefined, {})).to.equal(false);
    });

    it('should handle OPEN_CONFIGURE_DIALOG', () => {
      expect(toggleConfigureDialog(false, { type: OPEN_CONFIGURE_DIALOG })).to.equal(true);
    });

    it('should handle CLOSE_CONFIGURE_DIALOG', () => {
      expect(toggleConfigureDialog(true, { type: CLOSE_CONFIGURE_DIALOG })).to.equal(false);
    });

    it('should handle TOGGLE_CONFIGURE_DIALOG', () => {
      expect(toggleConfigureDialog(false, { type: TOGGLE_CONFIGURE_DIALOG })).to.equal(true);
      expect(toggleConfigureDialog(true, { type: TOGGLE_CONFIGURE_DIALOG })).to.equal(false);
    });

    it('should handle unknown action type', () => {
      expect(toggleConfigureDialog(false, { type: 'unknown' })).to.equal(false);
      expect(toggleConfigureDialog(true, { type: 'unknown' })).to.equal(true);
    });
  });
});
