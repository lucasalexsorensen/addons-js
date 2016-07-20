import { expect } from 'chai';
import dialogs from '../../app/reducers/dialogs';
import { OPEN_CONFIGURE_DIALOG, CLOSE_CONFIGURE_DIALOG, TOGGLE_CONFIGURE_DIALOG } from '../../app/actions/dialogs';

describe('reducers', () => {
  describe('toggleConfigureDialog', () => {
    it('should handle initial state', () => {
      expect(dialogs(undefined, {})).to.include({configure: false});
    });

    it('should handle OPEN_CONFIGURE_DIALOG', () => {
      expect(dialogs({configure: false}, { type: OPEN_CONFIGURE_DIALOG })).to.include({configure: true});
    });

    it('should handle CLOSE_CONFIGURE_DIALOG', () => {
      expect(dialogs({configure: true}, { type: CLOSE_CONFIGURE_DIALOG })).to.include({configure: false});
    });

    it('should handle TOGGLE_CONFIGURE_DIALOG', () => {
      expect(dialogs({configure: false}, { type: TOGGLE_CONFIGURE_DIALOG })).to.include({configure: true});
      expect(dialogs({configure: true}, { type: TOGGLE_CONFIGURE_DIALOG })).to.include({configure: false});
    });

    it('should handle unknown action type', () => {
      expect(dialogs({configure: false}, { type: 'unknown' })).to.include({configure: false});
      expect(dialogs({configure: true}, { type: 'unknown' })).to.include({configure: true});
    });
  });
});
