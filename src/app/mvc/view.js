export class View {
  constructor(template) {
    this.selector = ".container";
    this.template = template;
    this.el = null;
    this.events = {};
  }
  render(data) {
    this.el = document.querySelector(this.selector);
    if (!this.el) throw new Error(`Component ${this.selector} wasn't found`);
    const markup = this.template(data);
    this.el.innerHTML = markup;
  }

  renderFav(data) {
    this.el = document.querySelector(this.selector);
    if (!this.el) throw new Error(`Component ${this.selector} wasn't found`);
    const markup = this.template(data);
    this.el.insertAdjacentHTML("beforeend", markup);
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