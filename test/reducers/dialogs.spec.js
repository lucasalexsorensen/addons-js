import { expect } from 'chai';
import dialogs from '../../app/reducers/dialogs';
import { OPEN_CONFIGURE_DIALOG, CLOSE_CONFIGURE_DIALOG, TOGGLE_CONFIGURE_DIALOG,
  OPEN_NEW_GAME_DIALOG, CLOSE_NEW_GAME_DIALOG, TOGGLE_NEW_GAME_DIALOG } from '../../app/actions/dialogs';

describe('reducers', () => {
  describe('configure dialog', () => {
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

  describe('new game dialog', () => {
    it('should handle initial state', () => {
      expect(dialogs(undefined, {})).to.include({configure: false});
    });

    it('should handle OPEN_CONFIGURE_DIALOG', () => {
      expect(dialogs({newGame: false}, { type: OPEN_NEW_GAME_DIALOG })).to.include({newGame: true});
    });

    it('should handle CLOSE_CONFIGURE_DIALOG', () => {
      expect(dialogs({newGame: true}, { type: CLOSE_NEW_GAME_DIALOG })).to.include({newGame: false});
    });

    it('should handle TOGGLE_CONFIGURE_DIALOG', () => {
      expect(dialogs({newGame: false}, { type: TOGGLE_NEW_GAME_DIALOG })).to.include({newGame: true});
      expect(dialogs({newGame: true}, { type: TOGGLE_NEW_GAME_DIALOG })).to.include({newGame: false});
    });

    it('should handle unknown action type', () => {
      expect(dialogs({newGame: false}, { type: 'unknown' })).to.include({newGame: false});
      expect(dialogs({newGame: true}, { type: 'unknown' })).to.include({newGame: true});
    });
  });
});
