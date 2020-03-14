import UIEvent from '../../src/module/UIEvent';

test('Should be able to dispatch when register successfully', () => {
  const uiEvent = new UIEvent();
  uiEvent.register('refresh', (arg) => {
    expect(arg).toBe('Hello');
  });
  uiEvent.dispatch('refresh', 'Hello');
});
