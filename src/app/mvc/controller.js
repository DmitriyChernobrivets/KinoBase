export class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  renderComponent() {
    this.view.render();
  }
}
