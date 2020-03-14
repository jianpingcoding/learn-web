/*
  @class name: UIEvent
  @methods:
    object.on(eventName, fn)
    object.off(eventName, fn)
    object.once(eventName, fn)
    object.dispatch(eventName, arg)
  @usage:
    import UIEvent from './module/UIEvent';
    const event = new UIEvent();
    event.on('refresh', () => console.log('Trigger refresh'));
  @author: ganjianping
*/
export default class UIEvent {
  constructor() {
    this.defineEvent = {};
  }

  register(eventName, callBackFunc) {
    if (!this.defineEvent[eventName]) {
      this.defineEvent[eventName] = [callBackFunc];
    } else {
      this.defineEvent[eventName].push(callBackFunc);
    }
  }

  on(eventName, callBackFunc) {
    return this.register(eventName, callBackFunc);
  }

  once(eventName, callBackFunc) {
    const onceCallBackFunc = (arg) => {
      if (typeof callBackFunc === 'function') {
        callBackFunc(arg);
      }
      this.off(eventName, callBackFunc);
    };
    this.register(eventName, onceCallBackFunc);
  }

  dispatch(eventName, arg) {
    try {
      const callBackFuncs = this.defineEvent[eventName];
      callBackFuncs.forEach((callBackFunc) => {
        if (typeof callBackFunc === 'function') {
          callBackFunc(arg);
        }
      });
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.log('UIEvent dispatch error: ', ex);
    }
  }

  off(eventName, callBackFunc) {
    const defineEventCbs = this.defineEvent[eventName];
    if (defineEventCbs) {
      if (typeof callBackFunc === 'undefined') {
        delete this.defineEvent[eventName];
      } else {
        for (let i = 0, len = defineEventCbs.length; i < len; i += 1) {
          if (callBackFunc === defineEventCbs[i]) {
            this.defineEvent[eventName][i] = null;
            setTimeout(() => this.defineEvent[eventName].splice(i, 1), 0);
            break;
          }
        }
      }
    }
  }

  clean() {
    this.defineEvent = {};
  }
}
