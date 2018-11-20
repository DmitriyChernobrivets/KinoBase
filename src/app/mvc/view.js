export class View {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.el = null;
    this.events = {};
  }
  render(data) {
    this.el = document.querySelector(this.selector);
    if (!this.el) throw new Error(`Component ${this.selector} wasn't found`);
    const markup = this.template(data);
    this.el.innerHTML = markup;
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
