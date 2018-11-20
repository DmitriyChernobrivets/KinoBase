export default class EventEmmiter {
  constructor() {
    this.events = {};
  }
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }
  emite(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(callback => {
        callback(...args);
      });
    }
  }
}
