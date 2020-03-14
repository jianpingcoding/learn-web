import UIEvent from './module/UIEvent';

const uiEvent = new UIEvent();
UIEvent.on('refresh', () => {
  console.log('Trigger refresh');
});

UIEvent.dispatch('refresh', 'Data');
