import { Controller } from "../../mvc/controller";
import { cardListView } from "../View/cardList.view";
import { model } from "../Model/Model";

export class CardListController extends Controller {
  constructor(view, model) {
    super(view, model);

    document.addEventListener("DOMContentLoaded", this.filmsLatest.bind(this));
    this.view.filmsBtn.addEventListener("click", this.filmsLatest.bind(this));
    // document
    //   .querySelector(".js-btn-latest")
    //   .addEventListener("click", this.topRate.bind(this));
  }

  filmsLatest() {
    this.model
      .latestPromise()
      // .then(res => console.log(res.data))
      .then(({ data }) => this.view.render(data.results))
      .catch(err => console.log(err));
  }
  topRate() {
    this.model
      .topRatedPromise()
      .then(({ data }) => this.view.render(data.results))
      .catch(err => console.log(err));
  }
}
