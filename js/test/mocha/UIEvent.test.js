import * as assert from 'assert';
import UIEvent from '../../src/module/UIEvent';

describe('UIEvent', () => {
  describe('#register(), #dispatch', () => {
    it('should be able to dispatch when register successfully', () => {
      const uiEvent = new UIEvent();
      uiEvent.register('refresh', (arg) => {
        assert.equal(arg, 'Hello');
      });
      uiEvent.dispatch('refresh', 'Hello');
    });
  });

  describe('#on(), #dispatch', () => {
    it('should be able to dispatch when add on listener successfully', () => {
      const uiEvent = new UIEvent();
      uiEvent.on('refresh', (arg) => {
        assert.equal(arg, 'Hello');
      });
      uiEvent.dispatch('refresh', 'Hello');
    });
  });
});
